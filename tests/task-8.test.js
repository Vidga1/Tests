import { getDayOfWeek,
	MinPass } from "../src/task-8"

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