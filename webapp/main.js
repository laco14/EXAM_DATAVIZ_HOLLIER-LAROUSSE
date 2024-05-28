document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');
    const increaseButton = document.getElementById('increase');

    let counter = 0;

    decreaseButton.addEventListener('click', () => {
        counter--;
        updateCounterDisplay();
    });

    resetButton.addEventListener('click', () => {
        counter = 0;
        updateCounterDisplay();
    });

    increaseButton.addEventListener('click', () => {
        counter++;
        updateCounterDisplay();
    });

    function updateCounterDisplay() {
        counterDisplay.textContent = counter;
    }
});
