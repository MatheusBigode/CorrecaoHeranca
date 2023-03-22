class Animal {
    constructor(nome, cor){
        this.nome = nome,
        this.cor = cor
    }

    imprimir(){
        console.log(
            'Nome: ' + this.nome 
        + '\nCor: ' + this.cor)
    }

    correr(){
        console.log('Correu')
    }
}

class Cachorro extends Animal{ //a classe Cachorro é derivada da classe Animal, possuindo os mesmos atributos que a classe pai e outros
     constructor(nome, cor, qtdPatas){
        super(nome, cor) //quando forem os mesmos atributos, chama o construtor pai 
        this.qtdPatas = qtdPatas
     }
     imprimir(){ //quando chamar o método "imprimir()", ele imprimirá o método da classe filho, e não pai
        console.log(
            'Nome: ' + this.nome 
        + '\nCor: ' + this.cor
        + '\nQtd Patas: ' + this.qtdPatas)
    }
}