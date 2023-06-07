const includes = require('../tasks/includes');

test('Check if the value is in the array', () => {
    expect(includes(['a', 'b', 'c', 'd'], 'c', 1)).toBe(true);
});

test('Check if the value is in the object', () => {
    expect(includes({'a': 1, 'b': 2, 'c': 3}, 3, 2)).toBe(true);
});

test('Check if the value is in the string', () => {
    expect(includes('The string', 'rin', 4)).toBe(true);
});

test('Check if the function is case sensitive', () => {
    expect(includes('The string', 'Rin', 4)).toBe(false);
});

test('Check if the function works correctly with negative indexes', () => {
    expect(includes([1, 2, 3, 4, 5], 4, -2)).toBe(true);
});

test('Check if the function works correctly if the index is not passed', () => {
    expect(includes('Abcde', 'Abc')).toBe(true);
});

test('Check if the function works if the passed value is undefined', () => {
    expect(includes([0, 1, undefined, true, 3], undefined, 1)).toEqual(true);
});

test('Check if the function works if the passed value is an object', () => {
    expect(includes([{'a': 1}, 2, 3], {'a': 1})).toBe(true);
})

test('Check if the function works if the passed value is NaN', () => {
    expect(includes([0, 1, true, NaN, 3], NaN, 1)).toEqual(true);
});

test('Should throw an error if the first passed argument isn\'t a string, an array or an object', () => {
    expect(() => {
        includes(123, 2);
    }).toThrow('The passed collection should be a string, an array or an object');
});

test('Should throw an error if the value isn\'t passed to the function', () => {
    expect(() => {
        includes([1, 2, 3, 4]);
    }).toThrow('The value was not passed');
});