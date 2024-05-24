class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }
    
    calculaMediaValida() {
        const notasOrdenadas = this.notas.slice().sort((a, b) => b - a);
        const notasIntermediarias = notasOrdenadas.slice(1, -1);
        
        const somaDasNotas = notasIntermediarias.reduce((acc, nota) => acc += nota, 0);
        return somaDasNotas / notasIntermediarias.length;
    }
    
    obtemNomeAtleta() {
        return this.nome;
    }
    
    obtemIdadeAtleta() {
        return this.idade;
    }
    
    obtemPesoAtleta() {
        return this.peso;
    }
    
    obtemNotasAtleta() {
        return this.notas;
    }
    
    obtemCategoria() {
        return this.calculaCategoria();
    }
    
    obtemIMC() {
        return this.calculaIMC();
    }
    
    obtemMediaValida() {
        return this.calculaMediaValida();
    }
    
    toString() {
        return `Nome: ${this.obtemNomeAtleta()}
Idade: ${this.obtemIdadeAtleta()}
Peso: ${this.obtemPesoAtleta()}
Altura: ${this.altura}
Notas: ${this.obtemNotasAtleta()}
Categoria: ${this.obtemCategoria()}
IMC: ${this.obtemIMC().toFixed(2)}
Média Válida: ${this.obtemMediaValida().toFixed(2)}`;
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.toString());
