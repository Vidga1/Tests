import { findMax,
	getMonthName,
	checkCircleInSquare } from "../src/task-2"

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

test('Круг поместится в квадрате', () => {
	expect(checkCircleInSquare(10, 20)).toBe("Круг поместится в квадрате");
});
  
test('Круг не поместится в квадрате', () => {
	expect(checkCircleInSquare(30, 20)).toBe("Круг не поместится в квадрате");
});