let nav=false;

const handleClick=()=>{
    const menuLinks=document.querySelector(".menu-links");
    const line1=document.querySelector("#line1");
    const line2=document.querySelector("#line2");
    const background=document.querySelector(".background");
    const home= document.querySelector("#home");

    if(nav){
        menuLinks.style.cssText="left: 70%; transition: all 0.5s;";
        line1.style.cssText="transform: rotate(0deg);";      //Rotating lines to original position      
        line2.style.cssText="transform: rotate(0deg);";      //Rotating lines to original position
        background.style.cssText="transform: scale(0); opacity:100%;";
        home.style.cssText="opacity: 100%;"
        nav=!nav;
    }
    else{
        menuLinks.style.cssText="left: 0; transition: all 0.5s;";
        line1.style.cssText="transform: rotate(45deg);";               //Rotating lines form a X
        line2.style.cssText="transform: rotate(135deg); margin-top: -7px;";               //Rotating lines form a X
        background.style.cssText="transform: scale(50);";
        home.style.cssText="opacity: 0%;"
        nav=!nav;
    }
};

// Leads

const cards = document.querySelectorAll('.card');

cards.forEach(el => {
  el.addEventListener('click', () => {
    const eleInfo = el.querySelector('.card__information');
    el.classList.toggle('card--active');

    if (!el.classList.contains('card--active'))
      eleInfo.classList.toggle('card__information--collapse')
    else
      setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
  });
});