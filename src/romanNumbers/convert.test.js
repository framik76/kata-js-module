import { convert } from "./convert";

describe('roman convertion of number', () => {
    
    test('should be a function', () => {
      expect(typeof convert).toBe('function');
    });

    test('convert 1 in I', () => {
        expect(convert(1)).toBe('I');
    });

    test('convert 2 in II', () => {
        expect(convert(2)).toBe('II');
    });

    test('convert 20 in XX', () => {
        expect(convert(20)).toBe('XX');
    });

    test('convert 50 in L', () => {
        expect(convert(50)).toBe('L');
    });

    test('convert 42 in XLII', () => {
        expect(convert(42)).toBe('XLII');
    });

    test('convert 90 in XC', () => {
        expect(convert(90)).toBe('XC');
    });

    test('convert 504 in DIV', () => {
        expect(convert(504)).toBe('DIV');
    });

});