import './App.css';

let password = document.getElementById("password")
  function generatePW() {
    let characters = '0123456789abcdefghijklmnopqrstuvwxz!!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXZ'
    let passwordLength = 8
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length)
      password += characters.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById('password').value = password
  }
  function copyPW(){
    let copyText = document.getElementById('password')
    copyText.ariaSelected()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
  }
;
