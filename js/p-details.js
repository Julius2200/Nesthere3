//details variables initialization
let propPassport;
let propNeighbourhood;
let propImages;
let propName;
let details;




let images = ['../images/black.jpg', '../images/graph.jpg' ,'../images/abstract-colour-splash.jpg', '../images/Bugatti-bolide.jpg'];

function fillPassport(passportDetails){
    let passWrapper = document.querySelector('.passWrapper');
    let sorted = passportDetails.sort((a, b) => {
        a.date - b.date;
    });
    //render passport
    passWrapper.innerHTML = sorted.map((item) =>{
        `<div class="pass-box">
            <p class="pass-date">${new Date(item.date)}</p>
            <p class="pass-entry">${item.entry}</p>
        </div>`
    }).join(' ');
}

function fillNeighbourhood(neighbourhoodDetails){
    let timeWrapper = document.querySelector(".time-wrapper");
    let sorted = neighbourhoodDetails.sort((a, b) => {
        a.date - b.date;
    });
    //render neighbourhood time
    timeWrapper.innerHTML = sorted.map((item) => {
        `<p class="neighbourhood-entry">${item.entry}</p>`
    }).join(' ');
}


//Detail filling function
function fillDetails(data){
    document.querySelector('.address').innerHTML = data.addr;
    document.querySelector('.price').innerHTML = data.price;
    //check for change in price and update
    document.querySelector('.agent-logo').src = data.agent_logo;
    document.querySelector('.bed-count').innerHTML = data.beds;
    document.querySelector('.bath-count').innerHTML = data.baths;
    document.querySelector('.size').innerHTML = data.size;
    document.querySelector('epc-rate').innerHTML = data.epc;
    document.querySelector('.about-text').innerHTML = data.about_prop;
    let featuresWrapper = document.querySelector(".key-features-wrapper");
    let features = data.features;
    let featureContent = features.map((feature) => {
        `<p class="feature">
            <span>&checkmark;</span>
             ${feature}
        </p>`
    }).join(' ');

    featuresWrapper.innerHTML = featureContent;

    //setting property details
    document.querySelector('.prop-type-value').innerHTML = `${data.type}`;
    document.querySelector('.tenure-value').innerHTML = data.tenure;
    document.querySelector('.council-tax-band').innerHTML = data.tax_band;
    document.querySelector('.epc-value').innerHTML = data.epc_rate;
    document.querySelector('.parking-value').innerHTML = data.parking;
    document.querySelector('.garden-value').innerHTML = data.garden;
    document.querySelector('.accessibility-value').innerHTML = data.accessibility;
    document.querySelector('.listing-date').innerHTML = data.listed_on;

    let closeTrains = data.train_stations;
    document.querySelector('.closest-train').innerHTML = closeTrains.map((station) => {
        `${station.name}: ${station.distance}`
    }).join(' ');

    let closeSchools = data.schools;
    document.querySelector('.closest-school').innerHTML = closeSchools.map((school) => {
        `${school.name}: ${school.distance}`
    }).join(' ');

    let closeMalls = data.malls;
    document.querySelector('.closest-mall').innerHTML = closeMalls.map((mall) => {
        `${mall.name}: ${mall.distance}`
    }).join(' ');

    let closeParks = data.parks;
    document.querySelector('.closest-park').innerHTML = closeParks.map((park) =>{
        `${park.name}: ${park.distance}`
    });

    document.querySelector('.virtual-tour-display').src = data.vt_url;

    
}

let proxBtn = document.querySelector("prox-submit-btn");
proxBtn.addEventListener("click", async () => {
    let searchData = document.querySelector('.prox-search-input');
    let apiUrl = ' ';
    let res = await fetch(`${apiUrl}?start=${propName}&end=${searchData}`);
    let data = res.json;
    let distance = data.distance;

    document.querySelector('.prox-result-text').innerHTML = `
        Distance: ${distance}
    `;
});







const gallery = document.querySelector(".gallery");
const thumbnailContainer = document.querySelector(".thumbnail-wrapper");
let slides = [];
let thumbnails = [];
let currentIndex = 0;


function updateSlides(){
    slides.forEach((slide, index)=>{
        slide.style.transform = `translateX(${(index - currentIndex)*100}%)`;
    });
    thumbnails.forEach((thumb, index)=>{
        thumb.classList.toggle(
            "active-thumbnail",
            index === currentIndex
        );
    });
}

function renderImages(images){
    gallery.innerHTML = ' ';
    thumbnailContainer.innerHTML = " ";
    slides = [];
    thumbnails = [];

    images.forEach((src, index)=>{
        //----main slide----
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.style.transform = `translateX(${index*100}%)`;
        const img = document.createElement('img');
        img.src = src;
        slide.appendChild(img);
        gallery.appendChild(slide);
        slides.push(slide);

        //------thumbnail-----
        const thumb = document.createElement("div");
        thumb.className = 'nail';
        const thumbImage = document.createElement("img");
        thumbImage.src = src;
        thumb.appendChild(thumbImage);
        thumb.onclick = () => {
            currentIndex = index;
            updateSlides();
        };
        thumbnailContainer.appendChild(thumb);
        thumbnails.push(thumb);
    });
    updateSlides();
}

renderImages(images);


function nextSlide(){
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    console.log(currentIndex);
    updateSlides();
}
function previousSlide(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    updateSlides();
}
document.querySelector('.next').addEventListener("click", nextSlide);
document.querySelector('.prev').addEventListener("click", previousSlide);

//for keyboard
document.addEventListener('keydown', (e)=>{
   switch(e.key){
    case "ArrowLeft":
        previousSlide();
        break;
    case "ArrowRight":
        nextSlide();
        break;
   } 
});

//for swipes
let startX = 0;
let endX = 0;
gallery.addEventListener('pointerdown', (e)=>{
    startX = e.clientX;
});
gallery.addEventListener("pointerup", (e)=>{
    endX = e.clientX;
    const distance = endX - startX;
    if (Math.abs(distance) < 50){
        return;
    }
    if (distance < 0){
        nextSlide();
    } else {
        previousSlide();
    }
});


//detail fetch function
async function fetchDetails(id){
    let url = `/api/details?id=${id}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            console.log("error fetching");
            throw new Error("Error fetching data from server");
        }
        let data = response.json();
        return data;
    } catch (error) {
        console.error("Server returned an error: ", error);
    }
}

//property view function
function viewProperty(id){
    //fetch property details
    const propDetails = fetchDetails(id);
    propPassport = propDetails.passport;
    propImages = propDetails.images;
    propNeighbourhood = propDetails.neighbourhood;
    details = propDetails.details;
    //render images
    renderImages(propImages);
    propName = propDetails.name;
    fillDetails(details);
}


/*window.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search;
  //parse the parameters
  const urlParams = new URLSearchParams(queryString);

  //extract the property id
  const propId = urlParams.get('id');

  if(propId){
    viewProperty(propId);
  }else{
    console.error('No property id found in the url');
  }
});*/
