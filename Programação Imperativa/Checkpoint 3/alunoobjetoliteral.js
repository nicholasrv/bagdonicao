const aluno = require ('./alunometodo');
const arrayEstudantes = [];

arrayEstudantes.push(new aluno.Aluno('Jonatas Magalhaes', 1, [7,8,9]));
arrayEstudantes.push(new aluno.Aluno('Fabrina Nunes', 1, [6,6,9]));
arrayEstudantes.push(new aluno.Aluno('Maria Rosa Muller', 3, [7,8,10]));
arrayEstudantes.push(new aluno.Aluno('Matheus Galvao', 3, [6,7,8]));
arrayEstudantes.push(new aluno.Aluno('Matheus Afonso', 2, [7,8,9]));
arrayEstudantes.push(new aluno.Aluno('Nicholas Ruas Viegas', 1, [6,7,8]));

const curso ={
    nome: 'JavaScript',
    nota: 6,
    faltas: 3,
    estudantes: arrayEstudantes,
    adicionarEstudante: (nome, nota, faltas) => {
        this.estudantes.push(new aluno.Aluno(nome,nota,faltas));
    },
    // calculaAprovacao: (aluno) => {
    //     if(Aluno.nota >= this.nota && Aluno.faltas < this.faltas) {
    //         return true;
    //     } 
    //     else {
    //         if (Aluno.faltas === this.faltas && Aluno.nota > this.nota*1.1) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
};

module.exports = curso;
console.log(curso.calculaAprovacao(arrayEstudantes[0]));