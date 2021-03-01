let numberRef = document.querySelector('#value');
let counterValue = Number(numberRef.textContent);

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    numberRef.textContent = counterValue;
    return counterValue;
};

const decrement = () => {
    counterValue -= 1;
    numberRef.textContent = counterValue;
    
    return counterValue;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);