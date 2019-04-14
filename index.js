window.onload = function () {
    ButtonBet.addEventListener('click', function () {
        buttonClicked();
    });
}

function buttonClicked() {
    var balanceString = document.getElementById("balance").innerHTML;
    var balanceInt = parseInt(balanceString);
    balanceInt = GetNewBalance(balanceInt);
    (document.getElementById("balance")).innerText = balanceInt;
};

function GetNewBalance(balance) {
    var dice = [];
    RollDice(dice);
    var dice1txt = "images/dice-" + dice[0] + ".jpg";
    var dice2txt = "images/dice-" + dice[1] + ".jpg";
    document.getElementById("image1").src = dice1txt;
    document.getElementById("image2").src = dice2txt;
    if (dice[0] == dice[1] || dice[0] + dice[1] == 7 || dice[0] + dice[1] == 11) {
        balance++;
        (document.getElementById("status")).innerText = "You Win!";
    }
    else {
        balance--;
        (document.getElementById("status")).innerText = "You Lost!";
    }

    if (balance === 0) {
        (document.getElementById("status")).innerText = "GAME OVER!";
        (document.getElementById("ButtonBet")).style.visibility = 'hidden';
    }

    var turnCount = (document.getElementById("turnCount")).innerText;
    var turnCountInt = parseInt(turnCount);
    turnCountInt++;
    (document.getElementById("turnCount")).innerText = turnCountInt;

    return balance;
}

function RollDice(dice) {
    dice[0] = Math.floor((Math.random() * 6) + 1);
    dice[1] = Math.floor((Math.random() * 6) + 1);
}




