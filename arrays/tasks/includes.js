const {sliceCollection, createObjectValuesArray} = require('../../common-functions');
const {isNaNCheck, isArray, isObject, isString} = require('../../types-checking');

function includesCheck(collection, value, fromIndex = 0) {
    if (!(isString(collection) || isArray(collection) || isObject(collection))) {
        throw new Error('The passed collection should be a string, an array or an object');
    }

    if (arguments.length === 1) {
        throw new Error('The value was not passed');
    }

    if (isString(collection)) {
        return !!collection.slice(fromIndex).includes(value);
    }

    let slicedArray;

    if (isObject(collection)) {
        const objectValues = createObjectValuesArray(collection);
        slicedArray = sliceCollection(objectValues, fromIndex);
    }

    if (isArray(collection)) {
        slicedArray = sliceCollection(collection, fromIndex);
    }

    for (let i = 0; i < slicedArray.length; i++) {
        if (typeof slicedArray[i] === 'object' && typeof value === 'object') {
            const stringItem = JSON.stringify(slicedArray[i]);
            const stringValue = JSON.stringify(value);

            if (stringItem === stringValue) {
                return true;
            }

        } else if (slicedArray[i] === value || isNaNCheck(slicedArray[i], value)) {
            return true;
        }
    }
    return false;
}

module.exports = includesCheck;