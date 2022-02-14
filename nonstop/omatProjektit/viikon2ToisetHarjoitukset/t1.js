function positiivinen() {
  let lukema = parseInt(document.getElementById('luku1').value);

  if (lukema >= 0) {
    document.getElementById('vastaus1').innerHTML = "Luku on positiivinen.";
  } else {
    document.getElementById('vastaus1').innerHTML = "Luku on negatiivinen.";
  }
}
