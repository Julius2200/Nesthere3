const LIMIT = 12;//properties fetched each time
let currentOffset = 0;
let totalPropertiesCount = 0;

//DOM element references
const propertyGrid = document.querySelector(".prop-grid");
const loadMoreBtn = document.querySelector(".load-more-btn");
const counterLabel = document.querySelector(".counter-label");
//redirect to details page
function redirectToDetails(pId){

    window.location.href = `details.html?id=pId`;
}

window.addEventListener("beforeunload", ()=>{
    const pageState = {
        htmlContent: propertyGrid.innerHTML,
        currentOffset: currentOffset,
        totalCount: totalPropertiesCount,
        scrollPosition: window.scrollY
    };
    sessionStorage.setItem('properties_page_cache', JSON.stringify(pageState));
});

//redirect to details page
function showDetails(id){
    window.location.href = `details.html?id=${id}`;
}

//prop-card rendering functions

function createCard(item){
    return`
        <div class="property-card" onclick="viewDetail(${item.id})">
            <div class="prop-image-wrapper" style="background: url('${item.img}') no-repeat cover; height: 100%">
                <img src="${item.img}" alt="thumbnail" class="prop-img" loading="lazy" />
                <div class="badge-wrapper">
                    <div class="condition-badge">${item.badge}</div>

                    <div class="favourite-badge">♡</div>
                </div>
            </div>

            <div class="more-details-wrapper">
                <h3 class="price-text">${item.price}</h3>

                <div class="prop-stats-wrapper">
                    <div class="bedrm-stat">
                        <div class="bed-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>

                        <h3 class="bedrm-count">${item.beds} Bedrooms</h3>
                    </div>

                    <div class="bathrm-stat">
                        <div class="bath-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </div>

                        <h3 class="bathrm-count">${item.baths} Bathrooms</h3>
                    </div>

                    <div class="area-stat">
                        <div class="area-icon">
                            📐
                        </div>

                        <h3 class="area-count">${item.sqft} SQFT</h3>
                    </div>
                </div>

                <h3 class="prop-name">${item.type}</h3>

                <h3 class="prop-address">📍 ${item.addr}</h3>
            </div>

            <div class="prop-action-wrapper">
                <button class="learn-more-btn" value="${item.id}" onclick="showDetails(this.value)">Learn More</button>
            </div>
        </div>
    `;
}

function renderProperties(properties){
    if(properties.length === 0 && currentOffset === 0) {
        propertyGrid.innerHTML = '<p class="no-results">No properties match your filter criteria.</p>';
        return;
    }

    //filter the properties
    let filteredProp;
    //let filterOrder = document.querySelector('p-order-input').value;

    let filterOrder = 'desc-cost';
    if (filterOrder == "popularity"){
        filteredProp = properties.sort((a, b) => b.rating - a.rating);
    }else if (filterOrder === 'asc-cost'){
        filteredProp = properties.sort((a, b) => a.priceN - b.priceN);
    }else if (filterOrder === 'desc-cost'){
        filteredProp = properties.sort((a, b) => b.priceN - a.priceN);
    }

    filteredProp.forEach(item => {
        let wrapper = document.createElement("div");
        wrapper.innerHTML = createCard(item);
        propertyGrid.appendChild(wrapper);
    });
    /*let wrapper = document.createElement("div");
    wrapper = properties.map((p) => createCard(p)).join(' ');
    propertyGrid.innerHTML = wrapper;*/
}

//renderProperties(properties);

//update ui controls
function updateUIControls() {
    counterLabel.textContent = `Showing ${Math.min(currentOffset, totalPropertiesCount)} of ${totalPropertiesCount} properties`;

    //button is hidden if the end is reached
    if (currentOffset >= totalPropertiesCount || totalPropertiesCount === 0) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = "flex";
    }
}

//fetch properties

async function fetchProperties(isInitialLoad = false){
    if (isInitialLoad){
        currentOffset = 0;
        propertyGrid.innerHTML = ' ';
        alert('loading page');
    }

    const urlParams = new URLSearchParams(window.location.search);
    //append the current pagination controls to the request
    urlParams.set("limit", LIMIT);
    urlParams.set("offset", currentOffset);

    try {
        const response = await fetch(`/api/properties?${urlParams.toString()}`);
        if (!response.ok) {
            alert('error fetching data');
            throw new Error('API server returned an error');
        }
        //Expected format: {total: 148, data: [....]}
        const result = await response.json();
        totalPropertiesCount = result.total;

        renderProperties(result.data);
        //update offset
        currentOffset += result.data.length;

        //refresh controls visibility and text labels
        updateUIControls();
    } catch (error) {
        console.error('Failed to load items: ', error);
    }
}

//setup filters 
function repopulateFormFields() {
    const urlParams = new URLSearchParams(window.location.search);
    let conditionBoxes = document.querySelectorAll('.condition-box').forEach(box => {
        box.classList.remove('active-condition');
    });
    if (urlParams.get('condition') === 'buy'){
        document.querySelector('.buy-box').classList.add('active-condition');
    } else if (urlParams.get('condition') === 'rent') {
        document.querySelector('.rent-box').classList.add('active-condition');
    } else {
        document.querySelector('.sold-box').classList.add('active-condition');
    }

    document.querySelector('.p-location-input').value = urlParams.get('p_location');
    document.getElementById('rm-count').value = urlParams.get('rooms');
    document.getElementById('minP').value = urlParams.get('minP');
    document.getElementById('maxP').value = urlParams.get('maxP');
    document.querySelector('.p-category').value = urlParams.get('category');
}


//receiving url query from homepage
document.addEventListener('DOMContentLoaded', async ()=>{
    const cachedData = sessionStorage.getItem('properties_page_cache');
    alert(`cached data: ${cachedData}`);

    repopulateFormFields();
    if (cachedData.htmlContent == ''){
        alert('cached data exists');
        const state = JSON.parse(cachedData);
        //restore the exact HTML layout
        propertyGrid.inner = state.htmlContent;
        currentOffset = state.currentOffset;
        totalPropertiesCount = state.totalCount;
        updateUIControls();

        //scroll back to initial position
        window.scrollTo(0, state.scrollPosition);
        
        //clear the cache
        sessionStorage.removeItem('properties_page_cache');
    } else {
        alert('fetching properties');
        //trigger initial fetch on page load
        fetchProperties(true);

    }
    
    loadMoreBtn.addEventListener('click', ()=>{
        fetchProperties(false);
    });
});

//search autocomplete
const searchInput = document.querySelector('.p-location-input');
const dropdown = document.querySelector("autocomplete-results");
let debounceTimer;

function renderSuggestions(list){
    if (list.length === 0) {
        dropdown.style.display = "none";
        return;
    }
    dropdown.innerHTML = " ";
    list.forEach(item => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = `${item.label} (${item.type})`;

        div.addEventListener('click', ()=>{
            searchInput.value = item.label;
            dropdown.style.display = 'none';
        });
        dropdown.appendChild(div);
    });
    dropdown.style.display = 'block';
}

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const text = searchInput.value.trim();

    if (text.length < 3) {
        dropdown.style.display = "none";
        return;
    }

    debounceTimer = setTimeout(async ()=>{
        try {
            const response = await fetch(`/api/location_suggestions?q=${encodeURIComponent(text)}`);
            const suggestions = await response.json();
            renderSuggestions(suggestions);
        } catch (e) {
            console.error('Error fetching suggestions ', e);
        }
    }, 300);
});