const {addElement} = require('../../common-functions');
const {isNotArray} = require('../../error-checks');

function removeFalsyValues(initialArray) {
    isNotArray(initialArray);

    const changedArray = [];

    function isFalsy(value) {
        return value === false || value === 0 || value === '' || value === undefined || Number.isNaN(value) || value === null;
    }

    for (let i = 0; i < initialArray.length; i++) {
        if (!isFalsy(initialArray[i])) {
            addElement(changedArray, initialArray[i]);
        }
    }
    return changedArray;
}

module.exports = removeFalsyValues;