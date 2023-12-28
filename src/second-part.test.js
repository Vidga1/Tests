import { diff,
	isWord,
	pow,
	getDayOfWeek,
	MinPass,
	compareBirthDates,
	isRightTriangle,
	calculateCircleInfo,
	findDicriminant,
	checkString } from "./second-part";

// Задача 6 "Функции"

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

describe('pow', () => {
	test('Проверка возведения числа в положительную степень', () => {
		expect(pow(2, 3)).toBe(8);
	});
  
	test('Проверка возведения числа в отрицательную степень', () => {
		expect(pow(2, -2)).toBe(0.25);
	});
  
	test('Проверка возведения числа в нулевую степень', () => {
		expect(pow(2, 0)).toBe(1);
	});
});


// Задача 8 "Работа с датами"

describe('getDayOfWeek', () => {
	beforeEach(() => {
		window.prompt = jest.fn().mockReturnValue('01.01.2022');
	});
  
	afterEach(() => {
		jest.clearAllMocks();
	});
  
	it('должен вернуть правильный день недели', () => {
		const result = getDayOfWeek();
		expect(result).toBe('Суббота');
	});
});

test('прошло минут с начала дня', () => {
	// Создаем фиктивную дату и время (10:30)
	const now = new Date(2022, 0, 1, 10, 30);
    
	// Переопределяем методы получения текущей даты и времени
	jest.spyOn(global, 'Date').mockImplementation(() => now);
    
	// Ожидаемый результат: 10 часов * 60 минут + 30 минут = 630 минут
	const expectedMinutesPassed = 630;
    
	// Вызываем функцию и проверяем результат
	expect(MinPass()).toBe(expectedMinutesPassed);
});

test('Сравнение дат рождения', () => {
	expect(compareBirthDates("05.05.2000", "05.05.2000")).toBe("Оба пользователя родились в одинаковый день.");
	expect(compareBirthDates("06.05.2000", "05.05.2000")).toBe("Первый пользователь моложе второго.");
	expect(compareBirthDates("04.05.2000", "05.05.2000")).toBe("Второй пользователь моложе первого.");
	expect(compareBirthDates("05.06.2000", "05.05.2000")).toBe("Первый пользователь моложе второго.");
	expect(compareBirthDates("05.05.2000", "05.06.2000")).toBe("Второй пользователь моложе первого.");
	expect(compareBirthDates("05.05.2001", "05.05.2000")).toBe("Первый пользователь моложе второго.");
	expect(compareBirthDates("05.05.2000", "05.05.2001")).toBe("Второй пользователь моложе первого.");
});


// Задача 9 "Математические операции"

describe("isRightTriangle", () => {
	it("треугольник является прямоугольным", () => {
		expect(isRightTriangle(3, 4, 5)).toBe(true);
		expect(isRightTriangle(5, 12, 13)).toBe(true);
		expect(isRightTriangle(8, 15, 17)).toBe(true);
	});
  
	it("треугольник не является прямоугольным", () => {
		expect(isRightTriangle(2, 4, 5)).toBe(false);
		expect(isRightTriangle(5, 10, 15)).toBe(false);
		expect(isRightTriangle(7, 8, 9)).toBe(false);
	});
});

describe("calculateCircleInfo", () => {
	it("рассчитать правильную информацию о круге", () => {
		const spy = jest.spyOn(console, "log");
		calculateCircleInfo(5);
  
		expect(spy).toHaveBeenCalledWith("Длина окружности: 31 Площадь круга: 79");
		spy.mockRestore();
	});
});

describe("findDicriminant", () => {
	beforeEach(() => {
		jest.spyOn(console, "log").mockImplementation(() => {});
	});
  
	afterEach(() => {
		window.console.log.mockRestore();
	});
  
	test("Dicriminant > 0", () => {
		findDicriminant(1, -3, 2);
		expect(window.console.log).toHaveBeenCalledWith(
			"Корни квадратного уравнения: x1 = 2, x2 = 1",
		);
	});
  
	test("Dicriminant = 0", () => {
		findDicriminant(1, -4, 4);
		expect(window.console.log).toHaveBeenCalledWith(
			"Корень квадратного уравнения: x = 2",
		);
	});
  
	test("Dicriminant < 0", () => {
		findDicriminant(1, 2, 3);
		expect(window.console.log).toHaveBeenCalledWith(
			"Уравнение не имеет действительных корней",
		);
	});
});


/* Задача 10 "Регулярные выражения" */

describe("checkString", () => {
	test("дата", () => {
		expect(checkString("12/31/2022")).toBe("Это дата");
		expect(checkString("01/01/2023")).toBe("Это дата");
	});
  
	test("электронная почта", () => {
		expect(checkString("test@example.com")).toBe("Это электронная почта");
		expect(checkString("hello.world@example.com")).toBe(
			"Это электронная почта",
		);
	});
  
	test("номер телефона", () => {
		expect(checkString("+1-123-456-7890")).toBe("Это номер телефона");
		expect(checkString("+44-987-654-3210")).toBe("Это номер телефона");
	});
  
	test("не дата, не электронная почта, не номер телефона", () => {
		expect(checkString("Hello World")).toBe(
			"Это не дата, не электронная почта, не номер телефона",
		);
		expect(checkString("123abc")).toBe(
			"Это не дата, не электронная почта, не номер телефона",
		);
	});
});
