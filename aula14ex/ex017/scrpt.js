function gerar() {

    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
   
    

    if( num.value.length !== 0) {
        var n = Number(num.value)
        
    } else {
        window.alert('Por favor digite um numero') }
    tab.innerHTML=""
    for ( var i = 1; i <=10; i++){
        
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        
    }
}
