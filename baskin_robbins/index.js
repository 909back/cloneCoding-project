// slide
const slideList = document.querySelector(".slide-line");
const slideItem = slideList.querySelectorAll("img");
const indexList = document.querySelectorAll(".slide .round-btn")

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

console.log(slideItem);
console.log(indexList);

const slideLength = slideItem.length;
let count = 0;

const size = slideItem[0].clientWidth;
console.log(size);


nextBtn.addEventListener('click',e =>{
    indexList[count].classList.remove("active");
    (count>=slideLength-1)? count = -1 : count;
    slideList.style.left = `-${size * (count+1)}px`;
    indexList[count+1].classList.add("active");
    count++;
})

prevBtn.addEventListener('click',e =>{
    indexList[count].classList.remove("active");
    (count < 1)? count = 5 : count;
    slideList.style.left = `-${size * (count-1)}px`;
    indexList[count-1].classList.add("active");
    console.log(count-1);
    count--;
})

indexList.forEach((v,i) =>{
    v.addEventListener("click", e => {
        indexList.forEach((v,i)=>{
            v.classList.remove("active");
        })
        slideList.style.left = `-${size * (i)}px`;
        v.classList.add("active");
    })
})

const indexList2 = document.querySelectorAll(".br-event .index-btn > .round-btn");

indexList2.forEach((v,i) =>{
    v.addEventListener("click", e => {
        indexList2.forEach((v,i)=>{
            v.classList.remove("active");
        })
        v.classList.add("active");
    })
})

//gnb-bottom
const gnb = document.querySelector(".header-bottom > .inner");
const gnb_bg = document.querySelector(".gnb-bg");

console.log(gnb);
console.log(gnb_bg);

gnb.addEventListener("mouseover",e =>{
    gnb_bg.style.height = "275px";
})

gnb.addEventListener("mouseout",e =>{
    gnb_bg.style.height = "0px";
    gnb_bg.style.overflow = "hidden";
})

//footer - select
const select = document.querySelector("#familySite");

select.addEventListener("change", e =>{ 
    const site = select[select.selectedIndex].value;
    console.log(site);
    location.href = site;
});
