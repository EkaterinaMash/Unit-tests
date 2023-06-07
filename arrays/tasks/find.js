const {isObject, isArray} = require("../../types-checking");
const {returnsBoolean, checkFunctionReturn} = require('../../error-checks');
const {createObjectValuesArray, sliceCollection} = require("../../common-functions");

function findElement(collection, predicate, index = 0) {
    if (!(isObject(collection) || isArray(collection))) {
        throw new Error('The passed collection should be array or object');
    }

    let initialArray;

    if (isObject(collection)) {
        initialArray = createObjectValuesArray(collection);
    } else {
        initialArray = collection;
    }

    const slicedArray = sliceCollection(initialArray, index);

    for (let i = 0; i < slicedArray.length; i++) {
        checkFunctionReturn(predicate, slicedArray[i]);
        returnsBoolean(predicate, slicedArray[i]);

        if (predicate(slicedArray[i])) {
            return slicedArray[i];
        }
    }
    return undefined;
}

module.exports = findElement;