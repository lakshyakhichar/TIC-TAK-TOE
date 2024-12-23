// animation and box click logic
var blocks  = document.querySelectorAll(".inner-column");
for(let i = 0 ; i<blocks.length  ; i++){
     blocks[i].addEventListener("click",()=>{
          blocks[i].classList.add("clicked");
          setTimeout(()=>{
               blocks[i].classList.remove("clicked");
          },150)
     })
}

//game-logic



