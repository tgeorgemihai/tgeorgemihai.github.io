let score = 0; // The score variable
let scoreElement = document.getElementById("score-value"); // The element that displays the score
let boxesNumber = document.querySelectorAll(".box").length; // The number of boxes
let lastSelectedBox; // Variable to store index of the last selected box 


moveTheCat(); // Call the function to move the cat to a random box when the page loads

function moveTheCat() {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.classList.remove("has-cat");
    });

    //Create an array with all elements, but remove the lastSelectedBox
    let availableBoxes = []
    for (let i = 0; i < boxesNumber; i++) {
        if (i !== lastSelectedBox) {
            availableBoxes.push(i);
        }
    }
    console.log("Available boxes: " + availableBoxes);

    lastSelectedBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)]; // Select a random box from the available boxes
    console.log("Cat moved to box: " + lastSelectedBox);

    boxes[lastSelectedBox].classList.add("has-cat");

}

// Function to handle button click
function onButtonClick() {
    alert("Button clicked! Your score is: " + score);
}


// Click event on boxes, event listener for each box
const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (boxes[i].classList.contains("has-cat")) {
            moveTheCat();
            score = score + 1;
            scoreElement.textContent = score;
        }
    });
}

// Click event on button, event listener
const button = document.getElementById("button");
button.addEventListener("click", onButtonClick);