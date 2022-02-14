function tulosta() {
  let tulostus = "";

  for (var i = 0; i < 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
      tulostus += "hipheijaa ";
    } else if (i%5 == 0) {
      tulostus += "heijaa ";
    } else if (i%3 == 0) {
      tulostus += "hip ";
    } else {
      tulostus += i + " ";
    }
    document.getElementById('vastaus').innerHTML = tulostus;
  }
}
