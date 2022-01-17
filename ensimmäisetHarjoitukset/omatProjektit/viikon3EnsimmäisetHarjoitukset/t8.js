function laskePotenssi() {
  let luku = document.getElementById('korotettavaLuku').value;
  let potenssi = document.getElementById('potenssiLuku').value;
  yht = luku;

  for (var i = 1; i < potenssi; i++) {
    yht *= luku;
  }
  document.getElementById('vastaus').innerHTML = yht;
}
