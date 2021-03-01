const inputRef = document.querySelector('#validation-input');


function inputValueValid(event) {
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');
    
};

function removeClass() {
    if (inputRef.classList.contains('valid')) { 
        inputRef.classList.remove('valid')
    }
    if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid')
}
};

inputRef.addEventListener('blur', inputValueValid);
inputRef.addEventListener('focus', removeClass);

