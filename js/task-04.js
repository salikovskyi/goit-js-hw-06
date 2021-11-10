const listEl = document.querySelector('#value')

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counter = 0;


const decrementClick = () => {
    counter += 1;
    listEl.textContent = counter
}

const incrementClick = () => {
    counter -= 1
    listEl.textContent = counter
}



decrementBtnEl.addEventListener('click', incrementClick);
incrementBtnEl.addEventListener('click', decrementClick)

