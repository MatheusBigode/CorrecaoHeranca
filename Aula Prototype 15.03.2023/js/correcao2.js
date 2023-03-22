
 //----------------ATIVIDADE 2---------------------------------

 class Animal {
    constructor(nome, comprimento, patas, cor, ambiente, velocidade){
        this.nome = nome,
        this.comprimento = comprimento,
        this.patas = patas,
        this.cor = cor,
        this.ambiente = ambiente, 
        this.velocidade = velocidade
    }

    AlterarNome(nome){
        this.nome = nome
    }
    Alteraromprimento(comprimento){
        this.comprimento = comprimento
    }
    AlterarPatas(patas){
        this.patas =patas
    }
    AlterarCor(cor){
        this.cor = cor
    }
    AlterarAmbiente(ambiente){
        this.ambiente = ambiente
    }
    AlterarVelocidade(velocidade){
        this.velocidade = velocidade
    }
    Dados(obj){
        console.table(obj)
    }
    //fim da classe
}

class Peixe extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica){
        super(nome, comprimento, patas, cor, ambiente, velocidade)
        this.caracteristica = caracteristica
    }
    AlterarCaracteristica(caracteristica){
        this.caracteristica = caracteristica
    }
    RetornarCaracteristica(){
        return this.caracteristica
    }
}

class Mamifero extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica, alimento){
        super(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica)
        this.alimento = alimento
    }

    AlterarAlimento(alimento){
        this.alimento = alimento
    }
    RetornarAlimento(){
        return this.alimento
    }
}