//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  const nomes = names.reduce((acc, nomes) => acc+= nomes.match(/a/ig).length , 0)
  return nomes
  }

  console.log(containsA ());