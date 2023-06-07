const {addElement} = require('../../common-functions');
const {isNotArray} = require('../../error-checks');

function concat(initialArray, ...args) {
    isNotArray(initialArray);

    const concatArray = [];

    for (let i = 0; i < initialArray.length; i++) {
        addElement(concatArray, initialArray[i]);
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'object' && args.constructor === Array) {
            for (let j = 0; j < args[i].length; j++) {
                addElement(concatArray, args[i][j]);
            }
        } else {
            addElement(concatArray, args[i]);
        }
    }
    return concatArray;
}

module.exports = concat;