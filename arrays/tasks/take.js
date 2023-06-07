const {addElement} = require('../../common-functions');
const {isNotArray, isNotNumber, isNegativeNumber} = require('../../error-checks');

function takeElements(initialArray, amount = 1) {
    isNotArray(initialArray);
    isNotNumber(amount);
    isNegativeNumber(amount);

    const newArray = [];

    if (amount > initialArray.length) {
        for (let i = 0; i < initialArray.length; i++) {
            addElement(newArray, initialArray[i]);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            addElement(newArray, initialArray[i]);
        }
    }

    return newArray;
}

module.exports = takeElements;