function gonder(){
    console.log("ulke")
    let ad,soyad;
    ad = document.getElementById("txtad").value;
    console.log(ad)
    soyad = document.getElementById("txtsoyad").value;
    document.querySelector("div").innerHTML= ad +""+ soyad;
}
function ulke(){
    let ulke;
    ulke=document.getElementById("listeulke").selectedIndex;
    document.getElementById("beygir").innerHTML="";
    if(ulke==0){
        document.body.style.backgroundColor = "red";
        document.getElementById("beygir").innerHTML="beygir gücü";
    }
    else if(ulke==1){
        document.body.style.backgroundImage = "url('supraaa.jpg')";
        document.getElementById("beygir").innerHTML="beygir gücü: 335 beygir";
    }
    else if(ulke==2){
        document.body.style.backgroundImage = "url('nissangtr.jpg')";
        document.getElementById("beygir").innerHTML="beygir gücü: 565 beygir";
    }
    else if(ulke==3){
        document.body.style.backgroundImage = "url('maqleren.jpg')";
        document.getElementById("beygir").innerHTML="beygir gücü: 620 beygir";
    }
    else if(ulke==4){
        document.body.style.backgroundImage = "url('mustang.jpg')";
        document.getElementById("beygir").innerHTML="beygir gücü: 720 beygir";
    }
    else if(ulke==5){
        document.body.style.backgroundImage = "url('dodge.jpg')";
        document.getElementById("beygir").innerHTML="beygir gücü: 800 beygir";
    }
   }