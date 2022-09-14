
let coin = document.querySelectorAll('svg > g');
let tails = document.querySelector('.tails');
let heads = document.querySelector('.heads');
let started = document.querySelector('.start');
let restarted = document.querySelector('.restart')
let coins=[];
let stoped = true;
for (let con of coin) {
    coins.push(con);
}
let count=0;

function spin() {
    if(!stoped) return;
    if(count == coins.length){
        count = 0;
    }
    coins[count].style.display = 'inline-block'
    count++

}
count =0;
function spoon(){
    if(!stoped) return;
    if(count == coins.length){
        count = 0;
    }
    coins[count].style.display = 'none'
    count++

}


function start(){
    if(!stoped) return;
    setTimeout(setInterval(spoon, 7), 47);
    setInterval(spin, 47);


}
function restart(){
    stoped = true;
}
function stop(){
    stoped = false;
    started.style.display = 'none'
    restarted.style.display = 'inline-block'
    for (let con of coin) {
        con.style.display = 'none'
    }

    if(count%2){
        tails.style.display = 'inline-block'
    }else {
        heads.style.display = 'inline-block'
    }

}