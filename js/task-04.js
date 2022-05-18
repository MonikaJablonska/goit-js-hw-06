let counterValue = 0;

const spanValue = document.querySelector("#value");

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
 });

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
