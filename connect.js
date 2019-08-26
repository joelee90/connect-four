console.log("check");
var pointer = $(".pointer");

(function game() {
    var diagonalWin = [
        [2, 9, 16, 23],
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],
        [12, 19, 26, 33],
        [19, 26, 33, 40],
        [18, 25, 32, 39],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [9, 14, 19, 24],
        [5, 10, 15, 20],
        [10, 15, 20, 25],
        [15, 20, 25, 30],
        [11, 16, 21, 26],
        [16, 21, 26, 31],
        [21, 26, 31, 36],
        [17, 22, 27, 32],
        [22, 27, 32, 37],
        [23, 28, 33, 38]
    ];

    var currentPlayer = "player1";
    var column = $(".column");
    var slot = $(".slot");

    $("body").on("mousemove", function(e) {
        pointer.css({
            left: e.pageX - 35 + "px",
            top: e.pageY - 90 + "px"
        });

        if (currentPlayer == "player1") {
            pointer.css("background-color", "#90ee90");
        } else pointer.css("background-color", "#66cdaa");
    });

    column.on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i == -1) {
            return;
        }

        function switchPlayer() {
            if (currentPlayer == "player1") {
                currentPlayer = "player2";
            } else {
                currentPlayer = "player1";
            }
        }

        function checkForVictory(slot) {
            var count = 0;
            for (var i = 0; i < slot.length; i++) {
                if (slot.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count == 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        function bigLoop() {
            var count = 0;
            for (var i = 0; i < diagonalWin.length; i++) {
                count = 0;
                for (var j = 0; j < diagonalWin[i].length; j++) {
                    if (slot.eq(diagonalWin[i][j]).hasClass(currentPlayer)) {
                        count++;
                        console.log(count);
                    }
                    if (count == 4) {
                        return true;
                    }
                }
            }
        }

        var playagainscreen = $(".playerwin");

        function restart() {
            playagainscreen.removeClass("invisible2");
        }

        playagainbtn.click(function() {
            window.location.reload();
        });

        function blink2() {
            $("." + currentPlayer)
                .fadeIn(300)
                .fadeOut(300)
                .fadeIn(300)
                .fadeOut(300)
                .fadeIn();
        }

        if (checkForVictory(slotsInColumn)) {
            blink2();
            setTimeout(function() {
                restart();
                winner.text(currentPlayer + " WIN!!");
            }, 1600);
            console.log(currentPlayer + "Win");
        } else if (checkForVictory($(".row" + i))) {
            blink2();
            setTimeout(function() {
                restart();
                winner.text(currentPlayer + " WIN!!");
            }, 1600);
            console.log(currentPlayer + "Win-row");
        } else if (bigLoop(diagonalWin)) {
            // blink2();
            setTimeout(function() {
                restart();
                winner.text(currentPlayer + " WIN!!");
            }, 1600);
            console.log(currentPlayer + "win - Diagonal");
        } else switchPlayer();
    });
})();

// welcome
var opening = $(".opening");
var play = $(".play");

(function welcome() {
    opening.removeClass("invisible");
})();

play.click(function() {
    opening.hide();
});

// playagain
var playagainbtn = $(".playagain");

var winner = $(".textforwinner");
(function blink() {
    $(".textforwinner")
        .fadeOut(300)
        .fadeIn(300, blink);
})();

var playblink = $(".play");
(function blink() {
    playblink.fadeOut(800).fadeIn(800, blink);
})();
