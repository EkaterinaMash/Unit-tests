const toPairs = require('../tasks/toPairs');

test('Check if the function works if an object is passed', () => {
    expect(toPairs({'a': 1, 'b': 2})).toEqual([['a', 1], ['b', 2]]);
});

test('Check if the function works if an object made using constructor is passed', () => {
    function createObject() {
        this.a = 1;
        this.b = 2;
    }

    const myObject = new createObject();
    expect(toPairs(myObject)).toEqual([['a', 1], ['b', 2]]);
});

test('Check if the function works if a map is passed', () => {
    const map = new Map([
        ['name', 'John'],
        ['surname', 'Brown'],
        ['age', 28]
    ]);

    expect(toPairs(map)).toEqual([['name', 'John'], ['surname', 'Brown'], ['age', 28]]);
});

test('Check if the function works if a set is passed', () => {
    const set = new Set(['name', 'surname', 'age']);

    expect(toPairs(set)).toEqual([['name'], ['surname'], ['age']]);
});

test('Should throw an error if the passed argument is not object, map or set', () => {
    expect(() => toPairs(['a', 'b', 'c'])).toThrow('The passed argument should be object, map or set');
});

test('Check if the function works if an empty object is passed', () => {
    expect(toPairs({})).toEqual([]);
});