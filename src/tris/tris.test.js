import { resolve } from "./tris";

describe('tris module', () => {
    test('should be a function', () => {
      expect(typeof resolve).toBe('function');
    });

    test('horizontal win', () => {
      expect(resolve("OXO","XXX","XOX")).toBe('X');
    });

    test('vertical win', () => {
      expect(resolve("OOX","XOO","OOX")).toBe('O');
    });

    test('diagonal win', () => {
      expect(resolve("XOO","OXO","OOX")).toBe('X');
    });

    test('nobody win', () => {
      expect(resolve("OXX","XXO","OOX")).toBe('False');
    });

});