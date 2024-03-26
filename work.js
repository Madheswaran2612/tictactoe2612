let boxs=document.querySelectorAll(".box");
let Oturn=document.getElementById("turnO");
let Xturn=document.getElementById("turnX");
let toggle=document.getElementById("toggle");
let result=document.getElementById("result");
let restart=document.getElementById("restart");
let isWin=false;
let isEnd=true;
let winSequence=[
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
let play=0;


boxs.forEach(box=>box.addEventListener("click",clicked));
function clicked(){  
    const index=this.getAttribute("index");
    if(this.textContent==""&&isEnd) {
        if(play%2==0){
            this.textContent="⭕";
            this.style.color="red";
        }
        else{
            this.textContent="✖️";
            this.style.color="#00007e";
        }
        play++;
        checkWinner();      
        this.style.cursor="no-drop";          
    }  
}
function checkWinner(){
if(play>4){   
    for(let i=0;i<winSequence.length;i++){
        let cond=winSequence[i];
        let boxA=boxs[cond[0]];
        let boxB=boxs[cond[1]];
        let boxC=boxs[cond[2]];
        if(boxA.textContent==""||boxB.textContent==""||boxC.textContent==""){
            continue;
        }
        if(boxA.textContent==boxB.textContent&&boxA.textContent==boxC.textContent){
            var winner=boxA.textContent;
            isWin=true;
            isEnd=false;
            boxs.forEach(box=>box.style.cursor="no-drop");
            boxA.style.backgroundColor="#cdcdcd";
            boxB.style.backgroundColor="#cdcdcd";
            boxC.style.backgroundColor="#cdcdcd";
            break;
        }
    }
}
    if(isWin){
      if(winner=="O"){
        result.textContent="Player(⭕) win❗";
      }
      else{
        result.textContent="Player(✖️) win❗";
      }
    }
    else{
        if(play==9&&!isWin){
            result.textContent="TIE❗";
        }
        else{
            if((play-1)%2==0){
                Oturn.style.color="blueviolet";
                Xturn.style.color="#00005a";
                toggle.style.left="50%";
            }
            else{
                Xturn.style.color="blueviolet";
                Oturn.style.color="#00005a";
                toggle.style.left="0%";
            }
        }
    }
}
restart.onclick=function(){
    boxs.forEach(box=>{box.textContent='';
                       box.style.backgroundColor="white";
                       box.style.cursor="pointer"});
    toggle.style.left="0%";
    result.textContent="WINNER❓";
    play=0;
    isEnd=true;
    isWin=false;
    Xturn.style.color="blueviolet";
    Oturn.style.color="#00005a";
}
