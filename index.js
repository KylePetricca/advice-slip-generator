const btnEl = document.querySelector('button');
const idNumber = document.getElementById('id-num');
const adviceText = document.getElementById('advice');

const generateAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const properties = await response.json();

        if(!response.ok) {
            adviceText.innerHTML = "Oops, something went wrong. Please try again."
        }

        idNumber.innerHTML = `#${properties.slip.id}`;
        adviceText.innerHTML = `${properties.slip.advice}`;
    } catch (error) {
        adviceText.innerHTML = "Oops, something went wrong. Please try again."
    }
};

btnEl.addEventListener('click', generateAdvice);