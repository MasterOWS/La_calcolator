```javascript
const display = document.getElementById("display");

const popup = document.getElementById("upgradePopup");
const closePopup = document.getElementById("closePopup");

const buttons = document.querySelectorAll(".buttons button");

let currentInput = "0";


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Equals
        if (value === "=") {
            popup.style.display = "flex";
            return;
        }

        // Clear Entry
        if (value === "CE") {
            currentInput = "0";
            display.textContent = currentInput;
            return;
        }

        // Clear Everything
        if (value === "C") {
            currentInput = "0";
            display.textContent = currentInput;
            return;
        }

        // Delete
        if (value === "Delete") {

            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = "0";
            }

            display.textContent = currentInput;

            return;
        }

        // Plus / Minus
        if (value === "+/-") {

            if (currentInput !== "0") {

                if (currentInput.startsWith("-")) {
                    currentInput = currentInput.substring(1);
                } else {
                    currentInput = "-" + currentInput;
                }

            }

            display.textContent = currentInput;

            return;
        }

        // Numbers and decimal
        if (
            !isNaN(value) ||
            value === "."
        ) {

            if (currentInput === "0" && value !== ".") {
                currentInput = value;
            } else {
                currentInput += value;
            }

            display.textContent = currentInput;

            return;
        }

        // Operators
        if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/"
        ) {

            currentInput += " " + value + " ";

            display.textContent = currentInput;

            return;
        }

    });

});


/* Close popup */

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});


/* Close popup when clicking outside it */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});
```
