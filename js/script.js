function konversi() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById(
    "calculation-text"
  ).innerText = `${celsius}°C (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reset() {
  document.getElementById("celsius").value = "90";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation-text").innerText = "";
}

function reverse() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById("calculation-text").innerText = `${fahrenheit.toFixed(
    2
  )}°F - 32 x 5/9 = ${celsius.toFixed(2)}°C`;
}
