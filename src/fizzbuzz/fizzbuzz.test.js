import { fizzbuzz } from "./fizzbuzz";

describe('FizzBuzz module', () => {

    test('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function');
    });

    test('fizzbuzz of 1', () => {
        expect(fizzbuzz(1)).toBe('1');
    });

    test('fizzbuzz of 2', () => {
        expect(fizzbuzz(2)).toBe('1 2');
    });

    test('fizzbuzz of 3', () => {
        expect(fizzbuzz(3)).toBe('1 2 FIZZ');
    });

    test('fizzbuzz of 5', () => {
        expect(fizzbuzz(5)).toBe('1 2 FIZZ 4 BUZZ');
    });

    test('fizzbuzz of 15', () => {
        expect(fizzbuzz(15)).toBe('1 2 FIZZ 4 BUZZ FIZZ 7 8 FIZZ BUZZ 11 FIZZ 13 14 FIZZBUZZ');
    });

});