document.getElementById('generate-btn').addEventListener('click', () => {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultElement = document.getElementById('result');

    if (isNaN(min) || isNaN(max) || min > max) {
        resultElement.textContent = 'Please enter valid numbers with Min less than or equal to Max.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Random Number: ${randomNumber}`;
});