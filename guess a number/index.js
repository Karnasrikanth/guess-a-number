let random = Math.ceil(Math.random()*100);
let number = document.getElementById("number");
let result = document.getElementById("result");
let chance = document.getElementById("chances");
console.log(random)
let chances = 0;
function onGuessBtn(){
    if(number.value==random){
        result.textContent = "Congrats! Your Guess is Correct."
        result.style.color="green";
        result.style.fontSize = "24px";
        chances++;
        chance.textContent = "Number of Chances: "+chances
    }else if(number.value<random){
        result.textContent = "Oops! Your Guess is Too Low."
        result.style.color="red";
        result.style.fontSize = "24px";
        chances++;
    }else{
        result.textContent = "Oops! Your Guess is Too High."
        result.style.color="red";
        result.style.fontSize = "24px";
        chances++
    }
}