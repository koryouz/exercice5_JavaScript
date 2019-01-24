function toggle() {
  var regexName = /^[.][0-9]+$/;
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = Math.floor(firstNumber)*secondNumber;

  if (firstNumber.match(regexName) && secondNumber.match(regexName)){
    alert(result);
  }else {
    alert('Characteres invalides (chiffre à virgule)');
  }
}
