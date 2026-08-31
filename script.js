```javascript
const display = document.getElementById("display");

const popup = document.getElementById("subscriptionPopup");
const closePopup = document.getElementById("closePopup");

const buttons = document.querySelectorAll(".buttons button");

let currentInput = "0";


// Update calculator display
function updateDisplay() {
    display.textContent = currentInput;
}


// Handle calculator buttons
buttons.forEach(button => {

    button.addEventListener("click", function () {

        const value = this.dataset.value;


        // =========================
        // EQUALS
        // =========================

        if (value === "=") {
            popup.style.display = "flex";
            return;
        }


        // =========================
        // CLEAR EVERYTHING
        // =========================

        if (value === "C") {
            currentInput = "0";
            updateDisplay();
            return;
        }


        // =========================
        // CLEAR ENTRY
        // =========================

        if (value === "CE") {

            const parts = currentInput.trim().split(" ");

            if (parts.length > 1) {
                parts.pop();
                parts.pop();

                currentInput = parts.join(" ");

                if (currentInput === "") {
                    currentInput = "0";
                }
            } else {
                currentInput = "0";
            }

            updateDisplay();
            return;
        }


        // =========================
        // DELETE
        // =========================

        if (value === "Delete") {

            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = "0";
            }

            updateDisplay();
            return;
        }


        // =========================
        // PLUS / MINUS
        // =========================

        if (value === "+/-") {

            const parts = currentInput.split(" ");
            const lastPart = parts[parts.length - 1];

            if (lastPart !== "" && !isNaN(lastPart)) {

                if (lastPart.startsWith("-")) {
                    parts[parts.length - 1] = lastPart.substring(1);
                } else {
                    parts[parts.length - 1] = "-" + lastPart;
                }

                currentInput = parts.join(" ");
            }

            updateDisplay();
            return;
        }


        // =========================
        // NUMBERS
        // =========================

        if (!isNaN(value)) {

            if (currentInput === "0") {
                currentInput = value;
            } else {
                currentInput += value;
            }

            updateDisplay();
            return;
        }


        // =========================
        // DECIMAL
        // =========================

        if (value === ".") {

            const parts = currentInput.split(" ");
            const lastPart = parts[parts.length - 1];

            if (!lastPart.includes(".")) {
                currentInput += ".";
            }

            updateDisplay();
            return;
        }


        // =========================
        // OPERATORS
        // =========================

        if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/"
        ) {

            // Don't allow two operators directly after each other
            if (
                currentInput.endsWith(" + ") ||
                currentInput.endsWith(" - ") ||
                currentInput.endsWith(" * ") ||
                currentInput.endsWith(" / ")
            ) {
                return;
            }

            currentInput += " " + value + " ";

            updateDisplay();
        }

    });

});


// =========================
// CLOSE POPUP
// =========================

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});


// Close if clicking the dark background
popup.addEventListener("click", function (event) {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});
```
