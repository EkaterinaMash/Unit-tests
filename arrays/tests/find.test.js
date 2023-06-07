const find = require('../tasks/find');

test('Check if the function works with an array passed', () => {
    expect(find([1, 2, 3, 4], (el) => el > 2)).toBe(3);
});

test('Check if the function works with an object passed', () => {
    expect(find({'a': 1, 'b': 2, 'c': 3, 'd': 4}, (el) => el > 2)).toBe(3);
});

test('Check if the function works with an array and index passed', () => {
    expect(find([1, 2, 3, 4, 5], (el) => el > 2, 3)).toBe(4);
});

test('Check if the function works with an object and index passed', () => {
    expect(find({'a': 1, 'b': 2, 'c': 3, 'd': 4}, (el) => el > 2, 3)).toBe(4);
});

test('Check if the empty array is passed', () => {
    expect(find([], (el) => el * 2)).toBe(undefined);
})

test('Should throw an error if the first argument is not array or object', () => {
    expect(() => {
        find('Abcde', (el) => el > 'c');
    }).toThrow('The passed collection should be array or object');
});

test('Should throw an error if the predicate doesn\'t return boolean value', () => {
    expect(() => {
        find([1, 2, 3], (el) => el * 2);
    }).toThrow('The predicate should return boolean value');
});

test('Should throw an error if the predicate doesn\'t return a value', () => {
    const predicate = function (element) {
        element = element * 2;
    }
    expect(() => {
        find([1, 2, 3], predicate);
    }).toThrow('The function should return a value');
});