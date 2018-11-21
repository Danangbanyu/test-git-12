function ipelse(){
let a = 6;

if (a>=10) { console.log('bagus')}
else if (a>=9) { console.log('leh uga')}
else if (a>=7) { console.log('baik lah')}
else if (a=5) { console.log('baik ')}
else {
  console.log("remed")
}
}
// nyoba fungsi for biar jadi banyak

function por(){
  for (s=0;s<10; s++)
  console.log('nomer '+s)
  return 'no '+s
}

ipelse()
console.log(por())
