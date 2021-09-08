import { sumar, restar, multiplicar, dividir, isFalse, isNull, isTrue, isUndefined, arrDias, arrProvincias } from './example';

describe('Operaciones matemáticas', () => {
    test('Realizamos la suma', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('Realizamos la resta', () => {
        expect(restar(1,1)).toBe(0);
    });
    test('Realizamos la multiplicacion', () => {
        expect(multiplicar(1,1)).toBe(1);
    });
    test('Realizamos la division', () => {
        expect(dividir(1,1)).toBe(1);
    });
});
describe('Common matchers', () => {
    const datos = {
        nombre: 'Persona 1',
        edad: 10
    }
    const datos2 = {
        nombre: 'Persona 1',
        edad: 10
    }
    test('Comprobamos que los objectos son iguales', () => {
        expect(datos).toEqual(datos2);
    });
});
describe('Numeric matchers', () => {
    test('Resultado menor que...', () => {
        expect(restar(5,3)).toBeLessThan(3);
    });
    test('Resultado menor o igual que...', () => {
        expect(restar(5,3)).toBeLessThanOrEqual(2);
    });
    test('Resultado mayor o igual que...', () => {
        expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
    });
    test('Resultado mayor que...', () => {
        expect(sumar(5,5)).toBeGreaterThan(9);
    });
});
describe('Matchers Boolean, Undefined o Null', () => {
    test('Resultado true', () => {
        expect(isTrue()).toBeTruthy();
    });
    test('Resultado false', () => {
        expect(isFalse()).toBeFalsy();
    });
    test('Resultado undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
    test('Resultado null', () => {
        expect(isNull()).toBeNull();
    });
});
describe('Matchers Arrays', () => { 
    test('Madrid existe en el array', () => {
        expect(arrProvincias()).toContain('Madrid');
    });
    test('Guadalajara no existe en el array', () => {
        expect(arrProvincias()).not.toContain('Guadalajara');
    })
    test('El array semana tiene 9 elementos', () => {
        expect(arrProvincias()).toHaveLength(9);
    })
});