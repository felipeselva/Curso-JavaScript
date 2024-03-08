var num = document.getElementById('numero')
var arm = document.getElementById('arm')
var res = document.querySelector('div#res')
var val = []
    
function inNumero(n) {
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
    
function inArm(n,l) {
    if(l.indexOf(Number(n)) != - 1) {
        return true
    }
        return false
}
    
    
    function add() {
    

  if ( inNumero(num.value) && !inArm(num.value, val)) {
   
    val.push(Number(num.value))
    let item = document.createElement('option')
    item.text= `Valor ${num.value} adicionado`
    arm.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('ERRO, valor invalido ou já adicionada a lista')
   
    }
num.value = ''
num.focus()
  }


function del() {

    if ( val.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0

        for ( let pos in val) {
            soma += val[pos]
            if(val [pos] > maior){
                maior = val[pos]
            if(val[pos] < menor)
                menor = val[pos]
            }
        }
        media = soma / tot
        res.innerHTML= ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> a soma dos valores informados foi ${soma} </p>`
        res.innerHTML += `<p> a media dos valores informados foi ${media} </p>`


    }
}