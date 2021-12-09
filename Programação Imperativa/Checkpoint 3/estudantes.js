const Aluno = require('./aluno');
const curso = require('./curso');

const estudante1 = new Aluno('Marcelo', 2, [7, 8, 9]);
const estudante2 = new Aluno('Paulo', 3, [9, 7, 8]);
const estudante3 = new Aluno('Caroline', 1, [9, 7, 8]);
const estudante4 = new Aluno('Mariana', 2, [9, 7, 8]);
const estudante5 = new Aluno('Isabel', 1, [6, 7, 7]);

curso.adicionarAluno(estudante1, estudante2, estudante3, estudante4, estudante5)
console.log(curso.aprovarAluno(estudante3))
console.log(curso.listarAprovados())