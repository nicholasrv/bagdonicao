function Aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia = () => {
       const somaMedia = this.notas.reduce((acumulador, nota) => acumulador + nota)
       const qtdNotas = this.notas.length;
       const media = somaMedia / qtdNotas;

       return media;
    }
    this.adicionarFalta = () => this.qtdFaltas++
}

module.exports = Aluno