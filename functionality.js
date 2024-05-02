//globals
let digits=[];
let currentNumber = '';
let numPosi = 0;

//transfers id name to function useButton
function executeButtons(){
    const button = document.querySelectorAll(".button");

    button.forEach(button => {
        button.addEventListener("click", function(){
            const itemID = this.id;
            useButton(itemID);
        })
    })
}
//math executed
function useButton(ID){
    
    switch(ID){
        case "zero":
            currentNumber +='0';
            break;
        case "one":
            currentNumber += '1';
            break;
        case "two":
            currentNumber += '2';
            break;
        case "three":
            currentNumber += '3';
            break;
        case "four":
            currentNumber += '4';
            break;
        case "five":
            currentNumber += '5';
            break;
        case "six":
            currentNumber += '6';
            break;
        case "seven":
            currentNumber += '7';
            break;
        case "eight":
            currentNumber += '8';
            break;
        case "nine":
            currentNumber += '9';
            break;
        case "add":
            digits[numPosi] = parseInt(currentNumber);
            numPosi++;
            digits[numPosi] = "+";
            numPosi++;
            currentNumber = '';
            break;
        case "subtract":
            digits[numPosi] = parseInt(currentNumber);
            numPosi++;
            digits[numPosi] = "-";
            numPosi++;
            currentNumber = '';
            break;
        case "result":
            let currentNum = 0;
            digits[numPosi] = parseInt(currentNumber);
    
            for(let i = 0; i < digits.length; i++){
                currentNum = digits[i];

                if(digits[i] == '+'){
                    currentNum += digits[i];
                }
                else if(digits[i] == '-'){
                    currentNum -= digits[i];
                }
            }
            console.log(currentNum);
            break;
    }
} 
executeButtons();