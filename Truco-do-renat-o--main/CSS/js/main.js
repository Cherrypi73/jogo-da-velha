window.onload = ()=>{
    "use strict";

    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

let team1point = 0;
let team2point = 0;
let wins1 = 0;
let wins2 = 0;
function updatepoint(team,points) {
    if (team ==='team1'){
        team1point += points;
        updateScore();
        checkWinner();
  
    } else if (team === 'team2') {
        team2point += points;
        updateScore();
        checkWinner();   
       
      }
    }
    function updateScore() {
      document.getElementById("score1").textContent = team1point + " pontos";
      document.getElementById("score2").textContent = team2point + " pontos";
    }
    
    function checkWinner() {
      if (team1point >= 12) {
        wins1++;
        showWinner("Equipe 1");
        checkWin()
        resetScores();
      } else if (team2point >= 12) {
        wins2++;
        showWinner("Equipe 2");
        checkWin()
 resetScores();
      }
    }
    function updateScoreWin() {
      document.getElementById("win1").textContent = wins1 ;
      document.getElementById("win2").textContent = wins2;
    }
    function showWinner(winner) {
      document.getElementById("result").textContent = "Vencedor: " + winner + " (Equipe 1: " +  wins1 + " vitórias, Equipe 2: " +  wins2 + " vitórias)";
    }
    function showWin1(win) {
      document.getElementById("resultWin").textContent = "Vencedor: "+ win +"(Equipe 1)" ;
    }
    function showWin2(win) {
      document.getElementById("resultWin").textContent = "Vencedor: "+ win +"(Equipe 2)" ;
    }
    function checkWin() {
      if (wins1 >= 3) {
        showWin1("Equipe 1"); 
         updateScoreWin()
      
      } 
      else if (wins2 >= 3) {
        showWin2("Equipe 2");
        updateScoreWin()
       
      }
    }
function resetScores() {
    team1point = 0;
    team2point = 0;
   
    document.getElementById('score2').textContent = team2point;
    document.getElementById('score1').textContent = team1point;
   } 
  
  
