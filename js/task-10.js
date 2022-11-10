// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const number = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const innerBox = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  innerBox.innerHTML = '';
  for (let i = 1; i <= number.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = 20 + i * 10 + 'px';
    box.style.height = 20 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    innerBox.append(box);
  }
};

const destroyBoxes = () => {
  innerBox.innerHTML = '';
  number.value = '';
};

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);