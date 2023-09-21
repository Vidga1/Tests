import { multiplyAndSum,
	countTotalCharacters,
	sumOfDigits,
	findMax,
	getMonthName,
	checkCircleInSquare,
	calculateSum,
	printMultiplicationTable } from "./first-part";

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

// 5 задание

describe("getMonthName", () => {
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("1");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Январь");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("2");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Февраль");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("3");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Март");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("4");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Апрель");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("5");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Май");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("6");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Июнь");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("7");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Июль");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("8");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Август");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("9");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Сентябрь");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("10");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Октябрь");
	});
  
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("11");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Ноябрь");
	});
  
    
	it("должен возвращать правильное название месяца", () => {
		// Mock the prompt function
		window.prompt = jest.fn().mockReturnValueOnce("12");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Декабрь");
	});
  
	it('должен возвращать некорректное число', () => {
		window.prompt = jest.fn().mockReturnValueOnce("13");
		const consoleSpy = jest.spyOn(console, "log");
		getMonthName();
		expect(consoleSpy).toHaveBeenCalledWith("Некорректное число");
	});
});

// 6 задание

test('Круг поместится в квадрате', () => {
	expect(checkCircleInSquare(10, 20)).toBe("Круг поместится в квадрате");
});
  
test('Круг не поместится в квадрате', () => {
	expect(checkCircleInSquare(30, 20)).toBe("Круг не поместится в квадрате");
});

// 7 задание

test('сумма чисел от 50 до 100 равна 3825', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	calculateSum();
	expect(consoleLogSpy).toHaveBeenCalledWith(3825);
});

// 8 задание

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