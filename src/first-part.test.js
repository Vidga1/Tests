import { multiplyAndSum,
	countTotalCharacters,
	sumOfDigits,
	findMax,
	getMonthName,
	checkCircleInSquare,
	calculateSum,
	printMultiplicationTable,
	sumOddNumbers,
	getUserAge,
	createAdminUser,
	printAdminDetails, 
	ArraySum,
	multiplyByTwo,
	findMinMax} from "./first-part";

// 1 задача "Линейные алгоритмы"
test("multiplyAndSum должен вывести верную сумму и произведение чисел", () => {
	const consoleSpy = jest.spyOn(console, "log");
  
	multiplyAndSum(2, 3);
  
	expect(consoleSpy).toHaveBeenCalledWith("Product:", 6);
	expect(consoleSpy).toHaveBeenCalledWith("Sum:", 5);
  
});

test('countTotalCharacters должен вывести верное количество символов строки', () => {
	const consoleSpy = jest.spyOn(console, 'log');
  
	countTotalCharacters("Hello", "World");
  
	expect(consoleSpy).toHaveBeenCalledWith('Total Characters:', 10);
  
});

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

// 2 задача "Условия"

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


// Задача 3 "Циклы"

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

test("сумма нечетных чисел", () => {
	window.prompt = jest.fn().mockReturnValueOnce("12")
	const consoleLogSpy = jest.spyOn(console, "log");
	sumOddNumbers();
	expect(consoleLogSpy).toHaveBeenCalledWith(
		"Сумма всех нечётных чисел от 1 до 12 равна 36",
	);
});


// 10 задание

test('получение возраста пользователя', () => {
	const promptSpy = jest.spyOn(window, 'prompt').mockImplementation(() => "25");
	expect(getUserAge()).toBe(25);
	expect(promptSpy).toHaveBeenCalledWith("Введите число");
});

// 11 задание

test('создание администратора', () => {
	const admin = createAdminUser();
	expect(admin.role).toBe('admin');
});

// 12 задание

describe("printAdminDetails", () => {
	let consoleSpy;
  
	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});
  
	afterEach(() => {
		consoleSpy.mockRestore();
	});
  
	test("вывести данные администратора", () => {
		const admin = {
			name: "John Doe",
			age: 30,
			role: "admin"
		};
		printAdminDetails(admin);
		expect(consoleSpy).toHaveBeenCalledWith("John Doe", 30, "admin");
	});
});

// 13 задание

test('сумма всех элементов массива равна 55', () => {
	const consoleLogSpy = jest.spyOn(console, 'log');
	ArraySum();
	expect(consoleLogSpy).toHaveBeenCalledWith(55);
});

// 14 задание 

test("умножить каждый элемент массива на 2", () => {
	const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const b = multiplyByTwo(a);
	expect(b).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

// 15 задание
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