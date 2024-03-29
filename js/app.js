var player1 = 'X';
var player2 = 'O';

var currentTurn = 1;
var movesMade = 0;

var winnerContainer = $('.winner');
var reset = $('.reset');

var sqr = $('.square');


sqr.on('click', (e) => {
    movesMade++;
    //this is keeping track of whose turn it is
    //if it's odd then it's player one's turn else player two's
    if (currentTurn % 2 === 1) {
        event.target.innerHTML = player1;
        event.target.style.color = "red";
        currentTurn++;
    } else {
        event.target.innerHTML = player2;
        event.target.style.color = "green";
        currentTurn--;
    }

    if (checkForWinner()) {
        theWinner = currentTurn == 1 ? player2 : player1;
        declareWinner(theWinner);
    }
});

reset.on('click', (e) => {
    var moves = Array.prototype.slice.call($(".square"));
    moves.map((m) => {
        m.innerHTML = "";
    });
    winnerContainer.html('');
    winnerContainer.css('display', "none");
    currentTurn = 1;
});

function declareWinner(winner) {
    if (winner == true) {
    winnerContainer.css('display', "block");
    reset.css('display', 'block');
    winner = winner === player1 ? 'Alabson' : 'Usman';
    winnerContainer.html(winner + " Wins!");
    } else {
        winnerContainer.css('display', "block");
        reset.css('display', 'block');
        winner = winner === player1 ? 'Alabson' : 'Usman';
        winnerContainer.html(winner + " Wins!");
    }
}

function checkForWinner() {
    //need at least four moves to check for a winner
    if (movesMade > 4) {
        var sqr = $('.square');
        //research why we need call here!
        var moves = Array.prototype.slice.call($(".square"));
        var results = moves.map(function(square) { return square.innerHTML; });
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
        });
    }
}