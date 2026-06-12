let sideMenuBtn = document.querySelector('.menu-icon');
let sideNav = document.querySelector(".side-nav-wrapper");

const routes = ['dashboard-page', 'favourites-page', 'enquiries-page', 'profile-page'];
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