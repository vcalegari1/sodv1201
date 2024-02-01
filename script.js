
    var fullName = "VINICIUS ESPLUGUES SANCHES CALEGARI";
    var h1Element = document.createElement("h1");

    // Set the innerHTML of the h1 element to the full name variable
    h1Element.innerHTML = fullName;

    // Apply color and align styles to the h1 element 
    h1Element.style.color = "#A9A9A9"; 
    h1Element.style.textAlign = "center";

    // Append the h1 element to the document's body
    document.body.appendChild(h1Element);

    // input elements
    var input1 = document.createElement("input");
    input1.type = "text"; 
    input1.placeholder = "Enter the first number";

    var input2 = document.createElement("input");
    input2.type = "text"; 
    input2.placeholder = "Enter the second";

    // apply some styles to input elements
    input1.style.margin = "10px";
    input1.style.padding = "8px";
    input1.style.fontSize = "16px";
    input1.style.marginLeft = "650px"

    input2.style.margin = "10px";
    input2.style.padding = "8px";
    input2.style.fontSize = "16px";

    // calculate button 
    var button = document.createElement("button");
    button.innerHTML = "Calculate";

    // apply some styles to the button using JavaScript
    button.style.margin = "10px";
    button.style.padding = "8px";
    button.style.fontSize = "16px";

    // result element to display the sum
    var sumResult = document.createElement("p");

    // apply some styles to the result paragraph using JavaScript
    sumResult.style.fontSize = "18px";
    sumResult.style.color = "green";
    sumResult.style.marginLeft = "650px"

    // error message
    var errorMessage = document.createElement("p");

    // apply some styles to the error message paragraph using JavaScript
    errorMessage.style.color = "red";
    errorMessage.style.marginLeft = "650px"

    // arrow function for input validation
    const validateInput = () => {
        try {
            // try to convert input values to numbers
            const num1 = parseFloat(input1.value);
            const num2 = parseFloat(input2.value);

            // if num1 or num2 are not numbers, throw the error
            if (isNaN(num1) || isNaN(num2)) {
                throw new Error("Error! Please enter numbers only.");
            }

            // reset borders
            input1.style.border = "";
            input2.style.border = "";

            // clear error message
            errorMessage.innerHTML = "";

            // Calculate and display the sum
            const sum = num1 + num2;
            sumResult.innerHTML = "Sum result: " + sum;

        } catch (error) {
            // display error message, set red border on input boxes, and clear sum result
            errorMessage.innerHTML = error.message;
            input1.style.border = "3px solid red";
            input2.style.border = "3px solid red";
            sumResult.innerHTML = "";
            console.error(error.message);
        }
    };

    // attach the validateInput function to the button click event
    button.addEventListener("click", validateInput);

    // append input elementst to the document
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(button);
    document.body.appendChild(errorMessage);
    document.body.appendChild(sumResult);