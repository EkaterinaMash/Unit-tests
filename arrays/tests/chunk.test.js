const chunk = require('../tasks/chunk');

test('Check an array of 5 numeric values with length of 2', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
})

test('Check an array of 6 values of different types with length of 3', () => {
    expect(chunk(['a', NaN, 3, 'b', undefined, 'c'], 3)).toEqual([['a', NaN, 3], ['b', undefined, 'c']]);
})

test('Should throw an error if the first passed argument is not an array', () => {
    expect(() => {
        chunk('cat', 3);
    }).toThrow('The passed argument should be an array');
});

test('Should throw an error if the length of the array is equal to zero', () => {
    expect(() => {
        chunk([], 2);
    }).toThrow('Array should have at least one element');
});

test('Should throw an error if the passed size isn\'t type of number', () => {
    expect(() => {
        chunk([1, 2, 3], '2');
    }).toThrow('The passed argument should be a number');
});

test('Should throw an error if the passed size is a negative number', () => {
    expect(() => {
        chunk([1, 2, 3, 4], -2);
    }).toThrow('Size should be a positive number');
});

test('Should throw an error if the passed size is a equal to zero', () => {
    expect(() => {
        chunk([1, 2, 3, 4], 0);
    }).toThrow('Size should be a positive number');
});

test('Should throw an error if the array length is less than passed size', () => {
    expect(() => {
        chunk([1, 2, 3], 5);
    }).toThrow('Amount of elements in the array should be not less than size');
})