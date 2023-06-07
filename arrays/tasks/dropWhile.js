const {addElement} = require("../../common-functions");
const {isNotArray, isNotFunction, checkFunctionReturn, returnsBoolean} = require("../../error-checks");

function dropWhile(initialArray, predicate) {
    isNotArray(initialArray);
    isNotFunction(predicate);
    for (let i = 0; i < initialArray.length; i++) {
        checkFunctionReturn(predicate, initialArray[i]);
        returnsBoolean(predicate, initialArray[i]);
    }

    const newArray = [];
    let index = 0;

    while (predicate(initialArray[index]) && index < initialArray.length) {
        index++;
    }

    for (let i = index; i < initialArray.length; i++) {
        addElement(newArray, initialArray[i]);
    }

    return newArray;
}

module.exports = dropWhile;