function muutaSalasana() {
  let heikko = document.getElementById('salasana').value;
  let uusi = "";

  for (var i = 0; i < heikko.length; i++) {
    uusi+=heikko+i+"Ö";
    console.log(uusi);
  }
}
//kesken
