//menampilkan array cars
//dgn pilihan pakek for, jadi milih semua
function aneh(){
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var s = cars.length
console.log(s)
for (var i = 0; i < cars.length; i++) {
  console.log('ke ' + cars[i])
}
}
//console.log(aneh())
//==============================================
// menampilkan yg ganjil pake length?
function heboh() {
  let a1 = [1,2,3,4,5]
  let a2 = []
console.log(a1.length)
for (var i = 1; i < a1.length; i++) {
  if (i%2===1) { a2.push(i)

  }
}
return a2
}
//console.log(heboh())
//==============================================
// sama kayak functin pertama
function heri() {
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars.length;
var text = "";

for (; i < len; ) {
   console.log( text = cars[i] + i++)}

}

//heri()
//==============================================
function orang() {
  var person = {fname:"John", lname:"Doe", age:25};

for (q in person) {
    console.log( person[q])
}
}
//orang()
//==============================================
function weq() {
  let a2 = ['sapi','kuda','kucing','sawi','soto','coto']
  let a3 = 0
  while (a2[a3]) { a3++;
//kalo pake while ga perlu (;__;), jadi (_____)
  }
  return a2
}
//console.log(weq())
//==============================================
function dateeee() {
  let awf = new Date();
console.log(awf.Date.Now());

var moonLanding = new  Date();
// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// expected output: -14254782000
}

//dateeee()
//==============================================
function slowdownBB(){
  let a = 8;
 let b;
 //sapi
 
 // jadi pake let b untuk
 // nggantiin console.log('....')
 //biar hemat
  if (a <=5) { console.log('get back to sleep')}
  else if  (a <=9) { b='good morning'}
  else if  (a <=13) { b='have a good day'}
  else if  (a <=16) { b='good afternoon'}
  else if  (a <=21) { b='good evening'}
  else { b='good night'}
  console.log(b)
  console.log('now the date is: '+new Date())
}
//slowdownBB()
//==============================================

function ctokv() {
  let x2 = 60;
  console.log('input ='+x2+' C');
  let c = x2 - 273.15;
  let k = x2 + 273.15;
  //console.log('celcius ='+c)

  console.log('kelvin ='+k+' K')
}

ctokv()
