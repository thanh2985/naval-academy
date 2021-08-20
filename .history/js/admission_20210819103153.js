window.addEventListener("load", function(){
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    const admisList = document.querySelector(".admis-list");
    const admisItem = document.querySelector(".admis-item");
    const tabScroll = 300;
    const tabScrollWidth = admisList.scrollWidth - admisList.clientWidth;
    tabNext.addEventListener("click", function(event){
        admisList.scrollLeft += tabScroll;
        tabPrev.classList.remove("disable");
        if(admisList.scrollLeft >= tabScrollWidth - tabScroll) tabNext.classList.add("disable");
    });
    tabPrev.addEventListener("click", function(event){
        admisList.scrollLeft -= tabScroll;
        tabNext.classList.remove("disable");
        if(admisList.scrollLeft <=tabScroll) tabPrev.classList.add("disable");
    });
    admisList.addEventListener("wheel", function(event){
        admisList.scrollLeft += event.deltaY;
        if(admisList.scrollLeft >= tabScrollWidth - event.deltaY) tabNext.classList.add("disabled");
        else tabNext.classList.remove("disabled");
        if(admisList.scrollLeft <= 0 - event.deltaY) tabPrev.classList.add("disabled");
        else tabPrev.classList.remove("disabled");
        document.body.addEventListener("scroll", function)
    })
})