const aluno = new Aluno('João', 10, [7,8,9]);
function Aluno(nome, quantidadeDeFaltas, notas){
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;
    calcularMedia = () => (aluno.notas.reduce((a,b) => a+b ) / aluno.notas.length);
    faltas = () => aluno.quantidadeDeFaltas = ++aluno.quantidadeDeFaltas;
}
aluno.Aluno = Aluno;
module.exports = aluno;