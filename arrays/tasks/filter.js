const {addElement, createObjectValuesArray} = require('../../common-functions');
const {isObject, isArray} = require('../../types-checking');
const {isNotFunction, checkFunctionReturn, returnsBoolean} = require('../../error-checks');

function filterCollection(collection, predicate) {
    if (!(isObject(collection) || isArray(collection))) {
        throw new Error('The passed collection should be array or object');
    }

    isNotFunction(predicate);

    let initialArray;
    const resultArray = [];

    if (isObject(collection)) {
        initialArray = createObjectValuesArray(collection);
    } else {
        initialArray = collection;
    }

    for (let i=0; i<initialArray.length; i++) {
        checkFunctionReturn(predicate, initialArray[i]);
        returnsBoolean(predicate, initialArray[i]);

        if (predicate(initialArray[i])) {
            addElement(resultArray, initialArray[i]);
        }
    }
    return resultArray;
}

module.exports = filterCollection;