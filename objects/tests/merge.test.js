const merge = require('../tasks/merge');

test('Check if the function works if the passed argument is an object with primitive values', () => {
    expect(merge({'a': 1, 'b': 2}, {'a': 3, 'c': 4})).toEqual({'a': 3, 'b': 2, 'c': 4});
});

test('Check if the function works if the passed argument is an object with objects nested', () => {
    const destinationObject = {'one': {'a': 1, 'b': 2}};
    const sourceObject = {'one': {'a': 2}, 'two': {'c': 3}};

    expect(merge(destinationObject, sourceObject)).toEqual({'one': {'a': 2, 'b': 2}, 'two': {'c': 3}});
});

test('Check if the function works with nested arrays and objects', () => {
    const destinationObject = {'a': [{'b': 2}, {'d': 4}]};
    const sourceObject = {'a': [{'c': 3}, {'e': 5}]};

    expect(merge(destinationObject, sourceObject)).toEqual({'a': [{'b': 2, 'c': 3}, {'d': 4, 'e': 5}]});
});

test('Check if the function works with nested arrays', () => {
    const destinationObject = {'a': [[1, 2], [3, 4]]};
    const sourceObject = {'a': [[5, 6], [7, 8]]};

    expect(merge(destinationObject, sourceObject)).toEqual({'a': [[1, 2, 5, 6], [3, 4, 7, 8]]});
});

test('Check if the function works with nested arrays and primitives', () => {
    const destinationObject = {'a': [1, 2, 3]};
    const sourceObject = {'a': [4, 5, 6]};

    expect(merge(destinationObject, sourceObject)).toEqual({'a': [1, 2, 3, 4, 5, 6]});
});

test('Check if the function works if source object and destination object have the same elements in nested arrays', () => {
    const destinationObject = {'a': [1, 2, 3]};
    const sourceObject = {'a': [3, 5, 6]};

    expect(merge(destinationObject, sourceObject)).toEqual({'a': [1, 2, 3, 5, 6]});
});

test('Check if the function works with few source objects passed', () => {
    const destinationObject = {'a': 1, 'b': 2, 'c': 3};
    const sourceObject1 = {'d': 4, 'c': 5};
    const sourceObject2 = {'a': 6, 'e': 7};

    expect(merge(destinationObject, sourceObject1, sourceObject2)).toEqual({'a': 6, 'b': 2, 'd': 4, 'c': 5, 'e': 7});
})

test('Should throw an error if the destination object is not type of Object', () => {
    expect(() => {
        merge([{'a': 1}, {'b': 2}], {'a': 3});
    }).toThrow('The passed argument should be type of object');
});

test('Should throw an error if the second and next passed arguments are not type of Object', () => {
    expect(() => {
        merge({'a': 1, 'b': 2}, ['c', 'd'], [{'e': 3}]);
    }).toThrow('The passed argument should be type of object');
});