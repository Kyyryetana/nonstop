function muunna() {
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';

  for(var i = 0; i < jono.length; i++)
  {
    taulu += '<tr>';
    for(var j = 0; j < jono[i].length; j++)
    {
      taulu += '<td>' + jono[i][j] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('vastaus').innerHTML = taulu;
}
