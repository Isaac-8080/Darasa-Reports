// Targeting the menu toggler icon
const togglerMenu = document.querySelector('#toggleIcon'); 

// Targeting the menu (small screens)
const smNavbar = document.querySelector('#smScreenNav');

// Targeting empty space (small screens)
const smNavbarExit = document.querySelector('#smScreenNavExit');

// Toggle nav menu on click (small screens)
togglerMenu.addEventListener('click', () => {
    if (smNavbar.style.display === 'block') {
        smNavbar.style.display = 'none';        
    } else {
        smNavbar.style.display = 'block'
    }
});

// Hide nav menu on empty space click (small screens)
smNavbarExit.addEventListener('click', () => {
    smNavbar.style.display = 'none';
});


// function that holds the brand name
function brandName(brand_name) {
    
    // variable targeting the brand containers in html
    const targetBrandName = document.getElementsByClassName('brand-name');

    for (let i = 0; i < targetBrandName.length; i++) {
        // prints the brand name into the brand containers in html
        targetBrandName[i].innerHTML = brand_name;
    }
    
}

brandName('Darasa Reports');


// hero show slides images
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 8000); // Change image every 5 seconds
}


document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordionToggle');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const text = this.nextElementSibling.querySelector('.accordionText');
            const icon = this.querySelector('.material-symbols-rounded');

            if (text.classList.contains('hidden')) {
                text.classList.remove('hidden');
                icon.textContent = 'keyboard_arrow_up';
            } else {
                text.classList.add('hidden');
                icon.textContent = 'keyboard_arrow_down';
            }
        });
    });
});

