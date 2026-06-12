// ══ HOME HERO SEARCH ══
let homeTab = "buy";
let homeMode = "classic";
function setHomeTab(type) {
  homeTab = type;
  ["buy", "rent", "sold"].forEach((t) => {
    const b = document.getElementById("hs-tab-" + t);
    if (b) b.classList.toggle("active", t === type);
  });
  const labels = {
    buy: "Search properties to buy",
    rent: "Search properties to rent",
    sold: "Search sold property prices",
  };
  const lbl = document.getElementById("hs-label");
  if (lbl)
    lbl.textContent =
      homeMode === "ai" ? "Describe your ideal home" : labels[type];
}

function setHomeMode(mode) {
  homeMode = mode;
  const c = document.getElementById("hs-mode-classic");
  const a = document.getElementById("hs-mode-ai");
  if (c) c.classList.toggle("active", mode === "classic");
  if (a) a.classList.toggle("active", mode === "ai");
  const input = document.getElementById("ai-home-input");
  if (mode === "ai") {
    if (input)
      input.placeholder =
        "e.g. 3-bed near a good school with a garden under \u00a3400k";
    const lbl = document.getElementById("hs-label");
    if (lbl) lbl.textContent = "Describe your ideal home";
  } else {
    if (input) input.placeholder = "City, postcode or area";
    setHomeTab(homeTab);
  }
}

function homeSearch() {
  const input = document.getElementById("ai-home-input");
  const q = input ? input.value.trim() : "";
  if (homeMode === "ai") {
    if (!q) {
      showToast("Tell us what you\u2019re looking for");
      return;
    }
    showAIModal(q);
    return;
  }
  if (q)
    showToast(
      "Searching " +
        (homeTab === "sold" ? "sold prices" : "properties") +
        " in " +
        q,
    );
  showCatalogue(homeTab);
}



//search functions
function hSearch(value){
  let condition;
  let tabs = document.querySelectorAll('.hs-tab');
  tabs.forEach(tab =>{
    if(tab.classList.contains('active')){
      condition = tab.value;
    }
  });
  alert(`values before redirection = ${condition} and ${location}`);

  window.location.href=`search.html?condition=${condition}&location=${value}`;
}

function initialSearch(el){
  let searchInput = document.getElementById(`${el}`);

  searchValue = searchInput.value;
  searchHome(searchValue);
}

let hInput = document.getElementById('ai-home-input');
let val;

function openSearchModal(){
  document.querySelector('.prop-search-modal-background').classList.remove('hidden');
}

function triggerSearch(){
  if(event.key === 'Enter'){
    //val = hInput.value;
    //hSearch(val);
    openSearchModal();
  }
}
function searchTrigger(){
  //val = hInput.values;
  //hSearch(val);
  openSearchModal();
}

let sBtn = document.querySelector('.search-btn');

sBtn.addEventListener('click', searchTrigger);

hInput.addEventListener('keydown', triggerSearch);



function closeSearchModal(){
  document.querySelector('.prop-search-modal-background').classList.add('hidden');
}

let closeIcon = document.querySelector('.close-icon');
//let bClose = document.querySelector('.prop-search-modal-background');
closeIcon.addEventListener('click', closeSearchModal);
//bClose.addEventListener('click', closeSearchModal);


//===search function===
const form = document.getElementById("search-modal-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //get form data entry
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  let location = document.getElementById('ai-home-input').value;
  data.p_location = location;
  data.condition = homeTab;


  Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
  });

  const queryString = new URLSearchParams(data).toString();

  window.location.href=`listings.html?${queryString}`;
});