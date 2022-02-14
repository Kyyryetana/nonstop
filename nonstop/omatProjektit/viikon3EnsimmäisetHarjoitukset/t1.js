function tulostaParilliset() {
  var valinta = parseInt(document.getElementById('parilliset').value);
  var jono = "";
  for(var i = 2; i <= valinta; i+=2)
  {
    jono+=i+" ";
  }
    document.getElementById('vastaus').innerHTML = jono;
    console.log(jono);
}
