// JavaScript for the calculator

// Function to append characters to the display
function appendCharacter(char) {
    document.getElementById("display").value += char;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to perform the calculation and update the display
function calculateResult() {
    try {
        // Evaluate the expression and display the result
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        // Handle any errors during evaluation
        document.getElementById("display").value = "Error";
    }
}

// Function to handle backspace (remove the last entered character)
function backspace() {
    var currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}
