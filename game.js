let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#your-score");
const compScorePara=document.querySelector("#comp-score");



// comp choice generating
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randmIdx=Math.floor(Math.random()*3);
    return options[randmIdx];
};
//  main game function
const playgame=(userchoice)=>{
    console.log("user choice is =",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice is =",compchoice);
    
    
    if(userchoice===compchoice){
    drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            // if comp take paper then we use false because user fails.(true means user wins and false means comp wins)
            // if comp take scissor then it will be true
       let userWin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin=compchoice==="scissor"?false:true;
        }else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);

        }
};
// user choice generating
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });

});
const drawGame =()=>{
        console.log("game was draw !! Try again");
        msg.innerText="game was draw !! Try again";
        msg.style.background="#6e4555";
};
const showWinner =(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win !! your ${userchoice} beats ${compchoice}`;
        msg.style.background="#7c3238";
        msg.style.color="white";
       
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
       msg.innerText=`you lost !!${compchoice} beats ${userchoice}`;
       msg.style.background="#b1d3ed";
       msg.style.color="#221308";
       
       
}
};