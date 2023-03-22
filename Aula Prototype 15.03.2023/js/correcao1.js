//----------------------ATIVIDADE 2--------
class Produto {
    constructor(nome, preço, estado){
        this.nome = nome,
        this.preço = preço,
        this.estado = estado
    }
    display(){
        console.table(
        'Produto: ' + this.nome +
        '\nPreço Inicial: R$' + this.preço + 
        '\nEstado: ' + this.estado 
        )
    }
}

class Comum extends Produto{
    display(){
        super.display()
        console.table(
        '\nPreço Final: R$' + this.preço)
    }
}

class Usado extends Produto{
    constructor(nome, preço, estado){
        super(nome, preço, estado)
    }
    display(){
        super.display()
        console.table(
        '\nPreço Final: R$' + (this.preço - (this.preço * 0.3))
        )
    }
    
}

class Importado extends Produto{
    constructor(nome, preço, estado){
        super(nome, preço, estado)
    }

    display(){
        super.display()
        console.table(
        '\nPreço Final: R$' + (this.preço + this.preço)
        )
    }
    
}
