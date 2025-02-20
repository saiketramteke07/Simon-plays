let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];
let start=false;
let level=0;
h2=document.querySelector("h2")
document.addEventListener("keypress",function (){
  if(start==false){
    console.log("game started");
    start=true;
    levelUp();
  }

})

function btnFlash(btn){
   btn.classList.add("flash")
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
}

function levelUp(){
    userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;
   //random btn 
   randomIdx=Math.floor(Math.random()*3)
   let randomColor=btns[randomIdx];
   let randomBtn=document.querySelector(`.${randomColor}`)
   gameSeq.push(randomColor);
   console.log(gameSeq)
   btnFlash(randomBtn);

}
function checkAns(idx){
  //console.log("curr level",level);
  //let idx=level-1;

  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
  }else{
    h2.innerHTML=`Game Over! Your score was <b>${level}<b> <br>Press any key to start`
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white"
    },150);
    reset();
  }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1)
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}