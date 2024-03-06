var num = [ 5,8,2,9,3]
num.push(1)
//num.sort()
console.log(num)
console.log(`O tamnha do vetor é ${num.length}`)
console.log(`O Primeira valor do vetor é ${num[0]}`)

/*for(var i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} */

for (var i in num) {
console.log(`A posição ${i} tem o valor ${num[i]}`)
}
var pos = num.indexOf(12)
if( pos == -1) {
    console.log('O Valor não foi encontrado')
} else {
    console.log(`O valor 3 está na posição ${pos}`)

}
