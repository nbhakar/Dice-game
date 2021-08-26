var rollTwo = Math.random();
rollTwo *= 6;
rollTwo += 1;
rollTwo = Math.floor(rollTwo);
if(rollTwo == 1){
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_1.png");
}
else if(rollTwo == 2)
    {
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_2.png");
}
else if(rollTwo == 3)
    {
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_3.png");
}
else if(rollTwo == 4)
    {
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_4.png");
}
else if(rollTwo == 5)
    {
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_5.png");
}
else if(rollTwo == 6)
    {
    const diceT = document.getElementById("dice2");
    diceT.setAttribute("src", "img/Dice_6.png");
}