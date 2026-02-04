let num1 = parseInt(prompt("Enter the first number"));
num2 = parseInt(prompt("Enter the second number"));


        let opr = prompt("Enter an operator ");

        let result;

      
        switch(opr) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator!";
        }

  
        console.log("Result:", result);
