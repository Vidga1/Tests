import { diff,
	isWord,
	pow,
	getDayOfWeek,
	MinPass } from "./second-part";

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

// 3 задание

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

// 4 задание

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

// 5 задание
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