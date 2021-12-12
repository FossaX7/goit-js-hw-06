let counterValue = 0;
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const handleClickMinus = () => {
    counterValue--;
    valueEl.textContent = counterValue;
};
decrementBtn.addEventListener("click", handleClickMinus);

const handleClickPlus = () => {
    counterValue++;
    valueEl.textContent = counterValue;
};
incrementBtn.addEventListener("click", handleClickPlus);
