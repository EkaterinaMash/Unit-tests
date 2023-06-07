const pick = require('../tasks/pick');

test('Check if the function works with path as an array passed', () => {
    expect(pick({'a': 1, 'b': 2, 'c': 3}, ['e', 'a', 'c'])).toEqual({'a': 1, 'c': 3});
});

test('Check if the function works with properties as strings passed', () => {
    expect(pick({'a': 1, 'b': 2, 'c': 3}, 'a', 'b', 'n')).toEqual({'a': 1, 'b': 2});
});

test('Check if the function works correctly if there are few equal properties in the path', () => {
    expect(pick({'a': 1, 'b': 2, 'c': 3}, ['a', 'b', 'a'])).toEqual({'a': 1, 'b': 2});
});

test('Check if the function works correctly if properties in the path are in another order than in the object', () => {
    expect(pick({'a': 1, 'b': 2, 'c': 3}, ['b', 'a', 'c'])).toEqual({'b': 2, 'a': 1, 'c': 3});
});

test('Should throw an error if the first passed argument is not type of object', () => {
    expect(() => {
        pick('abcd', 'abcd');
    }).toThrow('The passed argument should be type of object');
});

test('Should throw an error if the second and next arguments are not strings or arrays', () => {
    expect(() => {
        pick({'a': 1, 'b': 2}, 123)
    }).toThrow('The second and next arguments should be type of string or array');
});



