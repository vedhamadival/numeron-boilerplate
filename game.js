// Iteration 2: Generate 2 random number and display it on the screen
var num1= document.getElementById("number1")
var num2=document.getElementById("number2")
const buttons= document.getElementById("buttons")
var ran1;
var ran2;
displayRandomnumber();

function displayRandomnumber(){
ran1=getRandomNumber();
ran2=getRandomNumber();
num1.innerText=ran1;
num2.innerText=ran2;
}

let score=0


buttons.addEventListener('click', (e)=>{
    compareNumbers(e.target.id)
})

// Iteration 3: Make the options button functional
//to compare the two numbers using operators
function compareNumbers(operation){
    if(operation=="greater-than" && ran1>ran2 || operation=="equal-to" && ran1==ran2  || operation=="lesser-than" && ran1<ran2){
       time=5
        score++
        displayRandomnumber();
    }
    else{
        gameover();
    }
}

function getRandomNumber(){
    return Math.floor(Math.random()*100)+1; 
}
// Iteration 4: Build a timer for the game
var timer=document.getElementById("timer");

//timer functionality
let time=5
function stopwatch(){
    timer.innerText=time
    time--
    if(time<=0){
       gameover();
    }
}
setInterval(stopwatch,1000)

//gameover
function gameover(){
    window.location.href="gameover.html";
    localStorage.setItem("score",score);
}

