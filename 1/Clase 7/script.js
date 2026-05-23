const passwordInput =
document.getElementById("password");

const lengthSlider =
document.getElementById("length");

const lengthValue =
document.getElementById("length-value");

const strengthText =
document.getElementById("strength-text");


// actualizar el valor del slider que es la longitud de la contraseña

lengthSlider.addEventListener("input", () => {

  lengthValue.textContent =
  lengthSlider.value;

});


// generar contraseña

function generatePassword(){

  const uppercaseChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercaseChars =
  "abcdefghijklmnopqrstuvwxyz";

  const numberChars =
  "0123456789";

  const symbolChars =
  "!@#$%^&*()_+{}[]<>?/";

  let availableChars = "";
  let password = "";

  const includeUppercase =
  document.getElementById("uppercase").checked;

  const includeLowercase =
  document.getElementById("lowercase").checked;

  const includeNumbers =
  document.getElementById("numbers").checked;

  const includeSymbols =
  document.getElementById("symbols").checked;

  const length =
  parseInt(lengthSlider.value);

  // Validacion para asegurarse de que al menos una opción esté seleccionada

  if(
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ){
    alert("Selecciona al menos una opción");
    return;
  }

  // en este bloque se asegura de que al menos un caracter de cada tipo seleccionado esté incluido en la contraseña

  if(includeUppercase){

    availableChars += uppercaseChars;

    password += uppercaseChars[
      Math.floor(
        Math.random() * uppercaseChars.length
      )
    ];
  }

  if(includeLowercase){

    availableChars += lowercaseChars;

    password += lowercaseChars[
      Math.floor(
        Math.random() * lowercaseChars.length
      )
    ];
  }

  if(includeNumbers){

    availableChars += numberChars;

    password += numberChars[
      Math.floor(
        Math.random() * numberChars.length
      )
    ];
  }

  if(includeSymbols){

    availableChars += symbolChars;

    password += symbolChars[
      Math.floor(
        Math.random() * symbolChars.length
      )
    ];
  }

  // aqui se generan los caracteres restantes

  while(password.length < length){

    password += availableChars[
      Math.floor(
        Math.random() * availableChars.length
      )
    ];
  }

  // 

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordInput.value = password;

  updateStrength(password);
}


// rango de seguridad

function updateStrength(password){

  let strength = 0;

  if(password.length >= 8){
    strength++;
  }

  if(password.length >= 12){
    strength++;
  }

  if(/[A-Z]/.test(password)){
    strength++;
  }

  if(
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ){
    strength++;
  }

  const bars =
  document.querySelectorAll(".bar");

  bars.forEach(bar => {

    bar.style.background =
    "transparent";

  });

  for(let i = 0;
      i < strength && i < bars.length;
      i++){

    bars[i].style.background =
    "#a4ffaf";
  }

  // Text

  if(strength <= 1){

    strengthText.textContent =
    "Débil";

  }
  else if(strength == 2){

    strengthText.textContent =
    "Medio";

  }
  else if(strength == 3){

    strengthText.textContent =
    "Furte";

  }
  else{

    strengthText.textContent =
    "MUY FUERTE";
  }
}


// Copy

function copyPassword(){

  if(passwordInput.value === ""){
    return;
  }

  navigator.clipboard.writeText(
    passwordInput.value
  );

  alert("Contraseña copiada");
}


// Initial password

generatePassword();