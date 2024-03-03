
function verificar(){

    data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var sexo = document.getElementById('res')


    if (fano.value.length == 0 || fano.value > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade <= 30) {
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade <=60) {
                //Adulto
                img.setAttribute('src', 'hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'garota.png')
            } else if (idade <= 30) {
                //jovem
                img.setAttribute('src', 'mjovem.png')
            } else if (idade <=60) {
                //Adulto
                img.setAttribute('src', 'madulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        model.style.textAlign = 'center'
        model.innerHTML = `Detectamos ${genero} com ${idade} anos`
        model.appendChild(img)
    }

}