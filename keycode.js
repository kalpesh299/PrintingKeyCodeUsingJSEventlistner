const btn=document.getElementById("btn");
const code=document.getElementById("code");
const text=document.getElementById("text");


document.addEventListener("keypress",(event)=>{
   
  text.innerText=`You Pressed `
const previousletter=document.querySelector(".letter");
// console.log(previousletter);
if(previousletter){
    previousletter.remove();
   
}

const letter=document.createElement("p");
letter.classList.add("letter");

letter.innerText=event.key;
btn.appendChild(letter);

 
code.innerText=event.keyCode;
  
})