import { calculateSum } from "../src/task-3"

test('сумма чисел от 50 до 100 равна 3825', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	calculateSum();
	expect(consoleLogSpy).toHaveBeenCalledWith(3825);
});