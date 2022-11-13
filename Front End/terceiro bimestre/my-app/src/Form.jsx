function Form(props){
    
        function salvarMusica(){

            // const minimum3chars = /^\w{8,35}$/;
            // console.log(props.nomeArtista.length);

            const nameArtist = props.nomeArtista
            console.log(nameArtist.length);

            if(props.nomeArtista === "" || props.nomeMusica === ""){
                alert("Preencha os campos para salvar sua música na lista!");
              }

            else if(props.nomeArtista.length<8 || props.nomeMusica.length<8){
                alert("Favor inserir ao menos três caracteres em cada campo.")
              }
              
              else {
              props.setMusica([...props.musicas, {
                nomeDoArtista: props.nomeArtista,
                nomeDaMusica: props.nomeMusica,
              } ])
            }
          }

    return(

        <form>
        <input value={props.nomeArtista} 
        onChange={(event) => props.setNomeArtista(event.target.value)} 
        placeholder="Digite o nome do artista"/>

        <input value={props.nomeMusica} 
        onChange={(event) => props.setNomeMusica(event.target.value)} 
        placeholder="Digite o nome da musica"/>

        <button type="button" onClick={salvarMusica}>Salvar</button>

      </form>
        
    )
}




export default Form;




