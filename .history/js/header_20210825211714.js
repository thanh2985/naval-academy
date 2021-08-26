window.addEventListener("load", function(){
    const bodyScroll = document.body.scrollHeight - window.innerHeight;
    document.body.scroll(0, bodyScroll);
    console.log(document.body.scrollTop, document.body.scrollHeight, window.innerHeight);
    const iconMenu = document.querySelector(".icon-menu");
    const headerMenu = document.querySelector(".header-menu");
    let menuIndex = false;
    iconMenu.addEventListener("click",function(event){
        if(!menuIndex) {
            headerMenu.style = `visibility: visible;
            opacity:1;`
            event.target.setAttribute("name","close");
            event.target.style= `color = white;`;
            menuIndex = true;
        }
        else {
            headerMenu.style =`visibility: none;opacity:0;`
            event.target.style=`color: $primary-color;`;
            event.target.setAttribute("name","menu");
            menuIndex = false;
        }
    })
})