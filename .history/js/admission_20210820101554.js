window.addEventListener("load", function(){
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    const admisList = document.querySelector(".admis-list");
    const tabScroll = 300;
    const tabScrollWidth = admisList.scrollWidth - admisList.clientWidth;
    const admis = document.querySelector(".admis")
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
        console.log(admisList.scrollLeft, tabScrollWidth );
        admisList.scrollLeft += (event.deltaY *2);
        if(admisList.scrollLeft >= tabScrollWidth - (event.deltaY *2)) {tabNext.classList.add("disable");}
        else tabNext.classList.remove("disable");
        if(admisList.scrollLeft <= 0 -( event.deltaY *2)) tabPrev.classList.add("disable");
        else tabPrev.classList.remove("disable");
        event.preventDefault();  
    })
})