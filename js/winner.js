
    if(rollOne > rollTwo)
        document.querySelector("h1").innerHTML = " Player 1 wins";
    else if(rollOne < rollTwo)
        document.querySelector("h1").innerHTML = "Player 2 wins ";
else{
    document.querySelector("h1").innerHTML = "Draw ";
}