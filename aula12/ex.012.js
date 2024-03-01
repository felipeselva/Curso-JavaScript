var agr = new Date()
var horas = agr.getHours()

console.log(`Agora são ${horas}Hrs`)

if(horas >= 0 && horas < 6) {
    console.log ("Boa madrugada")
}

else if (horas > 6 && horas <= 12) {
    console.log("Bom dia")
}

else if (horas > 12 && horas < 18) {
    console.log("Boa tarde")
}
 
else {
    console.log("Boa noite")
}