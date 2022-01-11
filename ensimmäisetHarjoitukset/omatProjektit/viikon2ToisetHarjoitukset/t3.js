function tarkista() {
  let vuosiLuku = parseInt(document.getElementById('vuodenLuku').value);

  if (vuosiLuku%4 == 0 && vuosiLuku%100 != 0) {
    document.getElementById('vastaus').innerHTML = "Vuosi on karkausvuosi";
  } else if (vuosiLuku%400 == 0) {
      document.getElementById('vastaus').innerHTML = "Vuosi on karkausvuosi";
    } else {
      document.getElementById('vastaus').innerHTML = "Vuosi ei ole karkausvuosi";
    }
  }
