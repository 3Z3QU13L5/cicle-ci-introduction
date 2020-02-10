const math = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
}); 

test('adds 4 - 1 to equal 3', () => {
    expect(math.rest(2, 1)).toBe(3);
}); 

test('adds 1 x 3 to equal 3', () => {
    expect(math.multiplication(1, 3)).toBe(3);
}); 

test('adds 9 / 3 to equal 3', () => {
    expect(math.divide(9, 3)).toBe(3);
}); 

test('adds 18 % 5 to equal 3', () => {
    expect(math.residue(18, 5)).toBe(3);
}); 