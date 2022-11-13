import {useState} from "react";
import CardMusica from "./CardMusica";
import Form from "./Form"
import "./card.css";

function App() {
    const [nomeArtista, setNomeArtista] = useState("");
    const [nomeMusica, setNomeMusica] = useState("");

    const [musicas, setMusica] = useState([]);

    
    return(

      <div className="wrapper">

        <h1>Cadastro de Músicas</h1>

        <Form
        nomeArtista = {nomeArtista}
        nomeMusica = {nomeMusica}
        musicas = {musicas}
        setNomeArtista = {setNomeArtista}
        setNomeMusica = {setNomeMusica}
        setMusica = {setMusica}
        />

        {
          musicas.map((musica,index)=>{
            return(
              <CardMusica musica={musica} key={index}/>


            )
          })
        }

      </div>
    )
}



export default App;