const zip = require('../tasks/zip');

test('Check if the function works with numeric arrays', () => {
    expect(zip([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]]);
});

test('Check if the function works with different types of elements in arrays', () => {
    expect(zip(['a', 'b', 'c'], [1, 2, 3], [true, null, 0])).toEqual([['a', 1, true], ['b', 2, null], ['c', 3, 0]]);
});

test('Should throw an error if the passed arguments are not arrays', () => {
    expect(() => {
        zip([1, 2, 3], {'a': 1, 'b': 2});
    }).toThrow('The passed argument should be an array');
});

test('Should throw an error if the passed arrays are not the same length', () => {
    expect(() => {
        zip([1, 2], [3, 4, 5]);
    }).toThrow('All passed arrays should be the same length');
});