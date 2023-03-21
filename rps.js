function choiceofthecomputer(){
const comchoice= ["rock","paper","scissors"];
return comchoice[ Math.floor(Math.random() * comchoice.length)];
}
let plcounter = 0;
let comcounter = 0;
function playRound(pl,cm){
    
    if(pl == cm){
        textdiv.textContent="Draw, the score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);
    }
    else if(cm == "rock" && pl == "paper"){
        plcounter+=1
        textdiv.textContent="You won, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }
    else if(cm == "rock" && pl == "scissors"){
        comcounter+=1
        textdiv.textContent="You lost, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }
    
    else if(cm == "paper" && pl == "scissors"){
        plcounter+=1
        textdiv.textContent="You won, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }
    else if(cm == "paper" && pl == "rock"){
        comcounter+=1
        textdiv.textContent="You lost, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }
    
    else if(cm == "scissors" && pl == "rock"){
        plcounter+=1
        textdiv.textContent="You won, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }
    else if(cm == "scissors" && pl == "paper"){
        comcounter+=1
        textdiv.textContent="You lost, the new score is Computer: "+comcounter+" Player: "+plcounter;
        document.body.appendChild(textdiv);    }


    if(plcounter == 5|| comcounter == 5){
        const trydiv = document.createElement("div");
        const tryagain = document.createElement("button");
        tryagain.textContent = "Try again";
        trydiv.appendChild(tryagain);
        document.body.appendChild(trydiv);
        tryagain.classList.add("try");
        trydiv.classList.add("trydiv");
        rock.disabled= true;
        paper.disabled= true;
        scissors.disabled= true;
        
        tryagain.addEventListener("click", ()=>{
            location.reload();
        } )
    }
}
const rock = document.querySelector('#rock');

const paper= document.querySelector('#paper');
const scissors= document.querySelector('#scissors');
const textdiv = document.createElement("div");
textdiv.classList.add("results")
rock.addEventListener('click',()=>{
    let playerchoice = "rock";
    playRound(playerchoice,choiceofthecomputer());
})

paper.addEventListener('click',()=>{
    let playerchoice = "paper";
    playRound(playerchoice,choiceofthecomputer());
})

scissors.addEventListener('click',()=>{
    let playerchoice = "scissors";
    playRound(playerchoice,choiceofthecomputer());
})


