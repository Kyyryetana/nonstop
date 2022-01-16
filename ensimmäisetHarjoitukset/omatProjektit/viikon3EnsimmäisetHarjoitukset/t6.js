function tulosta() {
  let jono = "";

  for (var i = 1; i <= 10; i++) {
    jono += i + " ";
  }
  document.getElementById('vastaus').innerHTML = jono;
}
