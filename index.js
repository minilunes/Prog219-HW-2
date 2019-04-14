window.onload = function () {
    ButtonBet.addEventListener('click', function () {
        buttonClicked();
    });
}

function buttonClicked() {
    let balanceString = document.getElementById("balance").innerHTML;
    let balanceInt = parseInt(balanceString);
    balanceInt = GetNewBalance(balanceInt);
    (document.getElementById("balance")).innerText = balanceInt;
};

function GetNewBalance(balance) {
    let dice = [];

    RollDice(dice);
    
    let dice1txt = "images/dice-" + dice[0] + ".jpg";
    let dice2txt = "images/dice-" + dice[1] + ".jpg";

    document.getElementById("image1").src = dice1txt;
    document.getElementById("image2").src = dice2txt;

    if (dice[0] == dice[1]) {
        balance++;
        (document.getElementById("status")).innerText = "You Win! You rolled a pair!";
    }
    else if (dice[0] + dice[1] == 7) {
        balance++;
        (document.getElementById("status")).innerText = "You Win! You rolled a 7!";
    }
     else if (dice[0] + dice[1] == 11) {
        balance++;
        (document.getElementById("status")).innerText = "You Win! You rolled an 11!";
    }
    else {
        balance--;
        (document.getElementById("status")).innerText = "You Lost!";
    }

    if (balance == 0) {
        (document.getElementById("status")).innerText = "Game over! Thanks for playing!";
        (document.getElementById("ButtonBet")).style.display = "none";
    }

    let turnCount = (document.getElementById("turnCount")).innerText;
    let turnCountInt = parseInt(turnCount);
    turnCountInt++;
    (document.getElementById("turnCount")).innerText = turnCountInt;

    return balance;
}

function RollDice(dice) {
    dice[0] = Math.floor((Math.random() * 6) + 1);
    dice[1] = Math.floor((Math.random() * 6) + 1);
}




