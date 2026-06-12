//auth guard
(function () {
  //Get logged in user
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  //Define page access rules
  const pagePermissions = {
    '/admin/dashboard.html': ['admin'],
    '/admin/add-sub-admin.html': ['admin'],
    '/admin/manage-agents.html': ['admin'],
    '/admin/reports.html': ['admin'],
    '/agents/dashboard.html': ['agent'],
    '/agents/add-listing.html': ['agent', 'admin'],
    '/users/dashboard.html': ['user'],
    '/users/favourites.html': ['user'],
  };

  //Determine current page filename
  const currentPath = window.location.pathname;

  //check authentication and authorization
  if (pagePermissions[currentPath]) {
    if (!currentUser) {
      //Not logged in, kick to login
      window.location.href = '/auth.html';
      return;
    }

    const allowedRoles = pagePermissions[currentPath];
    if (!allowedRoles.includes(currentUser.role)) {
      window.location.href = "/index.html";
      return;
    }
  }

  //Dynamic nav bar
  document.addEventListener('DOMContentLoaded', () => {
    renderNavbar(currentUser);
  });
});//();

function renderNavbar(){
  return;
}

function logout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/auth.html';
}


// ══ FOOTER LINKS ══
const footerColumns = [
  {
    title: "Resources",
    items: [
      "Stamp Duty Calculator",
      "House Price Index",
      "Property guides",
      "Property news",
      "Buyer guides",
      "Seller guides",
      "Renter guides",
      "Landlord guides",
      "Removals",
      "Energy efficiency",
      "Mortgage in Principle",
      "Mortgage Calculator",
      "Mortgage guides",
    ],
  },
  {
    title: "Search",
    items: [
      "Search homes for sale",
      "Search homes for rent",
      "Commercial for sale",
      "Commercial to rent",
      "Overseas homes for sale",
      "Search sold house prices",
      "Find an agent",
      "Student accommodation",
      "Retirement homes",
      "New homes",
    ],
  },
  {
    title: "Locations",
    items: [
      "Major towns and cities in the UK",
      "London",
      "Cornwall",
      "Glasgow",
      "Cardiff",
      "Edinburgh",
      "Spain",
      "France",
      "Portugal",
    ],
  },
  {
    title: "NestHere",
    items: [
      "About",
      "Press centre",
      "Investor relations",
      "Contact us",
      "Careers",
      "Agent sign in",
      "Home Views",
    ],
  },
  {
    title: "Professional",
    pro: true,
    items: [
      "Data Services",
      "Advertise on NestHere",
      "Overseas agents and developers",
      "Home and property related services",
      "Advertise commercial property",
      "Business Hub",
    ],
  },
];

function renderFooter() {
  const c = document.getElementById("footer-top");
  if (!c) return;
  const appCol = `<div class="footer-col footer-appcol">
      <h4>Download the NestHere app</h4>
      <div class="store-badges">
        <a class="store-badge" onclick="showToast('The NestHere app is coming soon to the App Store')">
          <svg viewBox="0 0 24 24" width="22" height="22"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <span><small>Download on the</small>App Store</span></a>
        <a class="store-badge" onclick="showToast('The NestHere app is coming soon to Google Play')">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3.6 2.2c-.3.2-.5.6-.5 1.1v17.4c0 .5.2.9.5 1.1l9.2-9.8L3.6 2.2zm10.3 8.9l2.6-2.7-9.1-5.2c-.3-.2-.6-.2-.9-.1l7.4 8zm0 1.8l-7.4 8c.3.1.6.1.9-.1l9.1-5.2-2.6-2.7zm5-3.4l-2.2-1.2-2.8 3 2.8 3 2.2-1.2c.8-.5.8-2 0-2.6z"/></svg>
          <span><small>Get it on</small>Google Play</span></a>
      </div>
    </div>`;
  const cols = footerColumns
    .map(
      (col) => `
    <div class="footer-col">
      <h4>${col.title}</h4>
      ${col.pro ? `<a class="footer-pro" onclick="openContent('Business Hub')">NestHere Pro</a>` : ""}
      ${col.items.map((it) => `<a data-label="${it}" data-cat="${col.title}">${it}</a>`).join("")}
    </div>`,
    )
    .join("");
  c.innerHTML = appCol + cols;
  c.onclick = (e) => {
    const a = e.target.closest("a[data-label]");
    if (a) footerRoute(a.dataset.label, a.dataset.cat);
  };
}

function footerRoute(label, category) {
  const routes = {
    "Search homes for sale": () => showCatalogue("buy"),
    "Search homes for rent": () => showCatalogue("rent"),
    "Search sold house prices": () => showCatalogue("sold"),
    "Agent sign in": () => agentSignIn(),
    "Major towns and cities in the UK": () => showCatalogue("buy"),
    London: () => showCatalogue("buy", "London"),
    Cornwall: () => showCatalogue("buy", "Cornwall"),
    Glasgow: () => showCatalogue("buy", "Glasgow"),
    Cardiff: () => showCatalogue("buy", "Cardiff"),
    Edinburgh: () => showCatalogue("buy", "Edinburgh"),
    Spain: () => showCatalogue("buy", "Spain"),
    France: () => showCatalogue("buy", "France"),
    Portugal: () => showCatalogue("buy", "Portugal"),
  };
  (routes[label] || (() => openContent(label)))();
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => (document.getElementById("nav-layout").innerHTML = data));

  fetch("/components/footer.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("footer-layout").innerHTML = data),
    );

  renderFooter();
});

// ══ SAVE / ALERT ══
function toggleSave(id, btn) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
    btn.classList.remove('saved');
    btn.querySelector('svg').setAttribute('fill','none');
    showToast('Removed from favourites');
  } else {
    savedIds.add(id);
    btn.classList.add('saved');
    btn.querySelector('svg').setAttribute('fill','var(--green)');
    showModal('modal-save');
  }
}
function saveProperty() { closeModal('modal-save'); showToast('✓ Property saved to favourites!'); }
function createAlert() { closeModal('modal-alert'); showToast('✓ Property alert created!'); }

// ══ TOAST ══
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ══ UI HELPERS ══
function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
  m.style.flexDirection = 'column';
}
function setSearch(loc) {
  const el = document.getElementById('ai-home-input');
  if (el) el.value = loc;
  showToast('Searching for properties in ' + loc);
  setTimeout(() => showCatalogue('buy'), 600);
}
function removeChip(btn) { btn.parentElement.remove(); }
function clearChips() { document.getElementById('filter-chips').innerHTML = ''; }



// ══ INIT ══
renderFooter();
//renderHomeGrid();

