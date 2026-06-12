// ══ ADD LISTING WIZARD ══
let wizStep = 1;
let lastListedId = null;
let newListing = { images: [], amenities: [], passport: [], features: [] };
function val(id) {
  const e = document.getElementById(id);
  return e ? e.value.trim() : "";
}

function openAddListing() {
  if (!isSignedIn) {
    requireSignIn(
      "Sign in to your agent account to list a property on NestHere.",
      openAddListing,
      "Agent sign in",
    );
    return;
  }
  isAgent = true;
  showPage("addlisting");
  resetWizard();
}

function resetWizard() {
  newListing = { images: [], amenities: [], passport: [], features: [] };
  [
    "nl-type",
    "nl-listing",
    "nl-street",
    "nl-city",
    "nl-postcode",
    "nl-price",
    "nl-sqft",
    "nl-beds",
    "nl-baths",
    "nl-video",
    "nl-virtual",
    "nl-desc",
    "nl-epc",
    "nl-tenure",
    "nl-tax",
    "nl-amenity-input",
    "pe-date",
    "pe-type",
    "pe-desc",
    "pe-cost",
    "pe-contractor",
  ].forEach((id) => {
    const e = document.getElementById(id);
    if (e) e.value = "";
  });
  document.querySelectorAll(".nl-feature").forEach((c) => (c.checked = false));
  document
    .querySelectorAll("#page-addlisting .invalid")
    .forEach((e) => e.classList.remove("invalid"));
  document
    .querySelectorAll("#page-addlisting .field-error.show")
    .forEach((e) => e.classList.remove("show"));
  syncPriceLabel();
  renderThumbs();
  renderAmenities();
  renderEntries();
  goWizStep(1);
}

function syncPriceLabel() {
  const isRent = val("nl-listing") === "To Rent";
  const lbl = document.getElementById("nl-price-label");
  if (lbl)
    lbl.innerHTML =
      (isRent ? "Monthly rent" : "Price") + ' <span class="req">*</span>';
}

function goWizStep(n) {
  wizStep = n;
  document
    .querySelectorAll("#page-addlisting .wiz-step")
    .forEach((s) => s.classList.toggle("active", +s.dataset.step === n));
  document.querySelectorAll("#wiz-stepper .step-node").forEach((node) => {
    const s = +node.dataset.step;
    node.classList.toggle("current", s === n);
    node.classList.toggle("done", s < n);
  });
  const labels = {
    1: "Basic information",
    2: "Photos & tours",
    3: "Description & features",
    4: "Location & map",
    5: "Property Passport",
    6: "Review & publish",
  };
  const sc = document.getElementById("wiz-stepcount");
  if (n <= 6) sc.textContent = "Step " + n + " of 6 — " + labels[n];
  const footer = document.getElementById("wiz-footer");
  footer.style.display = n === 7 ? "none" : "flex";
  document.getElementById("wiz-back").style.visibility =
    n === 1 ? "hidden" : "visible";
  const next = document.getElementById("wiz-next");
  const preview = document.getElementById("wiz-preview");
  if (n === 6) {
    next.textContent = "Publish listing";
    preview.classList.remove("hidden");
  } else {
    next.textContent = "Next →";
    preview.classList.add("hidden");
  }
  if (n === 4) {
    collectListing();
    const loc =
      [newListing.city, newListing.postcode].filter(Boolean).join(", ") ||
      "Location";
    document.getElementById("nl-map-loc").textContent = "📍 " + loc;
  }
  if (n === 6) {
    collectListing();
    renderReview();
  }
  window.scrollTo(0, 0);
}

function wizBack() {
  if (wizStep > 1) goWizStep(wizStep - 1);
}
function wizEdit(n) {
  goWizStep(n);
}
function wizNext() {
  if (wizStep === 1 && !validateStep1()) return;
  collectListing();
  if (wizStep < 6) goWizStep(wizStep + 1);
  else if (wizStep === 6) publishListing();
}

function validateStep1() {
  const required = [
    "nl-type",
    "nl-listing",
    "nl-street",
    "nl-city",
    "nl-postcode",
    "nl-price",
    "nl-beds",
    "nl-baths",
  ];
  let ok = true;
  required.forEach((id) => {
    const el = document.getElementById(id);
    const empty = !el.value.trim();
    const wrap = el.closest(".wiz-field");
    const err = wrap ? wrap.querySelector(".field-error") : null;
    el.classList.toggle("invalid", empty);
    if (err) err.classList.toggle("show", empty);
    if (empty) ok = false;
  });
  if (!ok) showToast("Add the required details to continue");
  return ok;
}

