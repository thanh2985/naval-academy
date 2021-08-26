window.addEventListener("load", function(){
    const prevSlider = document.querySelector(".slider-prev");
    const nextSlider = document.querySelector(".slider-next");
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderMain = document.querySelector(".slider-main");
    const dotItems = document.querySelectorAll(".slider-dots-item");
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
            if(index >= sliderLength - 1) return index = sliderLength-1;
            console.log(index); 
            positionMain -= itemWidth;
            sliderMain.style = `transform: translateX(${positionMain}px)`;
            dotItems.forEach(item => {
                item.classList.remove("dot-active");
            })
            dotItems[index + 1].classList.add("dot-active");
            index ++;
        }
        if(direct === -1){
            console.log(index);
            if(index <= 0) return index = 0;
            console.log(index); 
            positionMain += itemWidth;
            sliderMain.style = `transform: translateX(${positionMain}px)`;
            dotItems.forEach(item => {
                item.classList.remove("dot-active");
            })
            dotItems[index - 1].classList.add("dot-active");
            index --;
        }
    };
    dotItems.forEach(item => {
        item.addEventListener("click", function(event){
            console.log(typeof(event.target.dataset.index));
            clickIndex = parseInt()
            positionMain = itemWidth
        })
    })

})