function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}

console.log("täällä ollaan");

let ika = 16; // numoreot kirjoitetaan ilman lainausmerkkejä
ika = ika + 1; // integer (int)

let ikakirjaimina = "17" //string (str)
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log("sinun ikäsi on: " + ika);

let juuvaiei = true; //boolean

console.log(juuvaiei);

let nimi = "keijo";

console.log("kirjoita isolla:" + nimi.toUpperCase());

console.log("splittausharjoitus: " + nimi.split(" ")[0]);

//while ja for loop

for(let i=0; i<=10; i++){
  console.log("loopin iteraatiolku on: " + i);
}

if(ika > 18 || nimi == "nico ruusunen"){
  console.log("onnea olet täysi-ikäinen!");
}
else if (ika === 18 && nimi == "keijo"){
console.log("onnea keijo, olet juuri ja juuri täysi-ikäinen!");
}
else{
  console.error("kasva vielä vähän...");
}

console.log(laskutehtava(843937, 983789));

let pvm = "2021/08/18";

function pvmfin(vuosi, kk, pv){
 if (kk==03 || kk==04 || kk==05){
    return "kevät " + pv+"."+kk+"."+vuosi;

  }
  else if(kk==06 || kk==07 || kk==08){
    return "kesä " + pv+"."+kk+"."+vuosi;
  }
  else if(kk==09 || kk==10 || kk==11){
     return "syksy " + pv+"."+kk+"."+vuosi;
  }
  else{
     return "talvigv+"."+kk+"."+vuosi;
  }
}


for(let i=1; i<16; i++){
console.log(i+ " " + pvmfin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));
}


/*
monen 
rivin
kommentti
*/