import { initializePage } from '../src/task-7';

describe('initializePage', () => {
	let submitButton;
	let inputField;

	beforeEach(() => {
		submitButton = document.createElement('button');
		inputField = document.createElement('input');
	});

	test('submitButton style should be "none" when inputField value is empty', () => {
		initializePage(submitButton, inputField);
		expect(submitButton.style.display).toBe('none');
	});

	test('submitButton style should be "block" when inputField value is not empty', () => {
		initializePage(submitButton, inputField);
		inputField.value = 'test';
		inputField.dispatchEvent(new Event('input'));
		expect(submitButton.style.display).toBe('block');
	});

	test('new paragraph should be added to document body when submitButton is clicked', () => {
		initializePage(submitButton, inputField);
		inputField.value = 'test';
		submitButton.dispatchEvent(new Event('click'));
		const paragraphs = document.getElementsByTagName('p');
		expect(paragraphs.length).toBe(1);
		expect(paragraphs[0].textContent).toBe('test');
	});

});