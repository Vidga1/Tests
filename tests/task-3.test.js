import { calculateSum,
	printMultiplicationTable } from "../src/task-3"

test('сумма чисел от 50 до 100 равна 3825', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	calculateSum();
	expect(consoleLogSpy).toHaveBeenCalledWith(3825);
});

test('таблица умножения на 7', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	printMultiplicationTable();
	expect(consoleLogSpy).toHaveBeenCalledWith("1 x 7 = 7");
	expect(consoleLogSpy).toHaveBeenCalledWith("2 x 7 = 14");
	expect(consoleLogSpy).toHaveBeenCalledWith("3 x 7 = 21");
	expect(consoleLogSpy).toHaveBeenCalledWith("4 x 7 = 28");
	expect(consoleLogSpy).toHaveBeenCalledWith("5 x 7 = 35");
	expect(consoleLogSpy).toHaveBeenCalledWith("6 x 7 = 42");
	expect(consoleLogSpy).toHaveBeenCalledWith("7 x 7 = 49");
	expect(consoleLogSpy).toHaveBeenCalledWith("8 x 7 = 56");
	expect(consoleLogSpy).toHaveBeenCalledWith("9 x 7 = 63");
	expect(consoleLogSpy).toHaveBeenCalledWith("10 x 7 = 70");
});