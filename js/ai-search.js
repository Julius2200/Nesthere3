// ══ AI SEARCH ══
function runAISearch() {
  const query = document.getElementById("ai-home-input").value.trim();
  if (!query) return;
  showAIModal(query);
}
function runAISearchCat() {
  const query = document.getElementById("ai-cat-input").value.trim();
  if (!query) return;
  showAIModal(query);
}
function showAIModal(query) {
  document.getElementById("ai-query-display").textContent = '"' + query + '"';
  document.getElementById("ai-thinking").style.display = "flex";
  document.getElementById("ai-result").classList.add("hidden");
  document.getElementById("ai-btns").classList.add("hidden");
  document.getElementById("ai-modal").classList.add("show");
  // Simulate AI processing
  setTimeout(() => {
    document.getElementById("ai-thinking").style.display = "none";
    const result = parseAIQuery(query);
    document.getElementById("ai-result").innerHTML = result;
    document.getElementById("ai-result").classList.remove("hidden");
    document.getElementById("ai-btns").classList.remove("hidden");
  }, 1800);
}
function parseAIQuery(q) {
  const lower = q.toLowerCase();
  let beds = lower.match(/(\d+)\s*bed/) ? lower.match(/(\d+)\s*bed/)[1] : "3";
  let location =
    lower.match(/in\s+([a-z\s]+?)(\s+under|\s+with|\s+near|$)/)?.[1]?.trim() ||
    "London";
  let maxPrice = lower.match(/under\s*[£]?(\d+k?)/)?.[1] || "600k";
  let features = [];
  if (lower.includes("garden")) features.push("Garden");
  if (lower.includes("parking") || lower.includes("garage"))
    features.push("Parking");
  if (lower.includes("new build")) features.push("New Build");
  if (lower.includes("school")) features.push("Near good schools");
  location = location.charAt(0).toUpperCase() + location.slice(1);
  return `<strong>🤖 AI understood your search:</strong><br><br>
    📍 <strong>Location:</strong> ${location}<br>
    🛏 <strong>Bedrooms:</strong> ${beds}+ bedrooms<br>
    💷 <strong>Max Price:</strong> ${maxPrice}<br>
    ${features.length ? "✅ <strong>Features:</strong> " + features.join(", ") + "<br>" : ""}
    <br>Found <strong>47 matching properties</strong> — ready to show your results.`;
}
function closeAI() {
  document.getElementById("ai-modal").classList.remove("show");
}
function goToCatalogue() {
  closeAI();
  showCatalogue(homeTab || "buy");
}
