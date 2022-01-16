function laskeKertoma() {
  let kertomaLuku = document.getElementById('kertoma-luku').value;
  let lasku = 1;

  for (let i = 1; i <= kertomaLuku; i++) {
    lasku = lasku * i;
  }
  document.getElementById('vastaus').innerHTML = "Lukeman " + kertomaLuku  + " " + "kertoma on: " + lasku;
}
