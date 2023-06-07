const map = require('../tasks/map');

test('Check if the function maps the array', () => {
    expect(map([1, 2, 3], (el) => el * 3)).toEqual([3, 6, 9]);
});

test('Check if the function maps the object', () => {
    expect(map({'a': 1, 'b': 2}, (el) => el * 3)).toEqual([3, 6]);
});

test('Check if the function works if values of passed array or object are strings', () => {
    expect(map(['Hello'], (el) => el + ', world!')).toEqual(['Hello, world!']);
});

test('Should throw an error if the first argument isn\'t an array or object', () => {
    expect(() => {
        map('Abcd', (el) => el + 'Hello!')
    }).toThrow('The passed collection should be array or object');
});

test('Check if the function works if an empty array is passed', () => {
    expect(map([], (el) => el * 2)).toEqual([]);
});

test('Should throw an error if the second argument is not a function', () => {
    expect(() => {
        map([1, 2, 3], {'a': 1, 'b': 2});
    }).toThrow('The  argument should be type of function');
});

test('Should throw an error if the map function doesn\'t return a value', () => {
    const mapFunction = function (el) {
        el = el * 2;
    }
    expect(() => map([1, 2, 3], mapFunction)).toThrow('The function should return a value');
});