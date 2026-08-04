// details variables initialization
let propPassport;
let propNeighbourhood;
let propImages;
let propName;
let details;

// sample fallback images
let images = ['../images/black.jpg', '../images/graph.jpg' ,'../images/abstract-colour-splash.jpg', '../images/Bugatti-bolide.jpg'];

/*
 Improved gallery and controls
 - Single renderImages/updateSlides implementation (removed duplicates)
 - Thumbnails keep an active state and are keyboard accessible
 - Buttons and keyboard navigation are guarded (ignore when an input/textarea has focus)
 - Pointer swipe supports dragging with real-time slide movement and threshold to change slide
 - Graceful handling when there are no images
*/

const gallery = document.querySelector(".gallery");
const thumbnailContainer = document.querySelector(".thumbnail-wrapper");
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slides = [];
let thumbnails = [];
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let dragDelta = 0;

function clampIndex(i) {
    if (!slides.length) return 0;
    return ((i % slides.length) + slides.length) % slides.length; // positive mod
}

function updateSlides() {
    if (!slides || !slides.length) return;

    slides.forEach((slide, index) => {
        const offset = (index - currentIndex) * 100 + (dragDelta / (gallery.offsetWidth || 1)) * 100;
        slide.style.transform = `translateX(${offset}%)`;
    });

    thumbnails.forEach((thumb, index) => {
        const isActive = index === currentIndex;
        thumb.classList.toggle('active-thumbnail', isActive);
        thumb.setAttribute('aria-current', isActive ? 'true' : 'false');
        thumb.tabIndex = 0; // make thumbnails keyboard focusable
    });

    // enable/disable buttons if only one slide (still allow wrap-around if desired)
    if (prevBtn) prevBtn.disabled = slides.length <= 1;
    if (nextBtn) nextBtn.disabled = slides.length <= 1;
}

function goToSlide(index) {
    if (!slides.length) return;
    currentIndex = clampIndex(index);
    dragDelta = 0;
    updateSlides();
}

function nextSlide() {
    if (!slides.length) return;
    goToSlide(currentIndex + 1);
}

function previousSlide() {
    if (!slides.length) return;
    goToSlide(currentIndex - 1);
}

function createImageElement(src, alt = '') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    // basic lazy preload: start loading immediately but keep it simple
    img.loading = 'lazy';
    return img;
}

function renderImages(imageSources = []) {
    if (!gallery || !thumbnailContainer) return;

    // clear existing
    gallery.innerHTML = '';
    thumbnailContainer.innerHTML = '';
    slides = [];
    thumbnails = [];
    currentIndex = 0;
    dragDelta = 0;

    if (!Array.isArray(imageSources) || imageSources.length === 0) {
        // render a placeholder slide
        const placeholder = document.createElement('div');
        placeholder.className = 'slide';
        const img = createImageElement('../images/placeholder.jpg', 'No image available');
        placeholder.appendChild(img);
        gallery.appendChild(placeholder);
        slides.push(placeholder);
        updateSlides();
        return;
    }

    imageSources.forEach((src, index) => {
        // main slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.transform = `translateX(${index * 100}%)`;
        slide.dataset.index = index;

        const img = createImageElement(src, `Image ${index + 1}`);
        slide.appendChild(img);
        gallery.appendChild(slide);
        slides.push(slide);

        // thumbnail
        const thumb = document.createElement('button'); // use button for accessibility
        thumb.className = 'nail';
        thumb.type = 'button';
        thumb.dataset.index = index;
        thumb.setAttribute('aria-label', `Go to image ${index + 1}`);

        const thumbImage = createImageElement(src, `Thumbnail ${index + 1}`);
        thumbImage.className = 'thumb-image';
        thumb.appendChild(thumbImage);

        // click and keyboard handling
        thumb.addEventListener('click', () => {
            goToSlide(index);
            // move focus back to gallery for keyboard navigation
            if (gallery) gallery.focus();
        });
        thumb.addEventListener('keydown', (e) => {
            // allow Enter/Space to activate a thumbnail
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToSlide(index);
            }
        });

        thumbnailContainer.appendChild(thumb);
        thumbnails.push(thumb);
    });

    // set up pointer events for swipe/drag on the gallery
    setupPointerHandlers();

    updateSlides();
}

function setupPointerHandlers() {
    if (!gallery) return;

    // avoid multiple bindings
    gallery.onpointerdown = null;
    gallery.onpointermove = null;
    gallery.onpointerup = null;
    gallery.onpointercancel = null;

    gallery.style.touchAction = 'pan-y'; // allow vertical scroll but we'll handle horizontal

    gallery.addEventListener('pointerdown', (e) => {
        // only primary button / finger
        if (e.isPrimary === false) return;
        isDragging = true;
        startX = e.clientX;
        dragDelta = 0;
        gallery.setPointerCapture(e.pointerId);
        gallery.classList.add('dragging');
    });

    gallery.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        dragDelta = e.clientX - startX;
        // update visuals live
        updateSlides();
    });

    function finishDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        gallery.classList.remove('dragging');
        try { gallery.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }

        const threshold = Math.max(50, gallery.offsetWidth * 0.12); // 50px or 12% of width
        if (dragDelta <= -threshold) {
            nextSlide();
        } else if (dragDelta >= threshold) {
            previousSlide();
        } else {
            // snap back
            dragDelta = 0;
            updateSlides();
        }
    }

    gallery.addEventListener('pointerup', finishDrag);
    gallery.addEventListener('pointercancel', finishDrag);
}

// Button handlers (guard nulls)
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', previousSlide);

