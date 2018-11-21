function bilgen(){
  let billgen = [];
  for (var i = 1; i < 20; i++) {
    if (i%2===0) {
      billgen.push(i)

    }
  }
  return billgen
}
//console.log(bilgen())
// kalo bilganjil nilai habis modular nya 1, kalo genep 0

function bilgan() {
  let we = [];

  for (var i = 1; i < 10; i++) {
    if (i%2===1) { we.push(i)

    }
  }
  return we
}

console.log(bilgan())
