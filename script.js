const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function forceReflow(element) {
        void element.offsetWidth;
    }
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            link.classList.remove('fade-in'); 
            forceReflow(link); 
            link.style.setProperty('--index', index);
            link.classList.add('fade-in'); 
        });
        
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            link.classList.remove('fade-in'); 
        });
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

/* Carousel */
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const timeOut = setTimeout('autoSlide', 1000)
console.log(slides);



function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
 function autoSlide(){
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
  setTimeout(autoSlide, 5000);
 }
 
// function moveToNextSlide() {
//     hideAllSlides()
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }
//   slides[slidePosition].classList.add('carousel-item-visible');
// }
// function moveToPrevSlide() {
//     hideAllSlides()
//     if (slidePosition === 0) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition--;
//     }
//   slides[slidePosition].classList.add('carousel-item-visible');
// }
window.onload=autoSlide()