// Keyboard navigation: ignore when typing in inputs or textareas
document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const inactiveTags = ['INPUT', 'TEXTAREA', 'SELECT'];
    if (inactiveTags.includes(active && active.tagName)) return; // don't navigate while typing

    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
    }
});

// expose renderImages so other code can call it
// initial render with fallback images
if (gallery && thumbnailContainer) renderImages(images);

// ---- The rest of the file (details, passport, proximity) remains unchanged for now ----

// passport and neighbourhood fillers fixed to return strings and correct sort comparator
function fillPassport(passportDetails){
    const passWrapper = document.querySelector('.passWrapper');
    if (!Array.isArray(passportDetails) || !passWrapper) return;
    const sorted = passportDetails.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    passWrapper.innerHTML = sorted.map((item) => (
        `<div class="pass-box">
            <p class="pass-date">${new Date(item.date).toLocaleDateString()}</p>
            <p class="pass-entry">${item.entry}</p>
        </div>`
    )).join('');
}

function fillNeighbourhood(neighbourhoodDetails){
    const timeWrapper = document.querySelector(".time-wrapper");
    if (!Array.isArray(neighbourhoodDetails) || !timeWrapper) return;
    const sorted = neighbourhoodDetails.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    timeWrapper.innerHTML = sorted.map((item) => (
        `<p class="neighbourhood-entry">${item.entry}</p>`
    )).join('');
}

// fetch helpers used elsewhere - fix .json() awaits
async function fetchDetails(id){
    const url = `/api/details?id=${encodeURIComponent(id)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error fetching details: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Server returned an error: ', error);
        return null;
    }
}

// property view function (await fetch)
async function viewProperty(id){
    const propDetails = await fetchDetails(id);
    if (!propDetails) return;

    propPassport = propDetails.passport;
    propImages = propDetails.images || [];
    propNeighbourhood = propDetails.neighbourhood;
    details = propDetails.details;

    renderImages(propImages.length ? propImages : images);
    propName = propDetails.name;
    if (details) fillDetails(details);
}

// minimal, safe fillDetails to avoid duplicate definitions
function fillDetails(data){
    if (!data) return;
    const el = (sel) => document.querySelector(sel);
    if (el('.address')) el('.address').innerHTML = data.addr || '';
    if (el('.price')) el('.price').innerHTML = data.price || '';
    if (el('.agent-logo')) el('.agent-logo').src = data.agent_logo || '';
    if (el('.bed-count')) el('.bed-count').innerHTML = data.beds || '';
    if (el('.bath-count')) el('.bath-count').innerHTML = data.baths || '';
    if (el('.size')) el('.size').innerHTML = data.size || '';
    if (el('.epc-rate')) el('.epc-rate').innerHTML = data.epc || '';
    if (el('.about-text')) el('.about-text').innerHTML = data.about_prop || '';

    const featuresWrapper = el('.key-features-wrapper');
    if (featuresWrapper && Array.isArray(data.features)){
        featuresWrapper.innerHTML = data.features.map(f => `<p class="feature"> <span>&checkmark;</span> ${f}</p>`).join('');
    }

    // property details
    if (el('.prop-type-value')) el('.prop-type-value').innerHTML = data.type || '';
    if (el('.tenure-value')) el('.tenure-value').innerHTML = data.tenure || '';
    if (el('.council-tax-band')) el('.council-tax-band').innerHTML = data.tax_band || '';
    if (el('.epc-value')) el('.epc-value').innerHTML = data.epc_rate || '';
    if (el('.parking-value')) el('.parking-value').innerHTML = data.parking || '';
    if (el('.garden-value')) el('.garden-value').innerHTML = data.garden || '';
    if (el('.accessibility-value')) el('.accessibility-value').innerHTML = data.accessibility || '';
    if (el('.listing-date')) el('.listing-date').innerHTML = data.listed_on || '';

    if (Array.isArray(data.train_stations) && el('.closest-train')){
        el('.closest-train').innerHTML = data.train_stations.map(s => `${s.name}: ${s.distance}`).join('<br>');
    }
    if (Array.isArray(data.schools) && el('.closest-school')){
        el('.closest-school').innerHTML = data.schools.map(s => `${s.name}: ${s.distance}`).join('<br>');
    }
    if (Array.isArray(data.malls) && el('.closest-mall')){
        el('.closest-mall').innerHTML = data.malls.map(s => `${s.name}: ${s.distance}`).join('<br>');
    }
    if (Array.isArray(data.parks) && el('.closest-park')){
        el('.closest-park').innerHTML = data.parks.map(s => `${s.name}: ${s.distance}`).join('<br>');
    }
    if (el('.virtual-tour-display')) el('.virtual-tour-display').src = data.vt_url || '';
}

// proximity search button fix (selectors and .json())
const proxBtn = document.querySelector('.prox-submit-btn');
if (proxBtn) {
    proxBtn.addEventListener('click', async () => {
        const searchInput = document.querySelector('.prox-search-input');
        if (!searchInput) return;
        const searchData = searchInput.value.trim();
        const apiUrl = ''; // set your proximity API url here
        if (!apiUrl) return console.warn('Proximity API URL not set');

        try {
            const res = await fetch(`${apiUrl}?start=${encodeURIComponent(propName || '')}&end=${encodeURIComponent(searchData)}`);
            if (!res.ok) throw new Error('Error fetching proximity');
            const data = await res.json();
            const distance = data && data.distance ? data.distance : 'N/A';
            const out = document.querySelector('.prox-result-text');
            if (out) out.innerHTML = `Distance: ${distance}`;
        } catch (err) {
            console.error(err);
        }
    });
}
