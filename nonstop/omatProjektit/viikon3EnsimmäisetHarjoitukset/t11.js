function suorita() {
  let ekaNumero = parseInt(document.getElementById('pienempiNumero').value);
  let tokaNumero = parseInt(document.getElementById('suurempiNumero').value);
  let parillinenJono = '';
  let paritonJono = '';
  let parillinenSumma = 0;
  let paritonSumma = 0;
  let parillinenAlku;
  let paritonAlku;

  if (ekaNumero%2 == 0) {
    parillinenAlku = ekaNumero;
  } else {
    parillinenAlku = ekaNumero + 1;
  } for (var i = parillinenAlku; i <= tokaNumero; i+=2) {
      parillinenJono += i + " ";
      parillinenSumma += i;
  }

  if (ekaNumero%2 == 0) {
    paritonAlku = ekaNumero + 1;
  } else {
    paritonAlku = ekaNumero;
  } for (var j = paritonAlku; j <= tokaNumero; j+=2) {
      paritonJono += j + " ";
      paritonSumma += j;
  }
  document.getElementById('parillisetSummat').innerHTML = "Parilliset numerot ovat " + parillinenJono + "ja niiden summat on " + parillinenSumma;

  document.getElementById('parittomatSummat').innerHTML = "Parittomat numerot ovat " + paritonJono + "ja niiden summat on " + paritonSumma;
}
