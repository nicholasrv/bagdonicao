    // 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.
    
    // 2. Converta o objeto literal em um json.

    // 3. Armazene o json no localStorage ou sessionStorage.


   //-----------------------
    //----
    ///RESOLUCAO ABAIXO -
    //-----------------------
    //----


    // 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.

    let minhaListaDeTarefas = {
        id: '0',
        tarefa: 'Ir para a academia',
        autor: 'Nicholas Ruas Viegas',
    }
    
    console.log(minhaListaDeTarefas.id);
    console.log(minhaListaDeTarefas.tarefa);
    console.log(minhaListaDeTarefas.autor);

    // minhaListaDeTarefas.cadastrarNovasTarefas = function (id, tarefa, autor) {
    //     var novasTarefas = `${tarefa} , ${autor}`;
    
    //     minhaListaDeTarefas[id].novasTarefas = novasTarefas;
    // }

    // minhaListaDeTarefas.cadastrarNovasTarefas(0, 'Masculino', '26');
    // minhaListaDeTarefas.cadastrarNovasTarefas(1, 'Masculino', '26');
    // minhaListaDeTarefas.cadastrarNovasTarefas(2, 'Masculino', '26');
    // minhaListaDeTarefas.cadastrarNovasTarefas(3, 'Masculino', '26');
    // minhaListaDeTarefas.cadastrarNovasTarefas(4, 'Masculino', '26');


    // 2. Converta o objeto literal em um json.
    
    let listaEmJSON = JSON.stringify(minhaListaDeTarefas);
    console.log(listaEmJSON);

    // 3. Armazene o json no localStorage ou sessionStorage.

    localStorage.setItem("Minhas Tarefas", listaEmJSON);

    let meusDadosSalvos = localStorage.getItem("Minhas Tarefas");

    console.log(meusDadosSalvos);

    






    // formObjeto.listaDeTarefas = function(id, tarefa, autor){
    //     if{
    //         formObjeto.id(length) < 2 = push.formObjeto(id)


    //     let listaDeTarefas = `${id} ${tarefa} ${autor}`;
    // }

    // 2. Converta o objeto literal em um json.

    // formObjeto.listaDeTarefas('1', 'Ir para a academia', 'Nicholas')
    // formObjeto.listaDeTarefas('2', 'Estudar para a prova', 'Nicholas')
    // formObjeto.listaDeTarefas('3', 'Beber água', 'Nicholas')
    // formObjeto.listaDeTarefas('4', 'Comprar pão na padaria', 'Nicholas')
    // formObjeto.listaDeTarefas('5', 'Pagar os boletos', 'Nicholas')

    // console.log(formObjeto);
    


