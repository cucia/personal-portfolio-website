// Navigation toggler functionality
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide-scrolling');
});

function hideSection() {
    document.querySelector('section.active').classList.toggle('fade-out');
}

function toggleNavbar() {
    document.querySelector('.header').classList.toggle('active');
}

// Navigation links functionality
document.addEventListener('click', (e) => {
    // Check if a navigation link is clicked and it has a valid hash
    if (e.target.classList.contains('link-item') && e.target.hash !== '') {
        navToggler.classList.add('hide');
        // Close the navbar if a nav-item is clicked
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }
        // Get the target section ID from the href attribute of the clicked link
        const targetSectionId = e.target.hash;
        setTimeout(() => {
            // Remove active and fade-out classes from the current active section
            document.querySelector("section.active").classList.remove("active", "fade-out");
            // Add active class to the target section
            document.querySelector(targetSectionId).classList.add("active");
            // Scroll to the top of the page
            window.scrollTo(0, 0);
            // Remove hide-scrolling class to allow scrolling
            document.body.classList.remove("hide-scrolling");
            // Show the navigation toggler again
            navToggler.classList.remove("hide");
        }, 500);
    }
});

// Tabs functionality
const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
        // Remove 'active' class from previously active tab
        tabsContainer.querySelector('.active').classList.remove('active');
        // Add 'active' class to the clicked tab
        e.target.classList.add('active');

        // Get the target content to be displayed
        const target = e.target.getAttribute('data-target');

        // Remove 'active' class from previously active tab content
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        // Add 'active' class to the target tab content
        aboutSection.querySelector(target).classList.add('active');
    }
});

// Portfolio popup functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        // Find the closest ancestor element with the class 'portfolio-item'
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            portfolioItemDetails(portfolioItem);
        }
    }
});

const togglePortfolioPopup = () => {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
};

document.querySelector('.popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.popup-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.popup-header h3').innerHTML = portfolioItem.querySelector('.portfolio-item-title').innerHTML;
    document.querySelector('.popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-detail').innerHTML;
}

