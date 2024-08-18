function Fibonacci(n) {
    if (typeof n !== 'number' || n <= 0) {
        console.error('Por favor, forneça um número positivo.')
        return;
    }

    let a = 0, b = 1
    let resultado = []

    while (n-- > 0) {
        resultado.push(a);
        [a, b] = [b, a + b]
    }a
    return resultado
}
console.log(Fibonacci(11))

//dale ja na funcão do meu mano Fifi, grande parte do codigo eu aprendi com meu amigo Orelha, graças a ele eu consegui fazer esse exercicio, as mudanças significativas foram o typeof n !== 'number': q verifica se o tipo da variável N n é um número. Se N n for um número (por exemplo, se for uma string ou um objeto), a condição vai ser True e q o resultado sairá por meio de uma List invés de esgormitado no console.log