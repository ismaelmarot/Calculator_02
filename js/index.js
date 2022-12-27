const displayPreviousValue = document.getElementById('id-prev-value');
const displayCurrentValue = document.getElementById('id-curr-value');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue,displayCurrentValue);

buttonsNumbers.forEach(button =>{
    button.addEventListener('click',()=>{
        display.addNumber(button.innerHTML);
    });
});

buttonsOperators.forEach(button =>{
    button.addEventListener('click',()=>{
        display.compute(button.value);
    });
});