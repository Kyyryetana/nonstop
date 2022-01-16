function tarkista() {
  let lause = document.getElementById('annettuSana').value;
  let jono = "";

  if (lause == "ö" || lause == "Ö") {
    jono = "on";
  } else {
    jono = "ei ole";
  }
  document.getElementById('vastaus').innerHTML = jono;
}
