function arvoNumerot() {
  let lottonumerot = [];
  let temp;

  for (let i = 0; i < 7; i++) {
    temp = Math.floor(Math.random() * 40);
    lottonumerot[i] = temp;
  }
  lottonumerot.sort(function(a, b){return a - b});
  document.getElementById('vastaus').innerHTML = lottonumerot;
}
