const {addElement} = require('../../common-functions');
const {isNotArray, isNotNumber} = require('../../error-checks');

function chunk(initialArray, size) {
    isNotArray(initialArray);
    isNotNumber(size);

    if (initialArray.length === 0) {
        throw new Error('Array should have at least one element');
    }
    if (size <= 0) {
        throw new Error('Size should be a positive number');
    }
    if (initialArray.length < size) {
        throw new Error('Amount of elements in the array should be not less than size');
    }

    const chunkArray = [];
    let count = size;

    for (let i = 0; i < initialArray.length; i += size) {
        let innerArray = [];

        for (let j = i; j < i + size; j++) {
            addElement(innerArray, initialArray[j]);
        }

        addElement(chunkArray, innerArray);
        count += size;
    }
    return chunkArray;
}

module.exports = chunk;