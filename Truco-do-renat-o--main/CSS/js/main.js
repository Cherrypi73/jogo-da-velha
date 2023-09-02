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
    console.log(element)
 if(players.classList.contains("players")){
 element.innerHTML =`<i class="${playerX}"> </i>`
players.classList.add("active")
 }else{
    element.innerHTML =`<i class="${playerY}"> </i>`
    players.classList.add("active")
 }
 element.style.pointerEvents = "none" //faz com que o elemento nao repita o valor
 let randomTime =((Math.random() *1000) +200).toFixed();
 setTimeout(()=>{
    clickBot();
 }, randomTime)
}
function clickBot(){
    let array = []
    for(let  i =0 ; i< allBox.length; i++ ){
      if(allBox[i].childElementCount == 0){
        array.push(i)
      //  console.log(i+""+ "it´s not children")
      }
    }
      let  randomBox = array[Math.floor(Math.random()*array.length)]
      console.log(randomBox)
      if(array.length > 0){
        if(players.classList.contains("players")){
allBox[randomBox].innerHTML =`<i class="${playerY}"> </i>`
players.classList.remove("active")
 }else{
    allBox[randomBox].innerHTML =`<i class="${playerX}"> </i>`
    players.classList.remove("active")
 }
      }
   // console.log(array)
}



  
