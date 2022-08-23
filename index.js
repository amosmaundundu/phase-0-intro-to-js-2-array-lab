const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(){
    return cats.push('Ralph');
 }
  cats.length=0;
  cats.push('Milo', 'Otis', 'Garfield');

  function destructivelyPrependCat(){
    return cats.unshift('Bob');
  }

  cats.length=0;
  cats.push('Milo','Otis','Garfield');
  function destructivelyRemoveLastCat(){
    return cats.pop();
  }
  cats.length=0;
  cats.push('Milo','Otis','Garfield');

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
cats.length=0;
cats.push('Milo','Otis','Garfield');

function appendCat(name){
    let name1=[...cats, "Broom"];
    return name1;
}
 
cats.length=0;
cats.push('Milo','Otis','Garfield');
function prependCat(name){
    let name2=['Arnold', ...cats]
    return name2;
}
cats.length=0;
cats.push('Milo','Otis','Garfield');
function removeLastCat(){
    let kitten=cats.slice(0,cats.length-1);
    return kitten;
}
cats.length=0;
cats.push('Milo','Otis','Garfield' );
function removeFirstCat(){
    let kitten1=cats.slice(1)
    return kitten1;
}
