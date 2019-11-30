const functions = require('./functions');
test('Adding two numbers (2 + 3 = 5)', () => {
    expect(functions.sum(2,3)).toBe(5);
});

test ('chek if is null', () =>{
    expect(functions.returnNull()).toBeNull();
})
test('check name',()=>{
    expect(functions.getname()).toContain('yoni')
})