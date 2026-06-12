//render properties
//filter properties

function filterProperties(props, order){
    switch (order){
        case 'lowest-first':
            filtered = props.filter(props.priceN);
            return filtered;
        case 'highest-first':
            filtered = props.filter(props.priceN);
            return filtered;

        case 'newest-first':
            filtered = props.filter(props.published);
            return filtered;

        case 'oldest-first':
            filtered = props.filter(props.published);
            return filtered;
        
        default:
            return properties;
    }    
}

//process fetched properties
function processFetchedProperties(properties){
    //get active filters
    let order = document.getElementById('prop-filter').value;

    processedProps = filterProperties(properties, order);
}

//render details
function renderDetails(index){
    propData = getPropData(index);
    images = propData.images;
    badges = propData.propState;

    //display the image carousel
    imageContainer = document.getElementsByClassName('prop-detail-images');
    imageContainer.innerHTML = ' ';
    for (let i = 0; i < images.length(); i++){
        let box = document.createElement('div');
        box.innerHTML = `
            <img src="${images[i]}" alt="House Image" class="detail-images" />
        `;
        imageContainer.appendChild(box);
    }

    //display the price and other badges
    badgeWrapper = document.getElementById('detail-badge-wrapper');
    badgeWrapper.innerHTML = ' ';
    for(let i = 0; i < 3; i++){
        if(i == 0){
            cls = 'prop-type';
        }else if(i == 1){
            cls = 'prop-age';
        }else if(i == 2){
            cls = 'favourite';
        }

        let box1 = document.createElement('div');
        box1.classList.add('detail-badge');
        box1.innerHTML = `
            <div class="${cls}">
                <p>${badges[i]}</p>
            </div>
        `;
        badgeWrapper.appendChild(box1);
    }

    //display the description
    descBox = document.getElementById('description-wrapper').innerHtml = `
        <p class="prop-desc">${propData.desc}</p>
    `;
}


function changeDetailsPage(value, tabValue){
    let detailPages = document.querySelectorAll('.detail-page');
    detailPages.forEach(page =>{
        page.classList.remove("activated");
        page.classList.add("deactivated");
    });

    let newPage = document.querySelector(`.${value}-section`);
    newPage.classList.remove("deactivated");
    newPage.classList.add("activated");

    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active-tab");
        tab.classList.add("inactive-tab");
    });
    let newTab = document.querySelector(`.${tabValue}`);
    newTab.classList.remove("inactive-tab");
    newTab.classList.add("active-tab");
}

let neigh = document.querySelector('.neighbourhood-trigger-wrapper');
let passp = document.querySelector('.prop-passport-trigger-wrapper');

neigh.addEventListener('click', ()=>{
    neigh.classList.toggle('active-extra');
});

passp.addEventListener('click', ()=>{
    passp.classList.toggle('active-extra');
});