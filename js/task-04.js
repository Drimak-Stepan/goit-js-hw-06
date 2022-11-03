// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const refs = {
  value: document.querySelector('#value'),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0 ;

const render =()=>{
  refs.value.textContent = counterValue;
};

const handleDecrement = () =>{
  counterValue -= 1;
  render();
};

const handleIncrement = () =>{
  counterValue += 1;
  render();
};

render();

refs.decrement.addEventListener('click', handleDecrement);
refs.increment.addEventListener('click', handleIncrement);



//-----------var/2-----
// const counterValue = document.querySelector('#value');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// counterValue.textContent = 0;

// const decrement = function () {
//   counterValue.textContent -= decrementBtn.textContent * -1;
// };

// const increment = function () {
//   counterValue.textContent -= incrementBtn.textContent * -1;
// };

// decrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);