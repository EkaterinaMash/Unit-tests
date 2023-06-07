const {addElement} = require('../../common-functions');
const {isNotArray} = require('../../error-checks');
const mapCollection = require('./map');

function groupElements(...arrays) {
    for (let array of arrays) {
        isNotArray(array);
    }

    const arraysLength = mapCollection(arrays, (el) => el.length);

    for (let i = 0; i < arraysLength.length - 1; i++) {
        if (arraysLength[i] !== arraysLength[i + 1]) {
            throw new Error('All passed arrays should be the same length');
        }
    }

    const resultArray = [];

    for (let i = 0; i < arraysLength[0]; i++) {
        const currentElement = mapCollection(arrays, (el) => el[i]);
        addElement(resultArray, currentElement);
    }
    return resultArray;
}

module.exports = groupElements;