var readlineSync = require('readline-sync');
console.log('"Guess the number between 0 and 20"');

var randomNumber = Math.floor(Math.random() * 20);
var turn = 0;

while (true) {
    turn++;
    var x =  readlineSync.question("GUESS IT: ");
    if (x == randomNumber) {
        console.log("you won!!!" + randomNumber);
        console.log(turn);
        break;
   } else if (x < randomNumber) {
       console.log("your guess is too low");
   } else if (x > randomNumber) {
       console.log("your guess is too high");
   }
}
