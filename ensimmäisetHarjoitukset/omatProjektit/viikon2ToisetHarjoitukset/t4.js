function suorita() {
  let eka = parseInt(document.getElementById('eka1').value);
  let toka = parseInt(document.getElementById('toka2').value);
  let kolmas = parseInt(document.getElementById('kolmas3').value);
  let neljas = parseInt(document.getElementById('neljas4').value);
  let viides = parseInt(document.getElementById('viides5').value);
  let summa = eka + toka + kolmas + neljas + viides;
  let keskiarvo = summa / 5;

  document.getElementById('vastaus').innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}
