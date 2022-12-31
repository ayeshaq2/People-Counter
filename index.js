
//document.getElementById("count-el").innerText =5;

// let count = 5; 
// console.log(count);

//initialize the count 
//listen for clicks and then increment 
//change count-el in thml to reflect the new count 

let saveEl = document.getElementById("save-el"); 
let count = 0; 
let countEl = document.getElementById("count-el"); 

function increment(){
    count = count + 1;
    countEl.innerText= count;
    
}

function save() {

    let dash = " - ";
    let myCount = count; 
    let countStr = myCount + dash; 
    saveEl.textContent += countStr; 
}

function ClickSave(){
    count = 0; 
    countEl.innerText = count; 
}


