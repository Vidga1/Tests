import { ArraySum } from "../src/task-5"

test('сумма всех элементов массива равна 55', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	ArraySum();
	expect(consoleLogSpy).toHaveBeenCalledWith(55);
});