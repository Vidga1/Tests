import { multiplyAndSum } from "../src/task-1"

test("multiplyAndSum должен вывести верную сумму и произведение чисел", () => {
	const consoleSpy = jest.spyOn(console, "log");
  
	multiplyAndSum(2, 3);
  
	expect(consoleSpy).toHaveBeenCalledWith("Product:", 6);
	expect(consoleSpy).toHaveBeenCalledWith("Sum:", 5);
  
});