window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let nome = document.getElementById('nome');
let resposta = document.getElementById('resposta');
let clasificacao = document.getElementById('clasificacao');
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    let IMC = (Number(peso.value)* Number(altura.value))/2;
    
    resposta.innerHTML = 'A Média do paciente ' + " é " + IMC
    if(IMC < 18,5){
        clasificacao.innerHTML = "vixi ta ruim em"
    } if(IMC > 18,4 && IMC < 25 ){
        clasificacao.innerHTML = "Ta normal mano"
    } 
    if(IMC > 25 && IMC < 30 ){
        clasificacao.innerHTML = "precisa emagrecer mano"
    } 
    if(IMC >= 30 && IMC < 35 ){
        clasificacao.innerHTML = "obsedidade 1"
    } if(IMC >= 35 && IMC < 40 ){
        clasificacao.innerHTML = "obsedidade 2"
    } 
    if(IMC >= 40 ){
        clasificacao.innerHTML = "obsedidade 3"
    } 
})  