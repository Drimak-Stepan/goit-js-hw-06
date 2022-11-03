// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const passwordInput = document.querySelector('#validation-input');
const passwordIndex = document.querySelector('#validation-input[data-length]');

function passwordCheck() {
if (passwordInput.value.length === Number(passwordInput.dataset.length)) {
    passwordInput.classList.add('valid');
    passwordInput.classList.remove('invalid');
} else if (passwordInput.value.length > 0) {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
} else {
    passwordInput.classList.remove('valid');
    passwordInput.classList.remove('invalid');
}
}

passwordInput.addEventListener('blur', passwordCheck);