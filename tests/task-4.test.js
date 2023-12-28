import { getUserAge,
	createAdminUser,
	printAdminDetails } from "../src/task-4"

test('получение возраста пользователя', () => {
	const promptSpy = jest.spyOn(window, 'prompt').mockImplementation(() => "25");
	expect(getUserAge()).toBe(25);
	expect(promptSpy).toHaveBeenCalledWith("Введите число");
});

test('создание администратора', () => {
	const admin = createAdminUser();
	expect(admin.role).toBe('admin');
});

describe("printAdminDetails", () => {
	let consoleSpy;
  
	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});
  
	afterEach(() => {
		consoleSpy.mockRestore();
	});
  
	test("вывести данные администратора", () => {
		const admin = {
			name: "John Doe",
			age: 30,
			role: "admin"
		};
		printAdminDetails(admin);
		expect(consoleSpy).toHaveBeenCalledWith("John Doe", 30, "admin");
	});
});