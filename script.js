function getrandomvalue() {
    const value = ['Rock', 'Paper', 'Scissors']
    const Randomvalue = Math.floor(Math.random() * value.length)
    return value[Randomvalue]
};
let playerscore=0
let computerscore=0
function getuservalue(player, computer) {
    return (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    )
};

function getdisplayoutput(player) {
    const computer = getrandomvalue()
    if (getuservalue(player, computer)) {
        playerscore++;
        return `Player Wins! ${player} beats ${computer}`
    } else if (player === computer) {
        return `Its tie! Both Have Same Value`
    }
    else{
        computerscore++;
        return `Computer Wins! ${computer} beats ${player}`
    }

};

function displayoutput(player){
        resultcontainer.innerHTML= getdisplayoutput(player)
    spanplayerscore.innerHTML=playerscore;
    spancomputerscore.innerHTML=computerscore;

    if(playerscore===3 || computerscore===3){
        winnercontainer.innerHTML= `${playerscore===3?"Player":"Computer"} has won the Game`
        resetgame.style.display="block"
        chooseoption.style.display="none"
    }
};
function resetallgame(){
    playerscore=0;
    computerscore=0;
    chooseoption.style.display="block"
    resetgame.style.display="none"
    resultcontainer.innerHTML=''
    winnercontainer.innerHTML=''
    spanplayerscore.innerHTML = playerscore;
    spancomputerscore.innerHTML = computerscore;

};
const Rockbtn = document.getElementById('Rock-btn')
const Scissorsbtn = document.getElementById('Scissors-btn')
const paperbtn = document.getElementById('paper-btn')
const resultcontainer = document.getElementById('result-container')
const spanplayerscore=document.getElementById('span-player-score')
const spancomputerscore=document.getElementById('span-computer-score')
const resetgame=document.getElementById('resetgame')
const chooseoption=document.getElementById('choose-option')
const winnercontainer=document.getElementById('winner-container')

Rockbtn.addEventListener('click', function () {
    displayoutput('Rock')
});
Scissorsbtn.addEventListener('click', function () {
    displayoutput('Scissors')
});
paperbtn.addEventListener('click', function () {
    displayoutput('Paper')
});
resetgame.addEventListener('click', resetallgame)

