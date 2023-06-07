const {isNotObject, isNotFunction, returnsBoolean} = require("../../error-checks");

function omitPropertyBy(object, predicate) {
    isNotObject(object);
    isNotFunction(predicate);

    const resultObject = object;

    for (let key in resultObject) {
        returnsBoolean(predicate, resultObject[key]);

        if (predicate(resultObject[key])) {
            delete resultObject[key];
        }
    }

    return resultObject;
}

module.exports = omitPropertyBy;