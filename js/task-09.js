function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const colorBody = getRandomHexColor();
  document.body.style.backgroundColor = colorBody;
  currentColor.textContent = colorBody;
});