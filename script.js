'use strict';
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const die=document.querySelector('.dice');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold') ;
const btnnew=document.querySelector('.btn--new');
const cur1=document.getElementById('current--1');
const cur0=document.getElementById('current--0');
const player0el=document.querySelector('.player--0');
const player1el=document.querySelector('.player--1');
// const score =[0,0];
// initial condition to set all score to zero

//changes

score0.textContent=0;
score1.textContent=0;

let cur;
let activep;
let res;
let res2;
let playing;
let pla;
const inti=function()
{
    cur=0;
    activep=0;
    res=0;
    res2=0
    playing=true;
    pla=0;
    score0.textContent=0;
    score1.textContent=0;
    cur1.textContent=0;
    cur0.textContent=0;
    // playing=true;
    die.classList.add('hidden');
    player0el.classList.remove('player--winner');
    player0el.classList.add('player--active')
    player1el.classList.remove('player--winner');
    player1el.classList.remove('player--active');
}
inti();
btnroll.addEventListener('click',function()
{
    if(playing){
    die.classList.remove('hidden');
    const ran= Math.trunc(Math.random()*6)+1;
    die.src=`dice-${ran}.png`;
    if(ran!==1)
    {
        cur+=ran;
        // cur0.textContent=cur;
        document.getElementById(`current--${activep}`).textContent = cur;
    }
    else
    {
        switchplayer();
    }
    }
})
const switchplayer =function()
{

    document.getElementById(`current--${activep}`).textContent = 0;
    // currentScore = 0;
    if(activep===0)
    {
        res+=cur
        if(res>=100)
        {
            inti();
        }
        document.getElementById(`score--${activep}`).textContent=res;
    }
    else{
        res2+=cur
        if(res2>=100)
        {
            inti();
        }
        document.getElementById(`score--${activep}`).textContent=res2;
    }
    cur=0;
    activep = activep === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
    // if(activep===0)
    // {
    //     res+=cur
    //     if(res>=100)
    //     {
    //         inti();
    //     }
    //     document.getElementById(`score--${activep}`).textContent=res;
    // }
    // else{
    //     res2+=cur
    //     if(res2>=100)
    //     {
    //         inti();
    //     }
    //     document.getElementById(`score--${activep}`).textContent=res2;
    // }
    // document.getElementById(`current--${activep}`).textContent = 0;
    // cur=0;
    // activep = activep === 0 ? 1 : 0;
    // player0el.classList.toggle('player--active');
    // player1el.classList.toggle('player--active');
}

btnhold.addEventListener('click',function()
{
    if(playing)
    {
    console.log('hold button')
    if(activep===0)
    {
        res+=cur
        document.getElementById(`score--${activep}`).textContent=res;
        cur=0;
    }
    else{
        res2+=cur
        document.getElementById(`score--${activep}`).textContent=res2;
        cur=0;
    }
    if(res>=100 || res2>=100)
    {
        if(res>=100)
        {
            playing=false;
            pla=0;
            die.classList.add('hidden');
            document.querySelector(`.player--${pla}`).classList.add('player--winner');
            document.querySelector(`.player--${pla}`).classList.remove('player--active');


        }
        else{
            pla=1;
            playing=false;
            die.classList.add('hidden');
            document.querySelector(`.player--${pla}`).classList.add('player--winner');
            document.querySelector(`.player--${pla}`).classList.remove('player--active');
        }
        
        
    }
    else{
    switchplayer();
    }

    }
})

const reset=function()
{
     res=0;
    res2=0;

    document.querySelector(`.player--${pla}`).classList.add('player--active');
    document.querySelector(`.player--${pla}`).classList.remove('player--winner');
    document.getElementById(`score--1`).textContent=res2;
    document.getElementById(`score--0`).textContent=res;
    playing=true;

} 
btnnew.addEventListener('click',inti);
// console.log(ran);