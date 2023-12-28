import { ArraySum,
	multiplyByTwo,
	findMinMax } from "../src/task-5"

test('сумма всех элементов массива равна 55', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	ArraySum();
	expect(consoleLogSpy).toHaveBeenCalledWith(55);
});

test("умножить каждый элемент массива на 2", () => {
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const b = multiplyByTwo(a);
	expect(b).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

test('вывод минимума и максимума из 10 чисел', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	findMinMax(arr);
	expect(consoleLogSpy).toHaveBeenCalledWith(1, 10);
});
  
test("вывод минимума и максимума из 1 числа", () => {
	const consoleLogSpy = jest.spyOn(console, 'log')
	const arr = [5];
	findMinMax(arr);
	expect(consoleLogSpy).toHaveBeenCalledWith(5, 5);
});
  
test("вывод минимума и максимума из отрицательных чисел", () => {
	const consoleLogSpy = jest.spyOn(console, 'log')
	const arr = [-1, -2, -3, -4, -5];
	findMinMax(arr);
	expect(consoleLogSpy).toHaveBeenCalledWith(-5, -1);
});