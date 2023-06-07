const filter = require('../tasks/filter');

test('Check if the function works with an array passed', () => {
    expect(filter([1, 2, 3, 4], (el) => el > 2)).toEqual([3, 4]);
});

test('Check if the function works with an object passed', () => {
    expect(filter({'a': 1, 'b': 2, 'c': 3, 'd': 4}, (el) => el > 2)).toEqual([3, 4]);
});

test('Check if the empty array is passed', () => {
    expect(filter([], (el) => el * 2)).toEqual([]);
})

test('Should throw an error if the first passed argument isn\'t an array or an object', () => {
    expect(() => {
        filter('Abcde', (el) => el > 'c');
    }).toThrow('The passed collection should be array or object');
});

test('Should throw an error if the second passed argument isn\'t a function', () => {
    expect(() => {
        filter([1, 2, 3], {'a': 1, 'b': 2});
    }).toThrow('The  argument should be type of function');
});

test('Should throw an error if the predicate function doesn\'t return a value', () => {
    expect(() => {
        filter([1, 2, 3], (el) => {el * 2});
    }).toThrow('The function should return a value');
});

test('Should throw an error if the predicate function returns not boolean value', () => {
    expect(() => {
        filter([1, 2, 3], (el) => el * 2);
    }).toThrow('The predicate should return boolean value');
});


