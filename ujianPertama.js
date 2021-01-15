
/*
 function JumlahMatrix(i){
   /* var jml = document.getElementById("txtInput").value;
    var tmp = "";
    for (var i = 0; i<jml; i++){
       
       tmp += '<input type="text" id="input1"><br>';
    }

    document.getElementById("mt1").innerHTML = tmp;
    document.getElementById("mt2").innerHTML = tmp;
*/

   /* var jum = i.value;
    var tmp = "";
    
    for(a = 0; a < jum; a++){
    for(b = 0; b < jum; b++){
    if(a == b){
     tmp = document.write("<input type='text'>");
    }
    
    else{
    tmp = document.write("<input type='text'>");
        }
    }
    tmp = document.write("<br />");
    }

}*/

function JumlahMatrix(){
     var jml = document.getElementById("txtInput").value;
     var tmp = "";
     var tmp2 = "";
     for (var i = 0; i<jml; i++){
        for (var z = 0; z<jml; z++){
            //tmp += '<input type="text" id="angka1">';
            tmp += '<table><tr><td><input type="text"/></td></tr></table>'
        }
        document.getElementById("mt1").innerHTML = tmp ;
     }
     //document.getElementById("mt1").innerHTML = tmp ;
     //document.getElementById("mt2").innerHTML = tmp ;
     for (var i = 0; i<jml; i++){
        for (var z = 0; z<jml; z++){
            tmp2 += '<table><tr><td><input type="text"/></td></tr></table>'
            
        }
        document.getElementById("mt2").innerHTML = tmp2 ;
     }
     
    }

function TambahMatrix(){
    var hasil = "";
   // var hasilS = "";
   // var a = Number(document.getElementById("angka1").value);
    //var b = Number(document.getElementById("angka2").value);
    var jml = document.getElementById("txtInput").value;
    for (var i = 0; i<jml; i++){
        for (var z = 0; z<jml; z++){
          
            hasil += '<table><tr><td><input type="text"/></td></tr></table>' ;
            
        }
        document.getElementById("hasil").innerHTML = hasil ;
     }
     JumlahMatrix();
}