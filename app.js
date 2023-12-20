var add = "";

    for(let i=0;i<84;i++){
        add += `<div class="box"> ${r_number()}</div>`
    }
    let i = 30;
const id = setInterval(()=>{
    if(i===0){
        gameover();
        clearInterval(id);
    }
   document.getElementsByClassName("timer")[0].innerHTML = i;

   i--
},1000)

document.getElementsByClassName("num")[0].innerHTML = r_number();

var num = Number(document.getElementsByClassName("num")[0].innerHTML);
// console.log(num);
document.getElementById("game_box").innerHTML = add;

function r_number(){
 var rnum = Math.floor(Math.random()*15);
 return rnum;
}
var element = document.querySelectorAll(".box");
element.forEach(box =>{
    box.addEventListener("click",()=>{
         
         let a = Number(box.innerHTML);
         console.log(typeof a);
         console.log(typeof num);
        if( a === num){
            updatehit();
            ChangeNum();
        }
            
    })
})

function ChangeNum(){
    for(let i=0;i<84;i++){
        document.getElementsByClassName("box")[i].innerHTML = r_number();
    }
    num =  r_number();
    document.getElementsByClassName("num")[0].innerHTML = num;
}
let hit = 0;
function updatehit(){
   
    hit++;
    document.getElementsByClassName("score")[0].innerHTML = hit;
}

function gameover(){
    document.getElementById("game_box").innerHTML = "<p>Game Over</p>";

}