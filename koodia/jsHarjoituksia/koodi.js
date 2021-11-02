var a = 2;
var b = 3;
var c = 8;
var taulukkomuuttuja = [34, 566, 71, 89];

//1
function tehtavaYksi() {
  console.log(a + b);
}
//2
function tehtavaKaksi() {
  console.log(taulukkomuuttuja[0]);
}
//3
function tehtavaKolme() {
  if ((a + b) < 100) {
    console.log("Lukujen summa on alle 100");
  }
  else {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}
//4
function tehtavaNelja() {
  if (a == b) {
    console.log("Samat");
  }
  else {
    console.log("Eri luvut!");
  }
}
//5
function tehtavaViisi() {
  console.log(a * 3600 + b * 60 + c);
}
//6
//kesken
