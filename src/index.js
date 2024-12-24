// animation and box click logic
var blocks  = document.querySelectorAll(".inner-column");
let turn0 = true ;

function animation(block){
     var audio = new Audio("./public/assets/green.mp3")
     audio.play();
     block.classList.add("clicked");         
     setTimeout(()=>{
          block.classList.remove("clicked");
     },170)
}

blocks.forEach(block=>
     block.addEventListener("click",()=>{
     if(turn0){
          block.firstElementChild.innerHTML = 'O';
          turn0=false; 
     }else{
          block.firstElementChild.innerHTML = 'X'
          turn0 = true;  
     }
          block.disabled = true
          animation(block);  
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



