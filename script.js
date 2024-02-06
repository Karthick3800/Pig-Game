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



score0.textContent=0;
score1.textContent=0;
die.classList.add('hidden');
let cur=0;
let activep=0;
let res=0;let res2=0
let playing=true;
let pla=0;
const inti=function()
{
    score0.textContent=0;
    score1.textContent=0;
    cur1.textContent=0;
    cur0.textContent=0;
    player0el.classList.remove('player--winner');
    player0el.classList.add('player--active')
    player1el.classList.remove('player--winner');
    player1el.classList.add('player--active');
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
    if(activep===0)
    {
        res+=cur
        if(res>=20)
        {
            inti();
        }
        document.getElementById(`score--${activep}`).textContent=res;
    }
    else{
        res2+=cur
        if(res2>=20)
        {
            inti();
        }
        document.getElementById(`score--${activep}`).textContent=res2;
    }
    document.getElementById(`current--${activep}`).textContent = 0;
    cur=0;
    activep = activep === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
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
    if(res>=20  || res2>=20)
    {
        if(res>=20)
        {
            pla=0;
        }
        else{
            pla=1;
        }
        document.querySelector(`.player--${pla}`).classList.add('player--winner');
        document.querySelector(`.player--${pla}`).classList.remove('player--active');
        playing=false;
        die.classList.remove('hidden');
        inti();
    }
    else{
    switchplayer();
    }
}
else{
    reset();
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
btnnew.addEventListener('click',reset);
// console.log(ran);