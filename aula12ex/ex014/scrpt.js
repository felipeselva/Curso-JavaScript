function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML= `Agora são ${hora} hrs`

if(hora >= 0 && hora< 12) {
    //BOM DIA 
img.src = 'manha.png'
document.body.style.background = '#fcdb82'

} else if (hora > 12 && hora <= 18) {
    // boa tarde
img.src='tarde.png'
document.body.style.background = '#ffbe88'
} else {
    //Boa noite 
img.src='noite.png'
document.body.style.background = '#3173ab'

}


}
