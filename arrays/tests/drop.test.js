const drop = require('../tasks/drop');

 test('Check, if the function removes 2 elements', () => {
     expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
 });

test('Check if the function works if amount is greater than array length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
});

test('Check if the function works if amount is equal to array length', () => {
    expect(drop([1, 2, 3], 3)).toEqual([]);
});

test('Check if the function works if amount is not passed', () => {
    expect(drop(['a', 'b', 'c'])).toEqual(['b', 'c']);
});

test('Should throw an error if the first passed argument isn\'t an array', () => {
    expect(() => {
        drop('1, 2, 3', 5);
    }).toThrow('The passed argument should be an array');
});

test('Should throw an error if the passed amount of elements isn\'t a number', () => {
    expect(() => {
        drop([1, 2, 3], '2');
    }).toThrow('The passed argument should be a number');
});

test('Should throw an error if the passed amount of elements is a negative number', () => {
    expect(() => {
        drop([1, 2, 3], -2);
    }).toThrow('The passed argument should be not negative number');
});