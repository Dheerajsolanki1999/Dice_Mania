const play_again =  document.querySelector('.play_again');
const roll_dice = document.querySelector('.btn-roll');
const hold_dice = document.querySelector('.btn-hold');

const player1 = document.querySelector('.left');
const player2 = document.querySelector('.right');

const dice = document.querySelector('.dice');

player1.classList.add('display');

let active_player  = 1;

let current = 0;
let score = 0;
let result = false;

roll_dice.addEventListener('click',function()
{
    if(result==false)
    {
        dice.src = 'rolling_dice.gif';
        let ran_num = Math.trunc(Math.random()*6)+1;
        console.log(ran_num);
        dice.src = `dice-${ran_num}.png`;
        if(ran_num!=1)
        {
            current += ran_num;
            document.getElementById(`current-${active_player}`).textContent = current;
        }
        else
        {
            current = 0;
            document.getElementById(`current-${active_player}`).textContent = current;
            active_player = active_player ===1?2:1;
            player1.classList.toggle('display');
            player2.classList.toggle('display');
        }
    }
});

hold_dice.addEventListener('click',function()
{
    if(result==false)
    {
        score = parseInt(document.getElementById(`score${active_player}`).textContent);
        score = score + current;
        document.getElementById(`score${active_player}`).textContent = score.toString();
        console.log(score);
        if(score>=100)
        {
            result=true;
            current = 0;
            dice.src = 'winner.gif';
            document.getElementById(`current-${active_player}`).textContent = current;
            document.getElementById(`winner${active_player}`).classList.add('winner');
            
        }
        else
        {
        current = 0;
        document.getElementById(`current-${active_player}`).textContent = current;
        active_player = active_player ===1?2:1;
        player1.classList.toggle('display');
        player2.classList.toggle('display');
        }
    }
});

play_again.addEventListener('click',function()
{
    result = false;
    current=0;
    score=0;
    document.getElementById(`winner${active_player}`).classList.remove('winner');
    active_player = 1;
    dice.src = 'start_the_game.gif';
    player1.classList.add('display');
    player2.classList.remove('display');
    document.getElementById(`score1`).textContent = 0;
    document.getElementById(`score2`).textContent = 0;
    document.querySelector('.current_score_text').textContent = 0;
});




