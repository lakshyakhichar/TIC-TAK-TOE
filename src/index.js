// animation and box click logic
var blocks  = document.querySelectorAll(".inner-column");

function playSound(){
     var audio = new Audio("./public/assets/green.mp3")
     audio.play();
}

blocks.forEach(block=>
     block.addEventListener("click",()=>{
          playSound();
          block.classList.add("clicked");         
          console.log(this);
          
          setTimeout(()=>{
               block.classList.remove("clicked");
          },170)
     })
)

var resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click",()=>{
     console.log("game reset")
})

//game-logic
const winningPattern = [
     [1,2,3],
     [4,5,6],
     [7,8,9],
     [1,4,7],
     [2,5,8],
     [3,6,9],
     [1,5,9],
     [3,5,7]
]

function checkAnswer(){

}


