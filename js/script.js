const player1Em = document.querySelector('.player--0');
const player2Em = document.querySelector('.player--1');

const player1Score = document.getElementById('score--0');
const player2Score= document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentPlayer1Score = document.querySelector('#current--0');
const currentPlayer2Score = document.getElementById('current--1');
let currentScore = 0;
let activePlayer = 0;
let scores = [0 , 0];
let playing = true;





player1Score.textContent = 0;
player2Score.textContent = 0;
diceImage.classList.add('hidden');

btnRoll.addEventListener('click', function(){

    if(playing){

    diceImage.classList.remove('hidden');
const diceRollValue =Math.trunc( Math.random()*6) + 1;
diceImage.src = `images/dice-${diceRollValue}.png`;


if ( diceRollValue !== 1){
    currentScore += diceRollValue;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;


}else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0 ;

    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    player1Em.classList.toggle('player--active');
    player2Em.classList.toggle('player--active');

}
    }
}
)


btnHold.addEventListener('click',()=>{
    if (playing){

    scores[activePlayer] +=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];


    

    if (scores[activePlayer] >= 100){
        playing = false;
        document.querySelector(`#current--${activePlayer}`).textContent = 'WINNER';

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1: 0 ;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        player1Em.classList.toggle('player--active');
        player2Em.classList.toggle('player--active');
    }

}


})




btnNew.addEventListener('click',function(){
    playing = true;
     currentScore = 0;
     activePlayer = 0;
     scores = [0 , 0];
    player1Score.textContent = 0;
player2Score.textContent = 0;
currentPlayer1Score.textContent = 0;
currentPlayer2Score.textContent = 0;
player1Em.classList.add('player--active');
player1Em.classList.remove('player--winner');
player2Em.classList.remove('player--active');
player2Em.classList.remove('player--winner');
diceImage.classList.add('hidden');
})
