function verificar(){

var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var pas = document.getElementById('txtp')
var res = document.getElementById('res')


if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('[ERRO] estão faltando dados')
} else {
    res.innerHTML = 'Contando: '
    var inin = Number(ini.value)
    var fimn = Number(fim.value)
    var pasn = Number(pas.value)

    if (inin < fimn) {
        for( var i = inin; i <= fimn; i+= pasn) {
    res.innerHTML += `${i} \u{1F92C} ` 
    }
} else {
    for ( var c = inin; c >= fimn; c-= pasn ) {
    res.innerHTML += `${c} \u{1F92C}`
    }
}

}
}
