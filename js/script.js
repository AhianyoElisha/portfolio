window.addEventListener('load', () => {
    document.querySelector('.main').classList.remove('hidden')
    document.querySelector('.home-section').classList.add('active')
    /*-----------------Page Loader-------------------*/
    document.querySelector('.page-loader').classList.add('fade-out') 
    setTimeout(() => {
        document.querySelector('.page-loader').style.display = 'none';
    }, 600);
})


/*------------------Toggle Navbar--------------------*/
const toggler = document.querySelector(".nav-toggler");
toggler.addEventListener("click", (e) => {
    hideSection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling")
})

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out")
}

function toggleNavBar() {
    document.querySelector(".header").classList.toggle("active");
}




/*------------------------Active Section---------------------*/
 window.addEventListener('click', (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash != "") {
        // console.log(window.location.hash)
        toggler.classList.add('hide')
        document.querySelector('.overlay').classList.add('active')
        const hash = e.target.hash;
        if (e.target.classList.contains('nav-item')) {
            toggleNavBar();
        }
        // else {
        //     hideSection();
        //     document.body.classList.remove('hide-scrolling')
        // }
        setTimeout(() => {
            document.querySelector('section.active')
            .classList.remove('active','fade-out');
            document.querySelector(e.target.hash).classList.add('active');
            window.scroll(0,0);
            document.querySelector('.overlay').classList.remove('active')
            toggler.classList.remove('hide')
            document.body.classList.remove('hide-scrolling');
        }, 500)
    }
 })

 window.addEventListener('popstate', (e) => {
    toggler.classList.add('hide')
    document.querySelector('.overlay').classList.add('active')
    var hash = document.location.hash;
    if (hash == "") hash = '#home'
    if (document.querySelector('.header').classList.contains('active')) {
        document.querySelector('.header').classList.remove('active')
    }
    console.log(hash);
    setTimeout(() => {
        document.querySelector('section.active')
        .classList.remove('active','fade-out');
        document.querySelector(hash).classList.add('active');
        window.scroll(0,0);
        document.querySelector('.overlay').classList.remove('active')
        toggler.classList.remove('hide')
        document.body.classList.remove('hide-scrolling');
    }, 500)

 })



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


 