var color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "pink", "silver", "gold", "beige", "brown", "grey", "black"];
var circles = document.querySelectorAll(".circle");
var picked_color = color[Math.floor(Math.random() * 15)];
var guessColor = document.getElementById("colorName");
guessColor.textContent = picked_color.toUpperCase();

var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var hover = document.getElementById("hover");
var message = document.getElementById("message");
var tryMessage =["Try Again", "Keep Trying", "Never Give Up", "You can do it", "Try Harder"];
var winMessage = ["Good Job, CHAMP!", "You're the best", "That was so easy for you", "Great Work", "You made it", "You guessed it correct!", "You're AWESOME!"]



game();

function game(){
    for (var i = 0; i < circles.length; i++){
        circles[i].style.backgroundColor = color[i];

        circles[i].addEventListener("mouseover", function () {
            hover.play();
        })

        circles[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if(picked_color === clickedColor){
                changeColor(clickedColor);
                correct.play();
                message.textContent = winMessage[Math.floor(Math.random() * winMessage.length)];

            }else {
                this.style.backgroundColor = "#333300";
                wrong.play();
                message.textContent = tryMessage[Math.floor(Math.random() * tryMessage.length)];
            }
        })
    }
}

function changeColor(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

