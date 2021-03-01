const spanTextRef = document.querySelector('#name-output');
const inputRef = document.querySelector('#name-input');

inputRef.addEventListener('input', event => {
    event.preventDefault();
    spanTextRef.textContent = event.currentTarget.value;
    if (spanTextRef.textContent === '') {
        spanTextRef.textContent = 'Незнакомец';
    }
    
});



