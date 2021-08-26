var rollOne = Math.random();
rollOne *= 6;
rollOne += 1;
rollOne = Math.floor(rollOne);
if(rollOne == 1){
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_1.png");
}
else if(rollOne == 2)
    {
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_2.png");
}
else if(rollOne == 3)
    {
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_3.png");
}
else if(rollOne == 4)
    {
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_4.png");
}
else if(rollOne == 5)
    {
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_5.png");
}
else if(rollOne == 6)
    {
    const diceO = document.getElementById("dice1");
    diceO.setAttribute("src", "img/Dice_6.png");
}