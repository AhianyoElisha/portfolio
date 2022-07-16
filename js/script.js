// Toggling the about tabs
const tabsContainer = document.querySelector(".about-tabs");
const aboutText  = document.querySelector(".about-text")

tabsContainer.addEventListener("click", (e)=> {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains('active')) {
        tabsContainer.querySelector('.active').classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target")
        aboutText.querySelector(".tab-content.active").classList.remove("active");
        aboutText.querySelector(target).classList.add("active");
    }
})

// Portfolio Item Popup
document.addEventListener('click', (e)=> {
    if (e.target.classList.contains("view-project-btn")) {
        portFolioItemToggle();
        portFolioItemDetails(e.target.parentElement);
    }
})

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        portFolioItemToggle();
    };
})

// Show portfolio popup
function portFolioItemToggle() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.querySelector(".portfolio-popup").scrollTo(0, 0)
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

// Fetch data from portfolio item
function portFolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML

}

document.querySelector(".pp-close").addEventListener('click', portFolioItemToggle)


/*------------------Toggle Navbar--------------------*/
 