// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

colorBtn.addEventListener('click', getRandomHexColor);//()changeColor);


//function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //}
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}
