
function etsi() {
  let eka = parseInt(document.getElementById('ekaLuku').value);
  let toka = parseInt(document.getElementById('tokaLuku').value);
  let kolmas = parseInt(document.getElementById('kolmasLuku').value);
  let neljas = parseInt(document.getElementById('neljasLuku').value);
  let viides = parseInt(document.getElementById('viidesLuku').value);
  let jono = [eka, toka, kolmas, neljas, viides];

  jono.sort(function(a, b){return a - b});

  document.getElementById('vastaus').innerHTML = "Pienin luku on: " +
  jono[0] + " " + "ja suurin luku on: " + jono[4];
}