function collectListing() {
  newListing.type = val("nl-type");
  newListing.listing = val("nl-listing");
  newListing.street = val("nl-street");
  newListing.city = val("nl-city");
  newListing.postcode = val("nl-postcode");
  newListing.price = val("nl-price");
  newListing.sqft = val("nl-sqft");
  newListing.beds = val("nl-beds");
  newListing.baths = val("nl-baths");
  newListing.video = val("nl-video");
  newListing.virtual = val("nl-virtual");
  newListing.desc = val("nl-desc");
  newListing.features = Array.from(
    document.querySelectorAll(".nl-feature:checked"),
  ).map((c) => c.value);
  newListing.epc = val("nl-epc");
  newListing.tenure = val("nl-tenure");
  newListing.tax = val("nl-tax");
}

// ── Media ──
function handleImageFiles(files) {
  Array.from(files).forEach((f) => {
    if (!f.type.startsWith("image/")) return;
    const r = new FileReader();
    r.onload = (e) => {
      newListing.images.push(e.target.result);
      renderThumbs();
    };
    r.readAsDataURL(f);
  });
}
function renderThumbs() {
  const g = document.getElementById("nl-thumbs");
  if (!g) return;
  g.innerHTML = newListing.images
    .map(
      (src, i) =>
        `<div class="thumb"><img src="${src}" alt="Photo ${i + 1}"><button type="button" onclick="removeImage(${i})">×</button></div>`,
    )
    .join("");
}
function removeImage(i) {
  newListing.images.splice(i, 1);
  renderThumbs();
}

// ── Amenities ──
function addAmenity() {
  const input = document.getElementById("nl-amenity-input");
  const v = input.value.trim();
  if (!v) return;
  newListing.amenities.push(v);
  input.value = "";
  renderAmenities();
}
function renderAmenities() {
  const c = document.getElementById("nl-amenities");
  if (!c) return;
  c.innerHTML = newListing.amenities
    .map(
      (a, i) =>
        `<span class="amenity-chip">${a} <span class="x" onclick="removeAmenity(${i})">×</span></span>`,
    )
    .join("");
}
function removeAmenity(i) {
  newListing.amenities.splice(i, 1);
  renderAmenities();
}

