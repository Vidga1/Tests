import { diff,
	isWord } from "./second-part";

// 1 задание

test('testDiff', () => {
	// Проверка разности положительных чисел
	const result1 = diff(5, 10);
	expect(result1).toBe(5);
  
	// Проверка разности отрицательных чисел
	const result2 = diff(-10, -5);
	expect(result2).toBe(5);
  
	// Проверка разности положительного и отрицательного чисел
	const result3 = diff(10, -5);
	expect(result3).toBe(15);
});

// 2 задание

describe('isWord', () => {
	test('Проверка строки без пробелов', () => {
		expect(isWord("hello")).toBe(true);
	});
  
	test('Проверка строки с пробелами', () => {
		expect(isWord("hello world")).toBe(false);
	});
  
	test('Проверка пустой строки', () => {
		expect(isWord("")).toBe(true);
	});
  
	test('Проверка строки с одним пробелом', () => {
		expect(isWord(" ")).toBe(false);
	});
  
	test('Проверка строки с несколькими пробелами', () => {
		expect(isWord("   ")).toBe(false);
	});
});