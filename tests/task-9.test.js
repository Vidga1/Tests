import { isRightTriangle,
	calculateCircleInfo,
	findDicriminant } from "../src/task-9"

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