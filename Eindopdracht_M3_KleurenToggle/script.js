const menuBtn = document.querySelector(".btn-toggle-nav");
const menuList = document.querySelector(".nav-menu");
const backgroundColor = document.querySelector("body");
const mainColor = document.querySelector(".main-background");
const redColor = document.querySelector(".red-background");
const blueColor = document.querySelector(".blue-background");
const yellowColor = document.querySelector(".yellow-background");
const purpleColor = document.querySelector(".purple-background");
const nameOfColor = document.querySelector(".name-of-color");


//animated menu
let showMenuList = function(){
    menuList.style.visibility = "visible";
    menuList.style.opacity = "1";
    menuList.style.transition = "all 0.5s ease-in-out";
    
};
menuBtn.addEventListener("mouseover", showMenuList);
menuList.addEventListener("mouseover", showMenuList);

let hideMenuList = () => {
    menuList.style.visibility = "hidden";
    menuList.style.opacity = "0";
    menuList.style.transition = "all 0.3s ease-in-out";
};
menuBtn.addEventListener("mouseleave", hideMenuList);
menuList.addEventListener("mouseleave", hideMenuList);

//change color on click/selection
let setBackgroundMain = () => {
    document.getElementById("main").checked=true;
    backgroundColor.classList.add("main-background");
    backgroundColor.classList.remove("red-background", "blue-background","yellow-background", "purple-background" );
    hideMenuList();
    nameOfColor.querySelector("p").innerHTML = "";
    nameOfColor.querySelector("p").innerHTML += "HOME";
};
mainColor.addEventListener("click", setBackgroundMain);

let setBackgroundRed = () => {
        document.getElementById("red").checked=true;
        backgroundColor.classList.add("red-background");
        backgroundColor.classList.remove("blue-background", "yellow-background", "purple-background", "main-background");
        hideMenuList();
        nameOfColor.querySelector("p").innerHTML = "";
        nameOfColor.querySelector("p").innerHTML += "RED";
};
redColor.addEventListener("click", setBackgroundRed);

let setBackgroundBlue = () => {
    document.getElementById("blue").checked=true;
    backgroundColor.classList.add("blue-background");
    backgroundColor.classList.remove("red-background", "yellow-background","purple-background","main-background");
    hideMenuList();
    nameOfColor.querySelector("p").innerHTML = "";
    nameOfColor.querySelector("p").innerHTML += "BLUE";
};
blueColor.addEventListener("click", setBackgroundBlue);

let setBackgroundYellow = () => {
    document.getElementById("yellow").checked=true;
    backgroundColor.classList.add("yellow-background");
    backgroundColor.classList.remove("red-background", "blue-background","purple-background", "main-background");
    hideMenuList();
    nameOfColor.querySelector("p").innerHTML = "";
    nameOfColor.querySelector("p").innerHTML += "YELLOW";
};
yellowColor.addEventListener("click", setBackgroundYellow);

let setBackgroundPurple = () => {
    document.getElementById("purple").checked=true;
    backgroundColor.classList.add("purple-background");
    backgroundColor.classList.remove("red-background" , "yellow-background" , "blue-background" , "main-background");
    hideMenuList();
    nameOfColor.querySelector("p").innerHTML = "";
    nameOfColor.querySelector("p").innerHTML += "PURPLE";
};
purpleColor.addEventListener("click", setBackgroundPurple);

//change color with keyboard
window.addEventListener('keydown', function(pressKey) {
    if (pressKey.keyCode == 49){
        setBackgroundMain();
        console.log("1 is gray");
    } else if (pressKey.keyCode == 50){
        setBackgroundRed();
        console.log("2 is red");
    } else if (pressKey.keyCode == 51){
        setBackgroundBlue();
        console.log("3 is blue");
    } else if (pressKey.keyCode == 52){
        setBackgroundYellow();
        console.log("4 is yellow");
    } else if (pressKey.keyCode == 53){
        setBackgroundPurple();
        console.log("5 is purple");
    } else {
        return;
    };
});

    

