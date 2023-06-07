const omit = require('../tasks/omit');

test('Check if the function works with path as an array passed', () => {
    expect(omit({'a': 1, 'b': 2, 'c': 3}, ['a', 'c'])).toEqual({'b': 2});
});

test('Check if the function works with path as strings passed', () => {
    expect(omit({'a': 1, 'b': 2, 'c': 3}, 'a', 'c')).toEqual({'b': 2});
});

test('Check if the function works correctly if there are few equal properties in the path', () => {
    expect(omit({'a': 1, 'b': 2, 'c': 3}, ['a', 'b', 'a'])).toEqual({'c': 3});
});

test('Check if the function works correctly if properties in the path are in another order than in the object', () => {
    expect(omit({'a': 1, 'b': 2, 'c': 3}, ['c', 'a'])).toEqual({'b': 2});
});

test('Should throw an error if the first passed argument is not type of object', () => {
    expect(() => {
        omit('abcd', 'abcd');
    }).toThrow('The passed argument should be type of object');
});

test('Should throw an error if the second and next arguments are not strings or arrays', () => {
    expect(() => {
        omit({'a': 1, 'b': 2}, 123)
    }).toThrow('The second and next arguments should be type of string or array');
});