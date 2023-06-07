const {isNotObject} = require('../../error-checks');
const {modifyObjectProperties} = require("../../common-functions");

function pickProperties(object, ...paths) {
    isNotObject(object);
    const resultObject = {};

    function setProperty(property) {
        for (let key in object) {
            if (key === property) {
                resultObject[key] = object[key];
            }
        }
    }

    modifyObjectProperties(paths, setProperty);

    return resultObject;
}

module.exports = pickProperties;

