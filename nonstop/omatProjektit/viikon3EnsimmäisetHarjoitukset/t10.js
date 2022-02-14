function muutaSalasana() {
  vanhaSalasana = document.getElementById('salasana').value;
  let taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', "w", 'x', 'y', 'z', 'å', 'ä', 'ö'];
  let jono = [];
  let vahvaSalasana='';

  for(let i = 0; i < vanhaSalasana.length; i++) {
    let eka = vanhaSalasana[i];
    jono.push(eka);
    let luku = Math.floor(Math.random() * taulukko.length);
    let toka = taulukko[luku];
    jono.push(toka);
    console.log(luku);
  }
  vahvaSalasana = jono.join("");
  document.getElementById('vastaus').innerHTML = vahvaSalasana;
}
