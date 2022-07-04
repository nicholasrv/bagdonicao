const { generateText, validateInput, createElement } = require('../util.js');

describe('Testes de saída de dados', () => {
    test('Saída com dados', () =>{
        const text = generateText('Nicholas',30);
        expect(text).toBe('Nicholas (30 years old)');
    });
      
    test('Resultado Null', () =>{
        const text = generateText('',null);
        expect(isNull).toBeNull();    
    });
    
    test('Resultado Undefined', () =>{
        const text = generateText();
        expect(isUndefined).toBeUndefined('undefined (undefined years old)');    
    });
})
