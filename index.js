const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a Number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid Number!");
    }else if(guess < minNum || guess > maxNum){
        window.alert("Enter a Number from the valid Range!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low, Try Again.");
        }
        else if(guess > answer){
            window.alert("Too High, Try Again.");
        }
        else{
            window.alert(`OMG You got it. The Correct Answer was ${answer}. It took you ${attempts} attempts to guess the number.`);
            running = false;
        }
    }
    
    
}