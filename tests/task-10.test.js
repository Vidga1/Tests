import { checkString } from "../src/task-10"

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