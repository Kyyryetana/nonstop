function jarjestaLuvut() {
  let luku1 = parseInt(document.getElementById('eka1').value);
  let luku2 = parseInt(document.getElementById('toka1').value);
  let luku3 = parseInt(document.getElementById('kolmas1').value);

  if (luku1 < luku2 && luku2 < luku3) {
    document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku1 + ' ' + luku2 + ' ' + luku3);
  }

}




//rakenna ensimmäinen loppuun
//tästä alkaa toka
