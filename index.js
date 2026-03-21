let headcount = document.getElementById("headcount"),
tailcount = document.getElementById("tailcount"),
roundCoin = document.getElementById("roundCoin"),
flipSound = document.getElementById("flipSound");
let hc=0, tc=0;

function flipCoin() {
    let result = Math.floor(Math.random()*2);
    flipSound.play();
    console.log(result);
    if(result==1){
        roundCoin.style.transform = "rotateX(0deg)";
        hc++;
    } else {
        roundCoin.style.transform = "rotateX(180deg)";
        tc++;
    }
    roundCoin.classList.add("rotateCoin");
    console.log(`hc=${hc} tc=${tc}`);
    setTimeout(()=>{
        roundCoin.classList.remove("rotateCoin");
        result==1 ? headcount.innerText = hc : tailcount.innerText = tc;
    },1000);
}