import { getDayOfWeek } from "../src/task-8"

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