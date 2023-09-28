import { isRightTriangle } from "../src/task-9"

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