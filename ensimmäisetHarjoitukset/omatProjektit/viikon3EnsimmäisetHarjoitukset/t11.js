function suorita() {
  let pieniNumero = parseInt(document.getElementById('pienempiNumero').value);
  let suuriNumero = parseInt(document.getElementById('suurempiNumero').value);
  let parillinenJono = [];
  let paritonJono = [];

  if (pieniNumero%2 == 0) {
      for (let i = 0; i < suuriNumero; i++) {
        parillinenJono.push();
      }

      } else if (pieniNumero%2 != 0) {
          for (let j = 1; i < suuriNumero; i+2) {
            paritonJono.push();
      }

      } else {
          alert("Yritä uudestaan");
    }
    console.log(parillinenJono);
}
//kesken
