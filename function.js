let gameSeq=[];
let userSeq=[];
let btns=["red","green","purple","yellow"];

let level=0;
let started=false;

document.addEventListener("keypress",function(){
    if(started==false){
        alert("game has started now");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },300);
}


let h2=document.querySelector("h3");
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level:-${level}`;
    //code for the random button generating
    let random=Math.floor(Math.random()*3);
    let randColor=btns[random];
    //accessing the button
    let btn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(btn);

}

function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx]){
        //for same 
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=` GAME OVER!! your score was:<b>${level} </b> Press any key to start1`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);

        level=0;
        started=false;
        userSeq=[];
        gameSeq=[];

    }
}

function buttonPress(){
    let btn=this;
    userFlash(btn);
    userSeq.push(this.id);

    checkAns(userSeq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(butt of allbtns){
    butt.addEventListener("click",buttonPress);
}
