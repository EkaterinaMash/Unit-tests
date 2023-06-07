const {addElement} = require('../../common-functions');

function toPairs(object) {
    if (typeof object !== 'object' || object.constructor === Array) {
        throw new Error('The passed argument should be object, map or set')
    }

    const resultArray = [];

    if (object.constructor === Map) {
        for (let entry of object) {
            addElement(resultArray, entry);
        }
    }

    if (object.constructor === Set) {
        for (let entry of object) {
            const innerArray = [];

            addElement(innerArray, entry);
            addElement(resultArray, innerArray);
        }
    }

    for (let key in object) {
        const innerArray = [];

        addElement(innerArray, key);
        addElement(innerArray, object[key]);
        addElement(resultArray, innerArray);
    }
    return resultArray;
}

module.exports = toPairs;