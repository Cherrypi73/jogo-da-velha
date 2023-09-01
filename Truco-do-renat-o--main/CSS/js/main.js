window.onload = ()=>{
    "use strict";

    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
    SelectOXBtn.onclick =  () =>{
        selectBox.classList.add("hide") 
        container.classList.add("show")
    }
    SelectXBtn.onclick =  () =>{
        selectBox.classList.add("hide")
        container.classList.add("show")
    }
   
};
const selectBox =  document.querySelector(".select-box"),
SelectXBtn = selectBox.querySelector(".playx"),
SelectOXBtn = selectBox.querySelector(".playy"),
container = document.querySelector(".container")


  
