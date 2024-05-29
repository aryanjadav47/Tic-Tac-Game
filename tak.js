let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let news=document.querySelector("#new");
let msg=document.querySelector(".msg");
let msgs=document.querySelector("#msgs");


let turnO = true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;

        let isWinner=checkwin();
        if (count === 9 && !isWinner) {
            gameDraw();
          }
    });
});

const checkwin=() => {
    for(let patten of win){
        let po=boxes[patten[0]].innerText;
        let po1=boxes[patten[1]].innerText;
        let po2=boxes[patten[2]].innerText;

        if(po!="" && po1!="" && po2!=""){
            if(po === po1 && po1 === po2){
                console.log("winner",po);
                showwinner(po);
            }
        }
    }
};

const disabledbtn= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledbtn= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner= (winner) =>{
    msgs.innerText=`congratulation, winner is ${winner}`;
    msg.classList.remove("hid");
    disabledbtn();
};

const resetgame = ()=>{
    turnO=true;
    enabledbtn();
    msg.classList.add("hid");
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgs.classList.remove("hid");
    disabledbtn();
  };

news.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);