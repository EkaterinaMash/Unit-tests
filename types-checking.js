function isObject(value) {
    if (typeof value === 'object' && value.constructor === Object) {
        return true;
    }
}

function isArray(value) {
    if (typeof value === 'object' && value.constructor === Array) {
        return true
    }
}

function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}

function isNaNCheck(firstValue, secondValue) {
    if (Number.isNaN(firstValue) && Number.isNaN(secondValue)) {
        return true;
    }
}

module.exports = {
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isNaNCheck: isNaNCheck
}

