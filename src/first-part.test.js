import { multiplyAndSum,
	countTotalCharacters } from "./first-part";

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