window.addEventListener("load", function(){
    const headerNav = document.querySelector(".header-nav");
    const iconMenu = document.querySelector(".icon-menu");
    const navItem = document.querySelectorAll(".nav-item");
    const iconDropdowns = document.querySelectorAll(".icon-dropdown");
    iconMenu.addEventListener("click", function(event){
        if(iconMenu.classList.contains("actived")){
            headerNav.style = "transform: translateX(500px);";
            iconMenu.classList.remove("actived");
            iconMenu.firstElementChild.setAttribute("name", "menu");
        }
        else{
            headerNav.style = "transform: translateX(0);";
            iconMenu.classList.add("actived");
            iconMenu.firstElementChild.setAttribute("name", "close");
        }
    });
    navItem.forEach(item => {
        item.addEventListener("mouseenter", function(event){
            if(window.innerWidth <= 1023){
                if(event.target.children[1]){
                    const dropdownLink = event.target.children[0];
                    handleDropdownStyle(dropdownLink);
                };
            };
        });
    });
    iconDropdowns.forEach(item => {
        item.addEventListener("click", function(event){
                    const iconDropdown = event.target;
            if(window.innerWidth <= 1023){
                const iconDropdown = event.target;
                if(event.target.classList.contains("actived")){
                    iconDropdown.style = "transform: rotate(-90deg)";
                    iconDropdown.classList.remove("actived");
                    iconDropdown.parentElement.nextElementSibling.style = "transform:translateY(10px); opacity: 0;pointer-events: none;";
                }
                else{
                    handleDropdownStyle(iconDropdown.parentElement);
                }
            }
        })
    })
    function handleDropdownStyle(event){
        event.nextElementSibling.style = "opacity: 1;pointer-events: auto;transform: translate(0, 0);display: block;";
        event.firstElementChild.style = "transform: rotate(0deg)";
        event.firstElementChild.classList.add("actived");
    }
});