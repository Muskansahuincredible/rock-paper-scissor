let userscore=0;
let compscore =0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice =()=>{
    const options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];

}
const drawgame=() =>{
    console.log("game was draw.");
    msg.innerText="GAME WAS  DRAW.PLAY AGAIN ";
    msg.style.backgroundColor="black";
}
const showwinner =(userwin,choiceId,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU WIN! YOUR ${choiceId} BEATS ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU LOST! ${compchoice} BEATS YOUR ${choiceId}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(choiceId)=>{
    console.log("user choice=",choiceId);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(choiceId===compchoice){
        drawgame();    
    }
else{
    let userwin=true;
    if(choiceId==="rock"){
        userwin=compchoice==="paper"?false:true;
    }else if(choiceId==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }else {
  userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,choiceId,compchoice);

}

};
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const choiceId= choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
        playgame(choiceId);
    });
});