function muutaSalasana() {
  let heikko = document.getElementById('salasana').value;
  let salasana = "";

  for(let i=0 ; i < heikko.length; i++){
    salasana += heikko[i] + 'Ö'
    document.getElementById('vastaus').textContent = salasana;
  }
}
//kesken
