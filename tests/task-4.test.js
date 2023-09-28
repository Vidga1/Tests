import { getUserAge } from "../src/task-4"

test('получение возраста пользователя', () => {
	const promptSpy = jest.spyOn(window, 'prompt').mockImplementation(() => "25");
	expect(getUserAge()).toBe(25);
	expect(promptSpy).toHaveBeenCalledWith("Введите число");
});