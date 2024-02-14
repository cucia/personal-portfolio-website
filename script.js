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



