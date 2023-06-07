const omitBy = require('../tasks/omitBy');

test('Check if the function returns object with the properties predicate returns falsy for', () => {
    expect(omitBy({'a': 1, 'b': 2, 'c': 3, 'd': 4}, (el) => el > 2)).toEqual({'a': 1, 'b': 2});
});

test('Should throw an error if the first passed argument is not type of object', () => {
    expect(() => {
        omitBy('abcd', (el) => el > 2);
    }).toThrow('The passed argument should be type of object');
});

test('Should throw an error if the second passed argument is not type of function', () => {
    expect(() => {
        omitBy({a: 1, b: 2}, [1, 2, 3]);
    }).toThrow('The  argument should be type of function');
});

test('Should throw an error if the predicate returns not boolean value', () => {
    expect(() => {
        omitBy({a: 1, b: 2}, (el) => el * 2);
    }).toThrow('The predicate should return boolean value');
});