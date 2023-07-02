let coinFlip = Math.round(Math.random());
let result
    if (coinFlip < .5) {
    result = "heads"
    } if (coinFlip > .5) {
    result = "tails"
    }
let choice
do {
    choice = prompt(`Welcome to "COIN FLIP MASTERY PRO" \n Please select "heads" or "tails"`);
}
while (choice != 'heads' && choice != 'tails');
    if (choice == "heads") {
        if (result == "heads") {
            document.write(`The flip was heads and you chose heads...you win!`);
            } else if (result == "tails") {
            document.write(`The flip was tails and you chose heads...you lose!`);
            }
    } else if (choice == "tails") {
        if (result == "heads") {
            document.write(`The flip was heads and you chose tails...you lose!`);
            } else if (result == "tails") {
            document.write(`The flip was tails and you chose tails...you win!`);
            }
    }
