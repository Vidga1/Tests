import { initializePage } from './dom';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './dom.html'), 'utf8');

describe('Page', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    initializePage();
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('Кнопка «Отправить» скрыта, если поле ввода пусто', () => {
    const submitButton = document.getElementById('submitButton');
    const inputField = document.getElementById('inputField');

    inputField.value = '';
    inputField.dispatchEvent(new Event('input'));

    expect(submitButton.style.display).toBe('none');
  });

  test('Кнопка «Отправить» видна, если поле ввода имеет значение', () => {
    const submitButton = document.getElementById('submitButton');
    const inputField = document.getElementById('inputField');

    inputField.value = 'Test';
    inputField.dispatchEvent(new Event('input'));

    expect(submitButton.style.display).toBe('block');
  });

  test('Новый абзац добавляется при нажатии кнопки «Отправить».', () => {
    const submitButton = document.getElementById('submitButton');
    const inputField = document.getElementById('inputField');

    inputField.value = 'Test';
    inputField.dispatchEvent(new Event('input'));

    submitButton.click();

    const paragraphs = document.getElementsByTagName('p');
    expect(paragraphs.length).toBe(4);
    expect(paragraphs[3].textContent).toBe('Test');
  });

  test('Первый абзац удаляется, если абзацев больше 5.', () => {
    const submitButton = document.getElementById('submitButton');
    const inputField = document.getElementById('inputField');

    for (let i = 0; i < 6; i++) {
      inputField.value = `Test ${i+1}`;
      inputField.dispatchEvent(new Event('input'));
      submitButton.click();
    }

    const paragraphs = document.getElementsByTagName('p');
    expect(paragraphs.length).toBe(5);
    expect(paragraphs[0].textContent).toBe('Test 2');
  });
});