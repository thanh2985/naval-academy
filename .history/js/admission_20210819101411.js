window.addEventListener("load", function(){
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    const admisList = document.querySelector(".admis-list");
    const admisItem = document.querySelector(".admis-item");
    const tabScroll = 100;
    tabNext.addEventListener("click", function(event){
        admisList.scrollLeft += tabScroll;
        tabPrev.classList
    })
})