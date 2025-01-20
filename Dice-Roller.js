const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function randomDice(num) {
    const dice = Math.floor(Math.random() * num + 1);
    return;

};

rl.question("Number of faces on dice: ", (answerSize) => {
    if (answerSize > 0) {
        let size = answerSize;
        rl.question("Number of dice: ", (answerQuant) => {
            let quantity = answerQuant;
            rl.question("Great, lets roll!", () => {
                let dice = [];
                for (i = 0; i < quantity; i++) {
                    dice.push(Math.floor(Math.random() * size + 1));
                }
                const sum = dice.reduce(function (a, b) { return a + b; }, 0);
                console.log("you rolled ", dice, " for a total of: ", (parseInt(sum)));
                rl.close();

            })
        })


    } else {
        console.log("the result is zero or less... are you trying to break me?");
        rl.close();
    }
});