function viikonpaiva() {
  let paiva = parseInt(document.getElementById('viikonpaivaNro').value);

  switch (paiva) {
    case 1:
      document.getElementById('vastaus').innerHTML = "Maanantai";
      break;
    case 2:
      document.getElementById('vastaus').innerHTML = "Tiistai";
      break;
    case 3:
      document.getElementById('vastaus').innerHTML = "Keskiviikko";
      break;
    case 4:
      document.getElementById('vastaus').innerHTML = "Torstai";
      break;
    case 5:
      document.getElementById('vastaus').innerHTML = "Perjantai";
      break;
    case 6:
      document.getElementById('vastaus').innerHTML = "Lauantai";
      break;
    case 7:
      document.getElementById('vastaus').innerHTML = "Sunnuntai";
      break;
    default:
      alert("Älä leiki mun tunteilla");
      break;
  }
}
