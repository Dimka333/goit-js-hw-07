const inputRageRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputRageRef.setAttribute('min', '20');
inputRageRef.setAttribute('max', '100');
inputRageRef.setAttribute('value', '50');


function fontSizeControl(event) {
    spanTextRef.style.fontSize = (event.target.value) + 'px';
};

inputRageRef.addEventListener('input', fontSizeControl);