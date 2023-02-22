const board = document.querySelector('#board');
const colors = ['blue', 'yellow', 'green', 'purple', 'red', 'orange', 'indigo', 'tomato'];
const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');
   square.addEventListener('mouseover',() => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square);
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}

function setColor(element){
   const color = getRandomColor();
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`
}

function  removeColor(element){
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}