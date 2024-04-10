const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueElement = document.getElementById('value');

let counterValue = 0;

counterValueElement.textContent = counterValue;

decrementButton.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue -= 1;
        counterValueElement.textContent = counterValue;
    }
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    counterValueElement.textContent = counterValue;
});
