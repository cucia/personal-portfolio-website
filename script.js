// navigation 
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide-scrolling')
})    
function hideSection() {
    document.querySelector('section.active').classList.toggle('fade-out')
}
function toggleNavbar() {
    document.querySelector('.header').classList.toggle('active')
}
// connection link 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('link-item') && e.target.hash !== '') {
        navToggler.classList.add('hide');
        if (e.target.classList.contains("nav-item")){
            toggleNavbar();
        }else{ 
            console.log('false')
        }
        setTimeout(()=>{
            document.querySelector('section.active').classList.remove('active','fade-out');
            document.querySelector(e.target.hash).classList.add('active');
            window.scrollTo(0,0);
            document.body.classList.remove('hide-scrolling');
            navToggler.classList.remove('hide')
        }, 500)
 }
})
const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');
tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');
    }
});

// portifolio section 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-item-thumbnail')) {
        togglePortfolioPopup();
        portfolioItemDetail(e.target.parentElement)
    }
})
const togglePortfolioPopup = () => {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}
document.querySelector('.popup-close').addEventListener('click', togglePortfolioPopup);

const portfolioItemDetail=(portfolioItem)=>{
    document.querySelector('.popup-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.popup-header h3').innerHTML = portfolioItem.querySelector('.portfolio-item-title').innerHTML;
    document.querySelector('.popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-detail').innerHTML
}
