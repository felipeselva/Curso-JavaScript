let amigo = {nome: 'josé',
sexo: 'M',
peso: 85.9,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

console.log(`${amigo.nome} pesa ${amigo.peso} e tem sexo ${amigo.sexo}`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} e tem sexo ${amigo.sexo}`)
