// Iteration 5: Store the player score and display it on the game over screen
const scoreboard=document.getElementById("score-board")

let play_again_button=document.getElementById("play-again-button")
scoreboard.innerText=localStorage.getItem("score")

play_again_button.onclick=()=>{
    location.href ="game.html"
}