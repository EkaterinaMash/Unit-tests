const take = require('../tasks/take');

test('Check if the function takes 3 first elements to the new array', () => {
    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
});

test('Check if functions works if passed amount is equal to 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
});

test('Check if function works if passed amount is greater than array length', () => {
    expect(take(['a', 'b', 'c'], 6)).toEqual(['a', 'b', 'c']);
});

test('Check if the function works if amount is not passed', () => {
    expect(take([1, 2, 3])).toEqual([1]);
});

test('Should throw an error if the first argument isn\'t an array', () => {
    expect(() => {
        take('1, 2, 3, 4', 3);
    }).toThrow('The passed argument should be an array');
});

test('Should throw an error if the passed amount of elements isn\'t type of number', () => {
    expect(() => {
        take([1, 2, 3], '2');
    }).toThrow('The passed argument should be a number');
});

test('Should throw an error if the passed amount is NaN', () => {
    expect(() => {
        take(['a', 'b', 'c'], NaN);
    }).toThrow('The passed argument should be a number');
});

test('Should throw an error if the passed amount is a negative number', () => {
    expect(() => {
        take(['a', 'b', 'c'], -2);
    }).toThrow('The passed argument should be not negative number');
});
