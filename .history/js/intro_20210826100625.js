window.addEventListener("load", function(){
    const prevSlider = document.querySelector(".slider-prev");
    const nextSlider = document.querySelector(".slider-next");
    const itemSlider = document.querySelector(".slider-item");
    prevSlider.addEventListener("click", function(){
        handleSlideChange(-1);
    })
    prevSlider.addEventListener("click", function(){
        handleSlideChange(1);
    })
    function handleSlideChange(direct){

    };
})