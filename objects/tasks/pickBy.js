const {isNotObject, isNotFunction, returnsBoolean} = require('../../error-checks');

function pickPropertiesBy(object, predicate) {
    isNotObject(object);
    isNotFunction(predicate);

    const resultObject = {};

    for (let key in object) {
        returnsBoolean(predicate, object[key]);

        if (predicate(object[key])) {
            resultObject[key] = object[key];
        }
    }

    return resultObject;
}

module.exports = pickPropertiesBy;