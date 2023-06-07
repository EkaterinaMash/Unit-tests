const {isArray, isObject} = require('../../types-checking');
const {isNotObject} = require('../../error-checks');
const {addElement, sliceCollection} = require('../../common-functions');
const includesCheck = require('../../arrays/tasks/includes');

function mergeArrays(destinationArray, sourceArray) {
    let mergedArray = sliceCollection(destinationArray);

    for (let i = 0; i < sourceArray.length; i++) {
        if (!includesCheck(destinationArray, sourceArray[i])) {
            if (isObject(destinationArray[i])) {
                mergeObjects(destinationArray[i], sourceArray[i]);
            } else if (isArray(destinationArray[i])) {
                mergedArray[i] = mergeArrays(destinationArray[i], sourceArray[i]);
            } else {
                addElement(mergedArray, sourceArray[i]);
            }
        }
    }
    return mergedArray;
}

function mergeObjects(destinationObject, ...objects) {
    isNotObject(destinationObject);

    for (let object of objects) {
        isNotObject(object);

        for (let key in object) {
            const objectValue = object[key];
            const destinationValue = destinationObject[key];

            if (isObject(objectValue) && isObject(destinationValue)) {
                mergeObjects(destinationValue, objectValue);
            } else if (isArray(objectValue) && isArray(destinationValue)) {
                destinationObject[key] = mergeArrays(destinationValue, objectValue);
            } else {
                destinationObject[key] = objectValue;
            }
        }
    }

    return destinationObject;
}

module.exports = mergeObjects;