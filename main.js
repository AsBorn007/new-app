const readline = require('readline');

// Create an instance of readline.Interface to handle input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create your custom input function
function input(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);  // Resolve the promise with the user's input
        });
    });
}

// Use the custom input function
(async function() {
    let userInput = await input("Please enter something: ");
    console.log("You entered:", userInput);
    rl.close();  // Close the readline interface after you're done
})();
