// ---------------------------------------Burger menu
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show'); 

  
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
}

// ----------------------------------КАРУСЕЛЬ
let currentIndex = 0; 
const slides = document.querySelectorAll('.carousel img'); 
const indicatorsContainer = document.querySelector('.carousel-indicators');


function updateIndicators() {
    indicatorsContainer.innerHTML = ''; 
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => {
            currentIndex = index; 
            updateCarousel(); 
        });
        if (index === currentIndex) {
            indicator.classList.add('active'); 
        }
        indicatorsContainer.appendChild(indicator); 
    });
}


function updateCarousel() {
    const totalSlides = slides.length; 
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`; 

  
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateCarousel(); 
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateCarousel(); 
}


setInterval(() => {
    nextSlide(); 
}, 3000); 


updateIndicators(); 
updateCarousel(); 
