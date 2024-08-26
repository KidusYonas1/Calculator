const headerContent = document.querySelector('.headContent');
const darkButton = document.getElementById('dark-button');
const lightButton = document.getElementById('light-button');
const displayInput = document.getElementById('display-input');
const calculatorContainer = document.querySelector('.calculator');
const buttonsContainer = document.querySelector('.buttons');
const allButtons = document.querySelectorAll('.button');
const whiteButton = document.querySelectorAll('.white');


darkButton.addEventListener('click', darkContent);
lightButton.addEventListener('click', lightContent);

function darkContent() {
    headerContent.style.background = '#18181b';
    headerContent.style.color = '#ffffff';
    darkButton.style.background = '#262626';
    lightButton.style.background = '#262626';
    darkButton.style.color = '#ffffff';
    lightButton.style.color = '#a3a3a3';
    lightButton.style.fontWeight = '100';
    displayInput.style.background = '#18181b';
    displayInput.style.color = '#ffffff';
    buttonsContainer.style.background = '#262626';
    calculatorContainer.style.background = '#18181b';
    calculatorContainer.style.boxShadow = '0px 0px 5px 0px #18181b'
    allButtons.forEach(button => {
        button.style.background = '#262626';
        button.style.boxShadow = '0px 0px 3px 0px #ffffff';
    });
    whiteButton.forEach(button => {
        button.style.color = '#ffffff';
    });
}

function lightContent() {
    headerContent.style.background = '#e5e7eb';
    headerContent.style.color = '#000';
    darkButton.style.background = '#ffffff';
    lightButton.style.background = '#ffffff';
    darkButton.style.color = '#a3a3a3';
    lightButton.style.color = '#000';
    darkButton.style.fontWeight = '100';
    displayInput.style.background = '#e5e7eb';
    displayInput.style.color = '#000';
    buttonsContainer.style.background = '#ffffff';
    calculatorContainer.style.background = '#e5e7eb';
    calculatorContainer.style.boxShadow = '0px 0px 5px 0px #e5e7eb';
    allButtons.forEach(button => {
        button.style.background = '#ffffff';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.19)';
    });
    whiteButton.forEach(button => {
        button.style.color = '#000';
    });
}

function appendContent(input) {
    displayInput.value += input;
}

function clearContent() {
    displayInput.value = '';
}

function calculate() {
    try {
        displayInput.value = eval(displayInput.value);
    } catch {
        displayInput.value = "Error";
    }
}