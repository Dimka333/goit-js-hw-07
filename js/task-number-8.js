// const inputRef = document.querySelector('#controls > input');
// const renderRef = document.querySelector('button[data-action="render"]');
// const destroyRef = document.querySelector('button[data-action="destroy"]');
// const divBoxes = document.querySelector('#boxes');
// let randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
// let sizeBox = 30;



// function createBoxes(amount) {
//     amount = Number(inputRef.value);
//     if (amount > 0) {
        
// let newDiv = document.createElement('div');
//     newDiv.style.backgroundColor = randomColor;
//     newDiv.style.width = sizeBox + 'px';
//     newDiv.style.height = sizeBox + 'px';
//     sizeBox += 10;
//         newDiv.appendChild(divBoxes);
//         amount = amount - 1;
//     }
//     else console.log('Дивы кончились =(');
        
// };

// function destroyBoxes() {
//     while (divBoxes.firstChild) {
//         divBoxes.removeChild(divBoxes.firstChild)
//     }
// };

// renderRef.addEventListener('click', createBoxes);
// destroyRef.addEventListener('click', destroyBoxes);

// console.log(divBoxes);



const inputRef = document.querySelector('#controls > input');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');
function createBoxes() {
    let sizeBox = 30;
    let startValue = 1
    while (+inputRef.value >= startValue ) {
    let randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    startValue +=1
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = randomColor;
    newDiv.style.width = sizeBox + 'px';
    newDiv.style.height = sizeBox + 'px';
    sizeBox += 10;
    divBoxes.appendChild(newDiv);
    // amount = amount - 1;
    }
    console.log('Дивы кончились =(');
};
function destroyBoxes() {
    divBoxes.innerHTML = ''
    inputRef.value = ''
};
renderRef.addEventListener('click', createBoxes);
destroyRef.addEventListener('click', destroyBoxes);