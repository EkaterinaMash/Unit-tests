const {addElement, createObjectValuesArray} = require('../../common-functions');
const {checkFunctionReturn, isNotFunction} = require('../../error-checks');
const {isObject, isArray} = require("../../types-checking");

function mapCollection(collection, mapFunction) {
    if (!(isArray(collection) || isObject(collection))) {
        throw new Error('The passed collection should be array or object');
    }
    isNotFunction(mapFunction);

    let initialArray;
    const newArray = [];

    if (isObject(collection)) {
        initialArray = createObjectValuesArray(collection);
    }
    if (isArray(collection)) {
        initialArray = collection;
    }

    for (let i = 0; i < initialArray.length; i++) {
        checkFunctionReturn(mapFunction, initialArray[i]);
        addElement(newArray, mapFunction(initialArray[i]));
    }

    return newArray;
}

module.exports = mapCollection;