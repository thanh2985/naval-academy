window.addEventListener("load", function(){
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    const admisList = document.querySelector(".admis-list");
    const admisItem = document.querySelector(".admis-item");
    const tabScroll = 300;
    const tabScrollWidth = admisList.scrollWidth - admisList.clientWidth
    tabNext.addEventListener("click", function(event){
        admisList.scrollLeft += tabScroll;
        tabPrev.classList.remove("disable");
        if(admisList.scrollLeft >= )
    })
})