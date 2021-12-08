const board = document.querySelector('#board');
const colors = ['#0e606e', '#037d94', '#4b97a4', '#6fb8be', '#9f1a6b', '#710244'];
const squaresCount = 500;

for (let i = 0; i < squaresCount; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  /* square.addEventListener('mouseleave', () => {
    removeColor(square);
  }); */

  board.append(square);
}


function setColor(element) {
  const color = getColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000'
}

function getColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
