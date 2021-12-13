let valid_input = false;

while (!valid_input) {
    input = window.prompt("What would you like the highest number to be?");

    numberCeiling = Number(input);

    if(numberCeiling != NaN && numberCeiling > 0) {
        valid_input = true;
        break;
    }
    else {
        prompt("That is not a valid input!");
    }
}
let num=Math.floor(Math.random() * numberCeiling) + 1;

console.log(num);

let guessArray = [];

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

if(isNaN(guess)) {
    message.innerHTML= "That is not a number!";
}
else if(guess > numberCeiling) {
    message.innerHTML= "That number is not in range, try again.";
}
else if(guess < 1) {
    message.innerHTML= "That number is not in range, try again.";
}
else if(guess == num){
    message.innerHTML= "You got it!";
    console.log("You got it! It took you " + (guessArray.length + 1) + " tries!");
    message.innerHTML= "You got it! It took you " + (guessArray.length + 1) + " tries! You guessed: " + guessArray;{
    } + ".";
    guessArray.forEach(function(item){
        console.log(item)
    })
}
else if(guessArray.indexOf(guess) >= 0) {
    message.innerHTML = "You guessed that already!";

 }else {
      guessArray.push(guess)
    if (guess > num) {
        message.innerHTML= "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}
}
