# jogo da velha
 
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
}
    SelectOXBtn.onclick =  () =>{
        selectBox.classList.add("hide"), 
        container.classList.add("show"),
        players.setAttribute("class", "players active player");
    }
    SelectXBtn.onclick =  () =>{
        selectBox.classList.add("hide"),
        container.classList.add("show")   
     }
let playerX = "fas fa-times";
let playerY = "far fa-circle";
let playerSignal ="X";
runBot = true;
function clickedBox(element){
 if(players.classList.contains("players")){
    playerSignal = "O"
 element.innerHTML =`<i class="${playerY}"> </i>`
players.classList.remove("active")
element.setAttribute("id",playerSignal)
 }else{
    element.innerHTML =`<i class="${playerX}"> </i>`
    players.classList.add("active")
    element.setAttribute("id",playerSignal)
 }
 selectWinner()
 element.style.pointerEvents = "none" //faz com que o elemento nao repita o valor
container.style.pointerEvents = "none";
 let randomTime =((Math.random() *1000) +200).toFixed();
 setTimeout(()=>{
    clickBot(runBot);
 }, randomTime)
}

function clickBot(){
    let array = [];
    if(runBot){
        playerSignal = "O";
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){
            if(players.classList.contains("players")){ 
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerX}"></i>`;
                allBox[randomBox].setAttribute("id", playerSignal);
                players.classList.add("active");
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerY}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSignal);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        container.style.pointerEvents = "auto";
        playerSignal = "X";
    }
}
      

function getIdVal(classname){
   console.log(( "col"+ classname).id)
}
function checkIdSign(val1){ 
    if(val1 === classname)
        return true;
    }

function selectWinner(){
    if(checkIdSign(1,2,3,playerSignal) || checkIdSign(4,5,6, playerSignal) || checkIdSign(7,8,9, playerSignal) || checkIdSign(1,4,7, playerSignal) || checkIdSign(2,5,8, playerSignal) || checkIdSign(3,6,9, playerSignal) || checkIdSign(1,5,9, playerSignal) || checkIdSign(3,5,7, playerSignal)){
 console.log(playerSignal + " "+" is the winner")
    }
    }

 //
  
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=2.0">
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="icon" href="favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="white" />
        <link rel="apple-touch-icon" href="imagens/pwa-icon-256.png" />
        <title>truco renato</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

</head>
<body>
  <!-- select-box -->
  <div class="select-box">
  <header> Jogo da velha</header>
  <div class="content">
  <div class="title"> Qual voce  será? </div>
  <div class="options">
    <button class="playx" > Jogador X</button>
    <button class="playy"> Jogador Y</button>
  </div>
</div>
 </div>
 <!-- container -->
  <div class="container">
    <div class="details">
    <div class="player">
      <span class="Xturn "> Vez do X  </span>
      <span class="Oturn"> Vez do Y</span>
      <div class="slider"></div>
  </div>
</div>
<div class="container-player">
<section>
  <span class="col1"></span>
  <span class="col2"></span>
<span class="col3"></span>
</section>
<section>
<span class="col1"></span>
<span class="col2"></span>
<span class="col3"></span>
</section>
<section>
<span class="col1"></span>
<span class="col2"></span>
<span class="col3"></span>
</section>
</div>
 </div>

 <div class="result-box">
    <div class="box">
    <div class="won-text"> Player<p> X</p> won the game!</div><pre></pre>
    <div class="btn"> <button> replay</button></div></div>
  </div>

    <script src="js/main.js"></script>

</body>
</html>