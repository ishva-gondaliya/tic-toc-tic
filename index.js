let boxs = document.querySelectorAll(".Box");
let resetbut = document.querySelector("#reset");
let newbutten = document.querySelector("#new");
let newconten = document.querySelector(".msg");
let msg = document.querySelector("#msgs");
let turnO = true;
const winpattern= [[0,1,2],[0,3,6],[0,4,7],[1,4,7],[2,2,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame=()=>{
    turnO=true;
    enaBalbox();
    newconten.classList.add("hide");

}
boxs.forEach((Box)=>{
    Box.addEventListener("click",() => {
        if (turnO){
            Box.innerText="O";
            turnO=false;
        }
        else {
            Box.innerText="X";
            turnO=true;
        }
        Box.disabald = true;
        checkWinner();
    });
}); 
const enaBalbox = ()=>{
    for (let box of boxs){
        box.disabled = false;
        box.innerText="";
    }
}
const disaBalbox = ()=>{
    for (let box of boxs){
        box.disabled = true;
    }
}
const showWinner = (ish) => {
    msg.innerText=`congratulation , Winner is ${ish}`;
    newconten.classList.remove("hide");
    disaBalbox()

}
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "")
        {
            if (pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
newbutten.addEventListener("click",resetGame);
resetbut.addEventListener("click",resetGame);