let menu = document.querySelector(".fixed-menu") //declare a variable named 'menu' and get element that has the class name "fixed-menu" in html
menu.addEventListener("click",function(event) { //when you clicked the element with class fixed-menu , the function will be called
    let clickTarget = event.target //showing the exact element that was clicked

    let activeButton = document.querySelector(".active") //declare a variable 'activeButton' where we store element that has a class Active

    if (clickTarget.classList.contains('nav-link')){ //if the element that was clicked, contains nav-link, 
        clickTarget.classList.add('active'); //add class Active to the element that was clicked
        activeButton.classList.remove('active'); // add remove class Active that was previously active
        let mobile = document.querySelector(".mobile_menu")
        if (!mobile.classList.contains("hide")) {
            mobile.classList.add('hide')
            console.log(1)
        } 
    }
    let body = document.querySelector("body");
    let mobile = document.querySelector(".mobile_menu")
    if (!body.classList.contains("off-scroll")&&
        !mobile.classList.contains("hide")){
            body.classList.add("off-scroll")
        }
        else{
            body.classList.remove("off-scroll")
        }
})

let classLink = ".main-link"
window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*3.8) {
        classLink = '.comments-link'
    }
    else if (window.scrollY >= h*2.8) {
        classLink = '.works-link'
    }
    else if (window.scrollY >= h*1.8) {
        classLink = '.skills-link'
    }
    else if (window.scrollY >= h*0.8) {
        classLink = '.about-link'
    }
    else {
        classLink = '.main-link'
    }

    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);

    if (!newActiveBtn.classList.contains('active')) {
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active');

    }
};

document.querySelector(".mobile-button").addEventListener("click",
    function(event){
        document.querySelector(".mobile_menu").classList.toggle("hide")
    }
)
