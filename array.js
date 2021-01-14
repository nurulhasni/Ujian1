
var buah = ["Mangga", "Pisang", "Nangka"];
var sayuran = ["Timun", "Tomat", "Wortel"];

/*console.log(buah);
console.log(sayuran);
console.log(buah[0]);
console.log(sayuran[2]);

for(var i = 0; i < 5; i++){
    console.log(i);
}


var x = 6;
while (x < 5){
    x++;
    console.log("nilai x"+x);
}


var y = 6;
do {
  x++;  
  console.log("nilai y"+y);
} while (y < 5);
*/

var lstBuah = "";
for (i = 0; i < buah.length; i++) {
    console.log(buah[i]);
    lstBuah = lstBuah + "<li>" + buah[i] + "</li>";
}

console.log(lstBuah);
document.getElementById("buah").innerHTML = lstBuah;


function createListSayur() {
    var lstSayuran = "";
    var counter = 0;
    while (counter < sayuran.length) {

        lstSayuran += "<li>" + sayuran[counter] + "</li>";
        counter++;
    }
    document.getElementById("sayuran").innerHTML = lstSayuran;
}
