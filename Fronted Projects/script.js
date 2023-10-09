"use strict";
let num = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = num;
let highscore = 0;
let count = 20;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if(guess<1 ||guess>20){
        alert("choose a number between 1 and 20");
    }else if (!guess) {
      document.querySelector(".message").textContent = "⛔No number🚫";
    } else if (guess === num && count != 0) {
      document.querySelector(".message").textContent = "👑Correct ans";
      document.querySelector(".number").textContent = num;
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "20vw";
      if (highscore < count) {
        highscore=count;
        document.querySelector(".highscore").textContent = count;
      }
    }
    else if(guess !==num){
      if (count > 1) {
            document.querySelector(".message").textContent = guess > num?"too high👆":"too low👇";
            count--;
            document.querySelector(".score").textContent = count;
          } else {
            count = 0;
            document.querySelector(".message").textContent = "GAME OVER⛔";
            document.querySelector(".score").textContent = count;
    }
    //  else if (guess > num) {
    //   if (count > 1) {
    //     document.querySelector(".message").textContent = "too high👆";
    //     count--;
    //     document.querySelector(".score").textContent = count;
    //   } else {
    //     count = 0;
    //     document.querySelector(".message").textContent = "GAME OVER⛔";
    //     document.querySelector(".score").textContent = count;
    //   }
    // } else if (guess < num) {
    //   if (count > 1) {
    //     document.querySelector(".message").textContent = "too low👇";
    //     count--;
    //     document.querySelector(".score").textContent = count;
    //   } else {
    //     count = 0;
    //     document.querySelector(".message").textContent = "GAME OVER⛔";
    //     document.querySelector(".score").textContent = count;
    //   }
    // }
}
    }
);
document.querySelector(".again").addEventListener("click",function(){
    num = Math.trunc(Math.random() * 20) + 1;
    count = 20;
    document.querySelector(".score").textContent = count;
    document.querySelector(".highscore").textContent=highscore;
    document.querySelector(".message").textContent="🤔Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
});
