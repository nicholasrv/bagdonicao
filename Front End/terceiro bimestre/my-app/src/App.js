import {useState} from "react";

function App() {
    const [nomeArtista, setNomeArtista] = useState("");
    const [nomeMusica, setNomeMusica] = useState("");

    const [musicas, setMusica] = useState([]);

    function salvarMusica(){

    if(nomeArtista === "" || nomeMusica === ""){
        alert("Preencha os campos para salvar sua música na lista!");
      }

    else {
      setMusica([...musicas, {
        nomeDoArtista: nomeArtista,
        nomeDaMusica: nomeMusica,
      } ])
    }
  }

    return(

      <div>
        <h1>Cadastro de Músicas</h1>

        <form>
          <input value={nomeArtista} 
          onChange={(event) => setNomeArtista(event.target.value)} 
          placeholder="Digite o nome do artista"/>

          <input value={nomeMusica} 
          onChange={(event) => setNomeMusica(event.target.value)} 
          placeholder="Digite o nome da musica"/>

          <button type="button" onClick={salvarMusica}>Salvar</button>

        </form>


        {
          musicas.map((musica)=>{
            return(
              <div>
              <h1>{musica.nomeDoArtista}</h1>
              <h1>{musica.nomeDaMusica}</h1>
              </div>
            )
          })
        }
      </div>
    )
}

export default App;