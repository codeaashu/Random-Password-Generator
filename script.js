/* ===( CODE AASHU )=== */
const passwordInput = document.getElementById('password-input');
const button = document.querySelector('.btn');
const copyButton = document.querySelector('.copy-btn');
const messageBox  = document.getElementById('message-box');

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase =  upperCase.toLowerCase();
const numbers  = "0123456789";
const symbol = "@#*";

const allChar = upperCase + lowerCase +numbers +symbol;

function createPassword(){
    let password = " ";

    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordInput.value= password;
}

button.addEventListener('click', ()=>{
   createPassword();
   messageBox.style.scale = '0';

})

function copyText(){
    passwordInput.select();
    document.execCommand("copy"); 
};

copyButton.addEventListener('click', ()=>{
        copyText();
        messageBox.style.scale = '1';
        
});