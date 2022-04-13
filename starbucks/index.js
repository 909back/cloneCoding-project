
/*
@ Filename index.js
@ Author 백은지(bej2560183089@gmail.com)
@ Description 스타벅스 페이지에 JS 기능 구현 
*/


const banner1 = document.querySelector("#banner1");

const bn1_Items = banner1.querySelectorAll("div:not(.banner1-inner)");

bn1_Items.forEach((v, i) => {
    v.style.opacity = "0";
})

window.addEventListener("load", e => {
    bn1_Items.forEach((v, i) => {
        ;
        setTimeout(() => {
            v.style.opacity = "1";
        }, 800 * (i + 1));
    })
})


// riddon
const btnProm = document.querySelector("#btn-prom");
const slide = document.querySelector("#slide");

// slide 
const btnPrev = slide.querySelector(".btn-prev");
const btnNext = slide.querySelector(".btn-next");

const slideItems = slide.querySelectorAll(".slide-li > li");

//slide-index 
const slideIndex = slide.querySelectorAll(".slide-index > ul > li");

//slide pause 
const slideControl = slide.querySelector(".btn-control");


//riddon prom click event
btnProm.addEventListener("click", e => {

    const slideShow = document.defaultView.getComputedStyle(slide).display
    
    if (slideShow === "none") {
        btnProm.setAttribute("src", "img/btn_prom_up.png");
        slide.style.display = "block";
        
    } else if (slideShow === "block") {
        btnProm.setAttribute("src", "img/btn_prom_down.png");
        slide.style.display = "none";   
    }

});

const slideChange = setInterval(() => {

    slideItems.forEach((v, i) => {
        const slideActive = v.classList.contains("slide-active");
        const slideNext = v.classList.contains("slide-next");
        const slidePrev = v.classList.contains("slide-prev");

        if (slideActive) {
            v.classList.remove("slide-active");
            v.classList.add("slide-prev");
            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_off.png");
        } else if (slideNext) {
            v.classList.remove("slide-next");
            v.classList.add("slide-active");
            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_on.png");
        } else if (slidePrev) {
            v.classList.remove("slide-prev");
            v.classList.add("slide-next");
        }
    })

}, 3000);

slideControl.addEventListener("click", e =>{
  slideControl.classList.toggle("btn-stop");
  slideControl.classList.toggle("btn-play")
  
  const contain_check = slideControl.classList.contains("btn-stop");

  if(!contain_check){
      clearInterval(slideChange);
  } else {
    setInterval(() => {
        console.log("function on")
        slideItems.forEach((v, i) => {
            const slideActive = v.classList.contains("slide-active");
            const slideNext = v.classList.contains("slide-next");
            const slidePrev = v.classList.contains("slide-prev");
    
            if (slideActive) {
                v.classList.remove("slide-active");
                v.classList.add("slide-prev");
                slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_off.png");
            } else if (slideNext) {
                v.classList.remove("slide-next");
                v.classList.add("slide-active");
                slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_on.png");
            } else if (slidePrev) {
                v.classList.remove("slide-prev");
                v.classList.add("slide-next");
            }
        })
    
    }, 3000);
  }
})

//btnPrev click evnet
btnPrev.addEventListener("click", e => {
    clearInterval(slideChange);
    slideItems.forEach((v, i) => {
        const slideActive = v.classList.contains("slide-active");
        const slideNext = v.classList.contains("slide-next");
        const slidePrev = v.classList.contains("slide-prev");

        if (slideActive) {
            v.classList.remove("slide-active");
            v.classList.add("slide-next");

            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_off.png");
        } else if (slideNext) {
            v.classList.remove("slide-next");
            v.classList.add("slide-prev");
        } else if (slidePrev) {
            v.classList.remove("slide-prev");
            v.classList.add("slide-active");
            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_on.png");
        }
    })
})


//btnNext click evnet
btnNext.addEventListener("click", e => {
   clearInterval(slideChange);
    slideItems.forEach((v, i) => {
        const slideActive = v.classList.contains("slide-active");
        const slideNext = v.classList.contains("slide-next");
        const slidePrev = v.classList.contains("slide-prev");

        if (slideActive) {
            v.classList.remove("slide-active");
            v.classList.add("slide-prev");
            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_off.png");
        } else if (slideNext) {
            v.classList.remove("slide-next");
            v.classList.add("slide-active");
            slideIndex[i].querySelector("img").setAttribute("src","img/main_prom_on.png");
        } else if (slidePrev) {
            v.classList.remove("slide-prev");
            v.classList.add("slide-next");
        }
    })

})


/*-- #banner2 -*/

const banner2 = document.querySelector("#banner2");
const bn2Left = document.querySelector(".bn2-left");
const bn2Right = document.querySelectorAll(".bn2-right");

console.log(banner2.getBoundingClientRect());
console.log(bn2Right[0].getBoundingClientRect());

/** bn4 */

const bn4Img1 = document.querySelector("#banner4 > .inner > img:first-child");
const bn4Img2 = document.querySelector("#banner4 > .inner > img:nth-child(2)");
const bn4Btn = document.querySelector("#banner4 > .inner > button ");

// bn6

const banner6 = document.querySelector("#banner6");
const bn6Img5 = banner6.querySelector(".inner > img:nth-child(5)");
const bn6Img6 = banner6.querySelector(".inner > img:nth-child(6)");
const bn6Btn = banner6.querySelector(".inner > button");

window.addEventListener("scroll", e => {
      console.log(window.scrollY);
     if(window.scrollY > 100){
        bn2Left.style.transform ="translateX(763px)";
        bn2Right[0].style.transform ="translateX(-897px)";
        bn2Right[1].style.transform ="translateX(-1089px)";
    
     }

     if(window.scrollY >1360){
        bn4Img1.style.transform ="translateX(900px)";
        bn4Img2.style.transform ="translateX(792px)";
        bn4Btn.style.transform ="translateX(1028px)";
     }

     if(window.scrollY >2420){
        bn6Img5.style.transform ="translateX(-849px)";
        bn6Img6.style.transform ="translateX(-868px)";
        bn6Btn.style.transform ="translateX(-1002px)";
     }
});



