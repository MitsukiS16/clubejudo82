createCustomSelect('select.custom-select')
const contactSlider=new Swiper('.contact__reviews-slider',{direction:'horizontal',slidesPerView:'auto',loop:true,spaceBetween:30,speed:1500,autoplay:{delay:3000}})
document.querySelector('.popup-open[href="#popup-contact"]').addEventListener('click',()=>{setTimeout(function(){contactSlider.autoplay.start()},400)})