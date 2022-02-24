function tarkista() {
  let lause = document.getElementById('annettuSana').value;
  let tieto = "ei ole";

  for (var i = 0; i < lause.length; i++) {
    if (lause[i] == "ö" || lause[i] == "Ö") {
      tieto = "on"
    }
    document.getElementById('vastaus').innerHTML = tieto;
  }
}
