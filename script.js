'use strict';

const Feh = document.getElementById('Fahrenheit');
const Cel = document.getElementById('Celsius');
const kel = document.getElementById('Kelvin');

// fehraneit to celecius and Kelvin vice versa
Feh.addEventListener('input', function () {
  const val = parseFloat(this.value);
  const result1 = ((val - 32) * 5) / 9;
  const result2 = ((val - 32) * 5) / 9 + 273.15;
  let Celcon = (Cel.value = isNaN(result1) ? '' : result1);
  let Kelcon = (kel.value = isNaN(result2) ? '' : result2);
});
//celisuies to fahreneheit and kelvin  vice versa
Cel.addEventListener('input', function () {
  const val = parseFloat(this.value);
  const result1 = ((val + 32) * 9) / 5;
  const result2 = ((val + 32) * 9) / 5 - 273.15;
  let Fehcon = (Feh.value = isNaN(result1) ? '' : result1);
  let kelcon = (kel.value = isNaN(result2) ? '' : result2);
});
//kelvin to fehranheit and celesuis vice vers
kel.addEventListener('input', function () {
  const val = parseFloat(this.value);
  const result1 = ((val - 273.15) * 9) / 5 + 32;
  const result2 = val - 273.15;
  let Fehcon = (Feh.value = isNaN(result1) ? '' : result1);
  let celcon = (Cel.value = isNaN(result2) ? '' : result2);
});
