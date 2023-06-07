const compact = require('../tasks/compact');

test('Check if the function removes 0 and false', () => {
    expect(compact([0, 1, false, 3])).toEqual([1, 3]);
});

test('Check if the function removes "", undefined, null, NaN', () => {
    expect(compact([2, '', NaN, 'true', null, undefined, 4])).toEqual([2, 'true', 4]);
});

test('Check if the function does not remove string "false"', () => {
    expect(compact(['dog', 0, false, 'false'])).toEqual(['dog', 'false']);
});

test('Should throw an error if the passed argument isn\'t an array', () => {
    expect(() => {
        compact('false, 0');
    }).toThrow('The passed argument should be an array');
});
