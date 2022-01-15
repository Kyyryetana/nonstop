function tarkista() {
  let sana = document.getElementById('annettuSana').value;
  let onko = "ei ole";

  for (let i = 0; i < sana.length; i++) {
    if (sana[i] == 'ö' || sana[i] == 'Ö') {
      onko = "on";
    }
    document.getElementById('vastaus').innerHTML = onko;
  }
}
console.log(onko);
