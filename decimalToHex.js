// Decimal to Hexadecimal converter

function decimalToHex(userInput, sourceBase) {

    if (sourceBase >= 17) {
        return 'Sorry, this program can only go up to base16.';
    }

    let result = "";
    let quotient = userInput;

    while (quotient !== 0) {

        const remainder = quotient % sourceBase;
        quotient = Math.trunc(quotient / sourceBase);

        if (remainder < 10) {
            result = remainder + result;
        } else {
            if (remainder === 10) {
                result = "A" + result;
            }
            if (remainder === 11) {
                result = "B" + result;
            }
            if (remainder === 12) {
                result = "C" + result;
            }
            if (remainder === 13) {
                result = "D" + result;
            }
            if (remainder === 14) {
                result = "E" + result;
            }
            if (remainder === 15) {
                result = "F" + result;
            }
        }
    }
    return result;
}

//console.log(decimalToHex(922337203685477, 16)); // up to base 17




// Hexadecimal to Decimal converter
function hexToDecimal(input) {

    if (input >= 17) {
        return 'Sorry, this program can only go up to base16.';
    }

    const hex = input.toLowerCase();

    let result = 0;
    let exponent;

    for (let i = 0; i < hex.length; i++) {
        exponent = "0123456789abcdef".indexOf(hex[i]);
        result = result * 16 + exponent;
    }
    return result;
}

//console.log(hexToDecimal('ABC3942A'));  // Expected: 2881721386
console.log(hexToDecimal('32423F'));  // Expected: 3293759

