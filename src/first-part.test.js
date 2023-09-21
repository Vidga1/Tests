import { multiplyAndSum,
	countTotalCharacters,
	sumOfDigits,
	findMax } from "./first-part";

// 1 задание
test("multiplyAndSum должен вывести верную сумму и произведение чисел", () => {
	const consoleSpy = jest.spyOn(console, "log");
  
	multiplyAndSum(2, 3);
  
	expect(consoleSpy).toHaveBeenCalledWith("Product:", 6);
	expect(consoleSpy).toHaveBeenCalledWith("Sum:", 5);
  
});

// 2 задание
test('countTotalCharacters должен вывести верное количество символов строки', () => {
	const consoleSpy = jest.spyOn(console, 'log');
  
	countTotalCharacters("Hello", "World");
  
	expect(consoleSpy).toHaveBeenCalledWith('Total Characters:', 10);
  
});

// 3 задание

describe("sumOfDigits", () => {
	it("необходимо вычислить сумму цифр трехзначного числа", () => {
     
		const mockPrompt = jest.spyOn(window, "prompt").mockReturnValueOnce("123");
		const mockConsoleLog = jest.spyOn(console, "log");
  
		sumOfDigits();
  
		expect(mockPrompt).toHaveBeenCalledTimes(1);
		expect(mockConsoleLog).toHaveBeenCalledWith(
			"Сумма цифр введенного числа:",
			6,
		);
	});
  
	it("если ввод не является трехзначным числом", () => {
  
		const mockPrompt = jest.spyOn(window, "prompt").mockReturnValueOnce("12");
		const mockConsoleLog = jest.spyOn(console, "log");
  
		sumOfDigits();
  
		expect(mockPrompt).toHaveBeenCalledTimes(1);
		expect(mockConsoleLog).toHaveBeenCalledWith("Вы ввели неверное число!");
	});
});

// 4 задание
describe('findMax', () => {
	it('если первое число больше второго числа', () => {
		const mockConsoleLog = jest.spyOn(console, 'log');
		findMax(5, 3);
		expect(mockConsoleLog).toHaveBeenCalledWith(5);
	});
	it('если второе число больше первого числа', () => {
		const mockConsoleLog = jest.spyOn(console, 'log');
		findMax(2, 4);
		expect(mockConsoleLog).toHaveBeenCalledWith(4);
	});
});