
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playx"),
selectBtnO = selectBox.querySelector(".options .playy"),
container = document.querySelector(".container"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

window.onload = ()=>{ 
    for (let i = 0; i < allBox.length; i++) { 
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
    "use strict";

    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    container.classList.add("show"); 
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide"); 
    container.classList.add("show"); 
    players.setAttribute("class", "players active player"); 
}

let playerX = "fas fa-times"; 
let playerY = "far fa-circle"; 
let playsignal = "X"; 
let runBot = true; 


function clickedBox(element){
    if(players.classList.contains("player")){
        playsignal = "O"; 
        element.innerHTML = `<i class="${playerY}"></i>`; 
        players.classList.remove("active"); 
        element.setAttribute("id", playsignal); 
    }else{
        element.innerHTML = `<i class="${playerX}"></i>`; 
        element.setAttribute("id", playsignal); 
        players.classList.add("active"); 
    }
    selectWinner(); 
    element.style.pointerEvents = "none"; 
    container.style.pointerEvents = "none"; 
    let randomTime = ((Math.random() * 1000) + 200).toFixed(); 
    setTimeout(()=>{
        clickbot(runBot);
    }, randomTime); 
}


function clickbot(){
    let array = []; 
    if(runBot){ 
        playsignal = "O"; 
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){ 
                array.push(i); 
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)]; 
        if(array.length > 0){ 
            if(players.classList.contains("player")){ 
                playsignal = "X"; 
                allBox[randomBox].innerHTML = `<i class="${playerX}"></i>`; 
                allBox[randomBox].setAttribute("id", playsignal); 
                players.classList.add("active"); 
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerY}"></i>`; 
                players.classList.remove("active"); 
                allBox[randomBox].setAttribute("id", playsignal); 
            }
            selectWinner(); 
        }
        allBox[randomBox].style.pointerEvents = "none"; 
        container.style.pointerEvents = "auto"; 
        playsignal = "X"; 
    }
}

function getIdVal(classname){
    return document.querySelector(".col" + classname).id; 
}
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}
function selectWinner(){ 
    if(checkIdSign(1,2,3,playsignal) || checkIdSign(4,5,6, playsignal) || checkIdSign(7,8,9, playsignal) || checkIdSign(1,4,7, playsignal) || checkIdSign(2,5,8, playsignal) || checkIdSign(3,6,9, playsignal) || checkIdSign(1,5,9, playsignal) || checkIdSign(3,5,7, playsignal)){
        runBot = false; 
        clickbot(runBot); 
        setTimeout(()=>{ 
            resultBox.classList.add("show");
            container.classList.remove("show");
        }, 700); 
        wonText.innerHTML = `Player <p>${playsignal}</p> won the game!`; 
    }else{ 
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false;
            clickbot(runBot); 
            setTimeout(()=>{ 
                resultBox.classList.add("show");
                container.classList.remove("show");
            }, 700); 
            wonText.textContent = "Match has been drawn!"; 
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload(); 
}