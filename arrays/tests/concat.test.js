const concat = require('../tasks/concat');

test('Check if the function concatenates array with 3, "4" values', () => {
    expect(concat([1, 2], 3, "4")).toEqual([1, 2, 3, "4"]);
});

test('Check if the function concatenates array with arrays', () => {
    expect(concat([1, 2, 3], [4, 5], [6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Check if the function concatenates array with numbers and array', () => {
    expect(concat([1, 2], 3, 4, [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Check if the code works with am empty array', () => {
    expect(concat([], 1, 2, 3)).toEqual([1, 2, 3]);
});

test('Check if the code works with an empty array passed as an argument', () => {
    expect(concat([1, 2], [])).toEqual([1, 2]);
});

test('Should throw an error if the first passed argument isn\'t an array', () => {
    expect(() => {
        concat('1, 2, 3', 4, 5);
    }).toThrow('The passed argument should be an array');
});