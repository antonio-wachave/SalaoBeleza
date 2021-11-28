// ABRE E FECHA O MENU BARRAS E X
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

//FOR
for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// QUANDO CLICAR EM QUALQUER ITEM DO MENU FECHAR
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

// MUDAR DE HEADER DA PAGINA QUANDO DER SCROLL
 const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    //scroll de maior altura
    header.classList.add('scroll');
  } else {
    //scroll de menor altura
    header.classList.remove('scroll');
  }
}

// SWIPER PLUGIN funcionamento 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  }, 
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    }
  }
 });

 //mostrar quando faz scroll na pagina.
 const scrollReveal = ScrollReveal({
  origin: 'top', 
  distance: '30px',
  duration: 700,
  reset: true, 
 });

 scrollReveal.reveal(
   `#home .image, 
    #home .text, 
    #about .image, 
    #about .text, 
    #services header,
    #services .card, 
    #testimonials header, 
    #testimonials .testimonials, 
    #contact .text, #contact .links,
    footer .brand, footer .social`, 
    {interval: 100});

/*menu ativo conforme a secao visivel na pagina */
const sections = document.querySelectAll('main section[id]');
function activateMenuAtCurrentSection(){

  const checkpoint = (window.pageYOffset + (window.innerHeight/8) * 4);

  for(const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop; 
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
    }else {
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active');
    }
  }
}

  
/* botao voltar para cima */

const backToTopButton =  document.querySelector(".back-to-up");

function backToUp() {  
  window.addEventListener('scroll', function() {
  if(window.scrollY >=560){
  backToTopButton.classList.add('show');
} else {
  backToTopButton.classList.remove('show');
}
});

}
//quando usarmos a scroll;
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToUp();
  activateMenuAtCurrentSection();  
});


