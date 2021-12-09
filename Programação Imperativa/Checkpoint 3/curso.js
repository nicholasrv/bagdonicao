let curso = {
    nome: 'JavaScript',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [],
    adicionarAluno: function(...aluno) {
       this.listaEstudantes.push(...aluno)
   },
   aprovarAluno: function(aluno) {
       let media = aluno.calcularMedia()
       if (aluno.qtdFaltas < this.faltasMaximas && media >= this.notaAprovacao) {
       return true
       }else if(aluno.qtdFaltas == this.faltasMaximas && media >= this.notaAprovacao * 1.1){
       return true
       }else{
       return false
       }
   },
   listarAprovados: function(){
       let listaDeAprovados = [];
       this.listaEstudantes.forEach(aluno => {
          listaDeAprovados.push(this.aprovarAluno(aluno))
       })
       return listaDeAprovados
   }
 }
 
 module.exports = curso;