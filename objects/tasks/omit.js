const {modifyObjectProperties} = require("../../common-functions");
const {isNotObject} = require("../../error-checks");

function omitProperties(object, ...paths) {
    isNotObject(object);

    const resultObject = object;

    function deleteProperty(property) {
        for (let key in resultObject) {
            if (key === property) {
                delete resultObject[key];
            }
        }
    }

    modifyObjectProperties(paths, deleteProperty);

    return resultObject;
}

module.exports = omitProperties;