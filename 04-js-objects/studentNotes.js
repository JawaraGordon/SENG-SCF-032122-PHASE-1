// this is where you can take notes without risking merge conflicts when you pull down new code from Github (the remote is called origin => i.e., where your online repo for this directory is located)

// also feel free to use this as a sandbox!

// Running the file ```node notes.js``` (without the backticks) will allow you to explore/play around with code. Make sure you have cd'ed into the inner folder before you do this.

console.log("hi there!!")


const pokemon = {name: "Pikachu", img: "https://imageofPikachu.com", likes: 0};

function increaseValue(obj,key){
    return ++obj[key]
};

increaseValue(pokemon,"likes")


/* --create a new complex object that fills in data to represent you, and practice accessing various properties manually. Then write functions to try to access those same values: */

// for...in loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in