const block = document.querySelector('.block');

const h2 = document.querySelector('h2');

const button = document.querySelector('button');

let player1 = {
  isMove: true,
  sign: '&times;',
  num: 1,
};

let player2 = {
  isMove: false,
  sign: '&#9675;',
  num: 0,
};

let gameOver = false;

const arr = ['', '', '', '', '', '', '', '', ''];

arr.forEach((el) => {
  block.insertAdjacentHTML('beforeend', `<div class="item">${el}</div`);
});

const items = document.querySelectorAll('.item');

button.addEventListener('click', reset);

makeAction(items);

function reset() {
  gameOver = false;
  player1.isMove = true;
  h2.textContent = '';
  block.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    arr[i] = '';
    block.insertAdjacentHTML('beforeend', `<div class="item">${arr[i]}</div`);
  }

  const items = document.querySelectorAll('.item');
  makeAction(items);
}

function makeAction(items) {
  items.forEach((el, index) => {
    el.addEventListener('click', function () {
      if (gameOver) {
        return;
      } else {
        if (player1.isMove) {
          if (el.textContent === '') {
            items[index].innerHTML = '&times;';
            arr[index] = player1.num;
            player1.isMove = false;
            player2.isMove = true;
            console.log(arr);
            checkWin();
          }
        } else if (player2.isMove) {
          if (el.textContent === '') {
            items[index].innerHTML = '&#9675;';
            arr[index] = player2.num;
            player2.isMove = false;
            player1.isMove = true;
            console.log(arr);
            checkWin();
          }
        }
      }
    });
  });
}

function checkWin() {
  if (arr[0] + arr[1] + arr[2] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[0] + arr[1] + arr[2] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[3] + arr[4] + arr[5] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[3] + arr[4] + arr[5] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[6] + arr[7] + arr[8] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[6] + arr[7] + arr[8] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[0] + arr[3] + arr[6] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[0] + arr[3] + arr[6] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[1] + arr[4] + arr[7] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[1] + arr[4] + arr[7] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[2] + arr[5] + arr[8] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[2] + arr[5] + arr[8] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[0] + arr[4] + arr[8] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[0] + arr[4] + arr[8] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (arr[2] + arr[4] + arr[6] === 3) {
    h2.textContent = 'Игрок 1 побеждает!';
    gameOver = true;
  } else if (arr[2] + arr[4] + arr[6] === 0) {
    h2.textContent = 'Игрок 2 побеждает!';
    gameOver = true;
  } else if (!arr.includes('')) {
    h2.textContent = 'Ничья!';
    gameOver = true;
  }
}
