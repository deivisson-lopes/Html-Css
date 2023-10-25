/* const listaDeCompras = [
  'maçã',
  'gengibre',
  'miojo',
  'biscoito/bolacha',
  'banana',
  'feijão carioquinha',
  'pasta de dente',
]; // itens para comprar
const carrinho = []; // array vazio que irá receber os itens da variável listaDeCompras

for (let posiçãoNaLista = 0; posiçãoNaLista < listaDeCompras.length; posiçãoNaLista ++) {
  if(listaDeCompras[posiçãoNaLista] === 'maçã' || listaDeCompras[posiçãoNaLista] === 'banana') {
    carrinho.push(listaDeCompras[posiçãoNaLista]);
  }
}

console.log(carrinho);
*/
/*
let numero = 7;
for (let contador =1; contador <= 10; contador += 1) {
  console.log(`${numero} * ${contador} = ${contador * numero}`)
}
*/

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  console.log('Pessoa Amiga da Juliana');
  console.log(amizadesDaJuliana[indexDaJuliana]);
  for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
    console.log('Pessoa amiga do Adilson: ' + amizadesDoAdilson[indexDoAdilson]);
  }
}
