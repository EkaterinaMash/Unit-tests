const {isArray, isString} = require('./types-checking');

function addElement(array, element) {
    const length = array.length;
    array[length] = element;
}

function sliceCollection(collection, index = 0) {
    let slicedCollection = [];

    if (index >= 0) {
        for (let i = index; i < collection.length; i++) {
            addElement(slicedCollection, collection[i]);
        }
    } else {
        for (let i = collection.length + index; i < collection.length; i++) {
            addElement(slicedCollection, collection[i]);
        }
    }

    return slicedCollection;
}

function createObjectValuesArray(object) {
    const objectValues = [];
    for (let key in object) {
        addElement(objectValues, object[key]);
    }
    return objectValues;
}

function modifyObjectProperties(paths, modifyProperty) {
    for (let i = 0; i < paths.length; i++) {
        const property = paths[i];

        if (isArray(property)) {
            for (let i = 0; i < property.length; i++) {
                modifyProperty(property[i]);
            }
        } else if (isString(property)) {
            modifyProperty(property);
        } else {
            throw new Error('The second and next arguments should be type of string or array')
        }
    }
}

module.exports = {
    addElement: addElement,
    sliceCollection: sliceCollection,
    createObjectValuesArray: createObjectValuesArray,
    modifyObjectProperties: modifyObjectProperties
}