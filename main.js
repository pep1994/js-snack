// Creare un oggetto palla che abbia le seguenti proprietà. 

var palla = {
  'nome': 'palla',
  'peso': 10
}




document.getElementById('button').addEventListener('click', function () {
  var valInput = document.querySelector('input').value;
  palla.peso = valInput;

  for (var key in palla) {

    var text = document.createTextNode(key + ': ' +  palla[key]);
    document.getElementById('title').appendChild(text);

  }


});

var bici = [
{
  nome: 'bike',
  peso: 12
},
{
  nome: 'corsa',
  peso: 9
},
{
  nome: 'cross',
  peso: 10
}
];

var biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {

  if (biciLeggera.peso > bici[i].peso) {
    biciLeggera = bici[i];
  }

}

console.log(biciLeggera);
