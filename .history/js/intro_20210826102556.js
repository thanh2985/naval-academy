window.addEventListener("load", function(){
    const prevSlider = document.querySelector(".slider-prev");
    const nextSlider = document.querySelector(".slider-next");
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderMain = document.querySelector(".slider-main");
    let index = 0;
    let positionMain = 0;
    const sliderLength = sliderItems.length;
    const itemWidth = sliderItems[0].offsetWidth;
    prevSlider.addEventListener("click", function(){
        handleSlideChange(-1);
    })
    nextSlider.addEventListener("click", function(){
        handleSlideChange(1);
    })
    function handleSlideChange(direct){
        if(direct === 1){
            console.log(index);
            if(index >= sliderLength - 1) {
                index = -1;
                position = -itemWidth;
                sliderMain.style = `transform: translateX(${positionMain}px)`;
            } 
            console.log(index); 
            positionMain -= itemWidth;
            sliderMain.style = `transform: translateX(${positionMain}px)`;
            index ++;
        }
    };
})