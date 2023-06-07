const {addElement} = require('../../common-functions');
const {isNotArray, isNotNumber, isNegativeNumber} = require('../../error-checks');

function dropElements(initialArray, amount = 1) {
    isNotArray(initialArray);
    isNotNumber(amount);
    isNegativeNumber(amount);

    const newArray = [];

    if (amount >= initialArray.length) {
        return newArray;
    }

    for (let i = amount; i < initialArray.length; i++) {
        addElement(newArray, initialArray[i]);
    }
    return newArray;
}

module.exports = dropElements;