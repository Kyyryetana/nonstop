function jarjestaLuvut() {
  let luku1 = parseInt(document.getElementById('eka1').value);
  let luku2 = parseInt(document.getElementById('toka1').value);
  let luku3 = parseInt(document.getElementById('kolmas1').value);

  if (luku1 < luku2 && luku2 < luku3) {
    document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku1 + ' ' + luku2 + ' ' + luku3);
    } else if (luku1 < luku3 && luku3 < luku2) {
        document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku1 + ' ' + luku3 + ' ' + luku2);
    } else if (luku2 < luku1 && luku1 < luku3) {
        document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku2 + ' ' + luku1 + ' ' + luku3);
    } else if (luku2 < luku3 && luku3 < luku1) {
        document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku2 + ' ' + luku3 + ' ' + luku1);
    } else if (luku3 < luku2 && luku2 < luku1) {
        document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku3 + ' ' + luku2 + ' ' + luku1);
    } else if (luku3 < luku1 && luku1 < luku2) {
        document.getElementById("jarjestetytLuvut").innerHTML = ("Lukujen järjestys pienimmästä suurimpaan on: " + luku3 + ' ' + luku1 + ' ' + luku2);
    } else {
        alert("Lukuja ei voi järjestää pienimmästä suurimpaan, kokeile muuttaa lukuja.")
    }
}
//ensimmäinen valmis
//tästä alkaa toinen

function etsiSuurinNumero() {
  let luku1 = parseInt(document.getElementById('eka2').value);
  let luku2 = parseInt(document.getElementById('toka2').value);
  let luku3 = parseInt(document.getElementById('kolmas2').value);
  let luku4 = parseInt(document.getElementById('neljas2').value);
  let luku5 = parseInt(document.getElementById('viides2').value);

  if (luku1 < luku2 && luku3 < luku2 && luku4 < luku2 && luku5 < luku2) {
    document.getElementById("suurinNumero").innerHTML = ("Suurin numero on: " + luku2 + "!");
  } else if (luku1 < luku3 && luku2 < luku3 && luku4 < luku3 && luku5 < luku3) {
      document.getElementById("suurinNumero").innerHTML = ("Suurin numero on: " + luku3 + "!");
  } else if (luku1 < luku4 && luku2 < luku4 && luku3 < luku4 && luku5 < luku4) {
      document.getElementById("suurinNumero").innerHTML = ("Suurin numero on: " + luku4 + "!");
  } else if (luku1 < luku5 && luku2 < luku5 && luku3 < luku5 && luku4 < luku5) {
      document.getElementById("suurinNumero").innerHTML = ("Suurin numero on: " + luku5 + "!");
  } else if (luku2 < luku1 && luku3 < luku1 && luku4 < luku1 && luku5 < luku1) {
      document.getElementById("suurinNumero").innerHTML = ("Suurin numero on: " + luku1 + "!");
  } else {
      alert("Jotain meni pieleen, kokeile muuttaa lukuja.");
  }

}
//toinen valmis
//tästä alkaa kolmas

function tarkista3() {
  let luku = parseInt(document.getElementById('kolmas1').value);

  if (luku % 2 == 0) {
    document.getElementById('pariVaiPariton').innerHTML = ("Parillinen");
  } else {
    document.getElementById('pariVaiPariton').innerHTML = ("Pariton");
  }
}
//kolmas ei toimi
//tästä alkaa neljäs
