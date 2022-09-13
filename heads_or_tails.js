
let coin = document.querySelectorAll('g');
let coins=[];
for (let con of coin) {
    coins.push(con);

}
let count=0;

function spin() {
    if(count == coins.length){
        count = 0;
    }
    coins[count].style.display = 'inline-block'
    count++
}
count =0;
function spoon(){
    if(count == coins.length){
        count = 0;
    }
    coins[count].style.display = 'none'
    count++
}

function start(){
     setTimeout(setInterval(spoon, 3.5), 29);
     setInterval(spin, 29);

}

function stop(){}