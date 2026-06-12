let sideMenuBtn = document.querySelector('.menu-icon');
let sideNav = document.querySelector(".side-nav-wrapper");

const routes = ['dashboard-page', 'listings-page', 'messages-page', 'profile-page'];
const defaultRoute = 'dashboard';
const LIMIT = 20;
const offset = 0;

function handleRouting(){
    //Get current routing form the URL hashing
    let currentRoute = window.location.hash.replace('#', '');

    //fallback to default route if hash is empty or invalid
    if (!routes.includes(currentRoute)) {
        currentRoute = defaultRoute;
        window.location.hash = `#${defaultRoute}`;
        return;//hash change triggers this function again
    }

    //update visibility of the page
    routes.forEach(route => {
        const page = document.querySelector(`.${route}`);
        if (page) {
            if (route === currentRoute) {
                page.classList.add('active');
            } else {
                page.classList.remove("active");
            }
        }
    });

    //update the highlighted sidebar icon
    document.querySelectorAll('.side-nav-wrapper a').forEach(icon => {
        let svgIcon = icon.querySelector("svg");
        if (icon.getAttribute('href') === `#${currentRoute}`) {
            svgIcon.classList.add('active-page');
        } else {
            svgIcon.classList.remove('active-page');
        }
    });
}


//listen for hash changes
window.addEventListener("hashchange", handleRouting);

//run the routing on initial load
window.addEventListener("DOMContentLoaded", handleRouting);

sideMenuBtn.addEventListener("click", () => {
    sideNav.classList.toggle('hidden');
});

//dashboard code
function fillDashboard(userDetails){
    let listingCount = document.querySelector('.total-listings-value').innerHTML = `${userDetails.total_listings}`;
    let activeListings = document.querySelector(".active-listings-value").innerHTML = `${userDetails.active_listings}`;
    let pending = document.querySelector('.pending-value').innerHTML = `${userDetails.pending}`;
    let sold = document.querySelector(".sold-prop-value").innerHTML = `${userDetails.sold_prop}`;
    let rented = document.querySelector(".rented-prop-value").innerHTML = `${userDetails.rented_prop}`;
    let views = document.querySelector(".prop-view-value").innerHTML = `${userDetails.total_views}`;
}

//listing cards
function createListingCard(properties){
    let listingGrid = document.querySelector(".listing-grid");
    if (properties.length < 1) {
        listingGrid.innerHTML = `<p class="no-listing-text">No Properties, Add more properties to see</p>`;
    } else {
        listingGrid.innerHTML = properties.map((prop) => {
            `
                <div class="listing">
                    <img src="${prop.images[0]}" alt="property image" />
                    <div class="status-wrapper">
                        <h4 class="title">${prop.title}</h4>
                        <div class="status-box">
                            <h4 class="price">${prop.price}</h4>
                            <h4 class="view-count">${prop.views}</h4>
                            <h4 class="status">${prop.status}</h4>
                            <h4 class="date-listed">${prop.listed_on}</h4>
                        </div>
                    </div>
                    <div class="action-btn-wrapper">
                        <button class="edit-btn action-btn" onclick="editProperty(${prop.id})">Edit</button>
                        
                        <button class="delete-btn action-btn" onclick="deleteProperty(${prop.id})">Delete</button>

                        <button class="mark-btn action-btn" onclick="markProperty(${prop.id})"
                    </div>
                </div>
            `
        }).join(' ');
    }
}

//messages code


//profile code
function renderProfile(userDetails){
    let profilePic = document.querySelector(".profile-image-wrapper img");
    profilePic.setAttribute('src', userDetails.profile_pic);

    document.querySelector(".name").innerHTML = `${userDetails.name}`;
    document.querySelector('.email-text').innerHTML = `${userDetails.mail}`;
    document.querySelector('.agent-phone').innerHTML = `${userDetails.phone}`;
    document.querySelector('.agency-name').innerHTML = `${userDetails.agency_name}`;
    document.querySelector('.agent-name').innerHTML = `${userDetails.name}`;
    document.querySelector('.user-role').innerHTML = `${userDetails.role}`;
}