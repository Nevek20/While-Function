function sominha(){
    var soma = 0
    var i = 1
    while (i <= 100){
        soma += i
        i++
    }
    return soma
}
console.log ('resultado: ' + sominha())

//resumindo a ópera, a função sominha tem duas variáveis, a var soma e a var i, a soma = ela msm + a var i, enquanto a var i ser menor ou igual a 100 a var i vai cada vez aumentar, dps disso se retorna o valor e é posto o resultado pelo console.log