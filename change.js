(function () {
var amount = 47;//dollars in machine
var arrayDollars;
changeMachine();
    console.log(arrayDollars);
//method to show number of 1,5,10,20 machine should return smallest bills possible
//[twenties, tens, fives, ones]

function changeMachine() {
  var loopStep, rem20, temp20, rem10, temp10, rem5, temp5, rem1, temp1;
  var amountChange = amount;

    temp20 =(Math.floor(amount/20));
    amountChange = amountChange - (temp20*20);
    console.log(temp20);
    console.log("Balance: " - amountChange);
    temp10 =(Math.floor(amountChange/10));
    amountChange = amountChange - (temp10*10);
    console.log(temp10);
    console.log("Balance: " + amountChange);
    temp5 =(Math.floor(amountChange/5));
    console.log(temp5);
    amountChange = amountChange - (temp5*5);
    console.log("Balance: " + amountChange);
    temp1 =amountChange;
    arrayDollars=[temp20, temp10, temp5, temp1];
}


})()
