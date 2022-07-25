let coin = document.querySelector('.coin');
let tails = document.querySelector('.tails');
let edge = document.querySelector('.edge');
let heads = document.querySelector('.heads');
let tailsHalfHeads = document.querySelector('.tails-half-heads');
let halfHeadsTails = document.querySelector('.half-heads-tails');
let headsHalfTails = document.querySelector('.heads-half-tails');
let halfTailsHeads = document.querySelector('.half-tails-heads');

function start(){
    // tails.classList.remove('vis');
    // tailsHalfHeads.classList.remove('vis');
    // edge.classList.remove('vis');
    // halfHeadsTails.classList.remove('vis');
    // heads.classList.remove('vis');
    // headsHalfTails.classList.remove("vis");
    // halfTailsHeads.classList.remove("vis");

}
function stop(){
    tails.classList.add('vis');
    tailsHalfHeads.classList.add('vis');
    edge.classList.add('vis');
    halfHeadsTails.classList.add('vis');
    heads.classList.add('vis');
    headsHalfTails.classList.add('vis');
    halfTailsHeads.classList.remove("vis");
}
