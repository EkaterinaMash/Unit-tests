const {isObject} = require('./types-checking');

function checkFunctionReturn(func, argument) {
    if (argument !== undefined && func(argument) === undefined) {
        throw new Error('The function should return a value');
    }
}

function isNotObject(value) {
    if (!isObject(value)) {
        throw new Error('The passed argument should be type of object');
    }
}

function isNotFunction(value) {
    if (typeof value !== 'function') {
        throw new Error('The  argument should be type of function');
    }
}

function returnsBoolean(func, argument) {
    if (typeof func(argument) !== 'boolean') {
        throw new Error('The predicate should return boolean value');
    }
}

function isNotArray(array) {
    const isArray = typeof array === 'object' && array.constructor === Array;
    if (!isArray) {
        throw new Error('The passed argument should be an array');
    }
}

function isNotNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error('The passed argument should be a number');
    }
}

function isNegativeNumber(value) {
    if (value < 0) {
        throw new Error('The passed argument should be not negative number');
    }
}

module.exports = {
    checkFunctionReturn: checkFunctionReturn,
    isNotObject: isNotObject,
    isNotFunction: isNotFunction,
    isNotArray: isNotArray,
    isNotNumber: isNotNumber,
    isNegativeNumber: isNegativeNumber,
    returnsBoolean: returnsBoolean,
}