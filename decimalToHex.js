// Decimal to Hexadecimal converter

function decimalToHex(userInput) {

    let result = "";
    let quotient = userInput;

    while (quotient !== 0) {

        const remainder = quotient % 16;
        quotient = Math.trunc(quotient / 16);

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
};

//console.log(decimalToHex(922337203685477)); // Expected: 346DC5D638865
//console.log(decimalToHex(31293)); // Expected: 7A3D
//console.log(decimalToHex(192028930)); // Expected: B722102
//console.log(decimalToHex(32321293)); // Expected: 1ED2F0D
//console.log(decimalToHex(113123213293));  // Expected: 1A56AB3FED

// Hexadecimal to Decimal converter

function hexToDecimal(input) {

    const hex = input.toLowerCase();

    let result = 0;
    let value;

    for (let i = 0; i < hex.length; i++) {
        value = "0123456789abcdef".indexOf(hex.charAt(i));
        result = result * 16 + value;   // Multiply each digit of the hex number with its corresponding power of 16 and sum.
    }
    return result;
}

//console.log(hexToDecimal('ABC3942A'));  // Expected: 2881721386
//console.log(hexToDecimal('32423F'));  // Expected: 3293759
//console.log(hexToDecimal('EDFC12312FD')); // Expected: 16354180797181
//console.log(hexToDecimal('FF')); // Expected: 255
//console.log(hexToDecimal('1230982ABC')); // Expected: 78124690108
//console.log(hexToDecimal('00AA1')); // Expected: 2721
//console.log(hexToDecimal("21A")); // Expected: 538
