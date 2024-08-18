function somaDosNumeros(){
    let resultado=0
    while(true){
        let entrada=prompt('Digite um número (ou "Acabou" para terminar): ')
        if(entrada==='Acabou'){
            break
        }
        let numero=parseFloat(entrada)
        if(!isNaN(numero)){
            resultado+=numero
        }else{
            alert('Erro: Por favor, insira um número válido.')
        }
    }
    alert('A soma dos números digitados é: '+resultado)
}
somaDosNumeros()


//código q tb tive ajuda do meu mano Big Ear, obrigado por ter me ajudado, eu estou me sentindo um pouco maluco mas vou ficar bem