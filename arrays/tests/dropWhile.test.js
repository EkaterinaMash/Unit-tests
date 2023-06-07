const dropWhile = require('../tasks/dropWhile');

test('Check if the function works, when the predicate returns falthy for all values of the passed array, starting from the certain index', () => {
    expect(dropWhile([1, 2, 3], (el) => el < 2)).toEqual([2, 3]);
});

test('Check if the function works if values, for which predicate returns false are followed by values, for which the predicate returns true', () => {
    expect(dropWhile([1, 2, 5, 3, 4], (el) => el < 5)).toEqual([5, 3, 4]);
});

test('Check if the function works, when the predicate returns truthy for all values of passed array', () => {
    expect(dropWhile([1, 2, 3], (el) => el > 0)).toEqual([]);
})

test('Should throw an error if the first passed argument isn\'t an array', () => {
    expect(() => {
        dropWhile({'a': 1, 'b': 2}, (el) => el > 1);
    }).toThrow('The passed argument should be an array');
});

test('Should throw an error if the second passed argument isn\'t a function', () => {
    expect(() => {
        dropWhile([1, 2, 3], {'a': 1, 'b': 2});
    }).toThrow('The  argument should be type of function');
});

test('Should throw an error if the predicate function doesn\'t return a value', () => {
    expect(() => {
        dropWhile([1, 2, 3], (el) => {el * 2});
    }).toThrow('The function should return a value');
});

test('Should throw an error if the predicate function returns not boolean value', () => {
    expect(() => {
        dropWhile([1, 2, 3], (el) => el + 2);
    }).toThrow('The predicate should return boolean value');
});