// ── Passport entries ──
function iconForWork(t) {
  const s = (t || "").toLowerCase();
  if (s.includes("kitchen") || s.includes("bathroom") || s.includes("refurb"))
    return "🔧";
  if (s.includes("boiler")) return "💧";
  if (s.includes("roof")) return "🏠";
  if (s.includes("electric")) return "⚡";
  if (s.includes("paint")) return "🎨";
  if (s.includes("garden") || s.includes("landscap")) return "🌳";
  if (s.includes("assessment")) return "📋";
  return "🛠️";
}
function addPassportEntry() {
  const desc = val("pe-desc");
  if (!desc) {
    showToast("Add a description for the passport entry");
    return;
  }
  newListing.passport.push({
    date: val("pe-date"),
    type: val("pe-type") || "Other",
    desc,
    cost: val("pe-cost"),
    contractor: val("pe-contractor"),
  });
  ["pe-desc", "pe-cost", "pe-contractor"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  renderEntries();
  showToast("✓ Passport entry added");
}
function renderEntries() {
  const list = document.getElementById("nl-entry-list");
  if (!list) return;
  list.innerHTML = newListing.passport
    .map((en, i) => {
      const meta = [
        en.date,
        en.cost ? "£" + Number(en.cost).toLocaleString() : "",
        en.contractor,
      ]
        .filter(Boolean)
        .join(" · ");
      return `<div class="entry-item"><div class="e-icon">${iconForWork(en.type)}</div><div class="e-body"><div class="e-title">${en.type}</div><div class="e-meta">${meta || "No extra details"}</div></div><button class="e-remove" type="button" onclick="removeEntry(${i})">🗑</button></div>`;
    })
    .join("");
}
function removeEntry(i) {
  newListing.passport.splice(i, 1);
  renderEntries();
}

// ── Review ──
function fmtPrice(L) {
  const n = Number(L.price) || 0;
  if (!n) return "—";
  return L.listing === "To Rent"
    ? "£" + n.toLocaleString() + "/mo"
    : "£" + n.toLocaleString();
}
function renderReview() {
  const L = newListing;
  const addr = [L.street, L.city, L.postcode].filter(Boolean).join(", ") || "—";
  const sec = (title, step, inner) =>
    `<div class="review-section"><div class="rs-head"><h4>${title}</h4><button class="btn btn-ghost" style="font-size:12px;padding:5px 12px;" onclick="wizEdit(${step})">Edit</button></div>${inner}</div>`;
  const row = (k, v) =>
    `<div class="review-row"><span class="rk">${k}</span><span class="rv">${v === 0 || v ? v : "—"}</span></div>`;
  let html = "";
  html += sec(
    "Basic information",
    1,
    row("Property type", L.type) +
      row("Listing type", L.listing) +
      row("Address", addr) +
      row(L.listing === "To Rent" ? "Monthly rent" : "Price", fmtPrice(L)) +
      row("Bedrooms", L.beds) +
      row("Bathrooms", L.baths) +
      (L.sqft ? row("Floor area", L.sqft + " sq ft") : ""),
  );
  html += sec(
    "Photos & tours",
    2,
    row("Photos", (L.images.length || "0") + " uploaded") +
      row("Video tour", L.video || "—") +
      row("Virtual tour", L.virtual || "—"),
  );
  html += sec(
    "Description & features",
    3,
    row(
      "Description",
      L.desc
        ? L.desc.length > 120
          ? L.desc.slice(0, 120) + "…"
          : L.desc
        : "—",
    ) +
      row("Features", L.features.length ? L.features.join(", ") : "—") +
      row("EPC rating", L.epc) +
      row("Tenure", L.tenure) +
      row("Council tax band", L.tax),
  );
  html += sec(
    "Location",
    4,
    row("Location", addr) +
      row(
        "Nearby amenities",
        L.amenities.length ? L.amenities.join(", ") : "—",
      ),
  );
  const ppInner = L.passport.length
    ? row("Entries", L.passport.length) +
      L.passport.map((en) => row(en.type, en.date || "Date not set")).join("")
    : '<p style="font-size:13px;color:var(--grey-600);">No passport entries yet — you can add them after publishing.</p>';
  html += sec("Property Passport", 5, ppInner);
  document.getElementById("nl-review").innerHTML = html;
}

// ── Build / preview / publish ──
function buildPropFromListing(id) {
  const isRent = newListing.listing === "To Rent";
  const priceN = Number(newListing.price) || 0;
  const priceStr = isRent
    ? "£" + priceN.toLocaleString() + "/mo"
    : "£" + priceN.toLocaleString();
  const addr = [newListing.street, newListing.city, newListing.postcode]
    .filter(Boolean)
    .join(", ");
  const img =
    newListing.images[0] ||
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80";
  return {
    id,
    price: priceStr,
    priceN,
    type: newListing.type || "Property",
    addr,
    beds: Number(newListing.beds) || 0,
    baths: Number(newListing.baths) || 0,
    sqft: Number(newListing.sqft) || 0,
    badge: isRent ? "rent" : "sale",
    img,
    new: true,
    desc: newListing.desc,
    features: newListing.features.slice(),
    epc: newListing.epc,
    passport: newListing.passport.slice(),
  };
}

function previewListing() {
  collectListing();
  fillDetail(buildPropFromListing(0));
  showPage("detail");
  showToast("👁 Preview — not published yet");
}

function publishListing() {
  collectListing();
  if (
    !newListing.type ||
    !newListing.listing ||
    !newListing.street ||
    !newListing.price ||
    !newListing.beds ||
    !newListing.baths
  ) {
    showToast("Some required details are missing");
    wizEdit(1);
    return;
  }
  const id = Math.max(0, ...properties.map((p) => p.id)) + 1;
  const prop = buildPropFromListing(id);
  properties.push(prop);
  lastListedId = id;
  renderHomeGrid();
  renderAdmin();
  const isRent = prop.badge === "rent";
  document.getElementById("wiz-confirm-title").textContent =
    "Your property is live!";
  document.getElementById("wiz-confirm-sub").textContent =
    prop.addr +
    " is now published on NestHere and visible to " +
    (isRent ? "renters" : "buyers") +
    ".";
  goWizStep(7);
  showToast("✓ Property published");
}

function saveDraft() {
  collectListing();
  showToast("✓ Saved as draft — pick up where you left off any time");
  showPage("dashboard");
}

// Dropzone drag & drop
(function initDropzone() {
  const dz = document.getElementById("nl-dropzone");
  if (!dz) return;
  ["dragenter", "dragover"].forEach((ev) =>
    dz.addEventListener(ev, (e) => {
      e.preventDefault();
      dz.classList.add("drag");
    }),
  );
  ["dragleave", "drop"].forEach((ev) =>
    dz.addEventListener(ev, (e) => {
      e.preventDefault();
      dz.classList.remove("drag");
    }),
  );
  dz.addEventListener("drop", (e) => {
    if (e.dataTransfer && e.dataTransfer.files)
      handleImageFiles(e.dataTransfer.files);
  });
})();
