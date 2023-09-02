const selectBox =  document.querySelector(".select-box"),
SelectXBtn = selectBox.querySelector(".playx"),
SelectOXBtn = selectBox.querySelector(".playy"),
container = document.querySelector(".container")
players = document.querySelector(".player"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box");

window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
     }
    "use strict";

    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
    SelectOXBtn.onclick =  () =>{
        selectBox.classList.add("hide"), 
        container.classList.add("show"),
        players.setAttribute("class", "players active player");
    }
    SelectXBtn.onclick =  () =>{
        selectBox.classList.add("hide"),
        container.classList.add("show")    }
   
};
let playerX = "fas fa-times";
let playerY = "far fa-circle"
function clickedBox(element){
 if(players.classList.contains("players")){
 element.innerHTML =`<i class="${playerX}"> </i>`
 }else{
    element.innerHTML =`<i class="${playerY}"> </i>`
 }
}




  
