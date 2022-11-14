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

        <h1>Monte sua Playlist!</h1>

        <Form
        nomeArtista = {nomeArtista}
        nomeMusica = {nomeMusica}
        musicas = {musicas}
        setNomeArtista = {setNomeArtista}
        setNomeMusica = {setNomeMusica}
        setMusica = {setMusica}
        />

        <div className="listMusicas">
        {
          musicas.map((musica,index)=>{
            return(
              <CardMusica musica={musica} key={index}/>
            )
          })
        }
        </div>

      </div>
    )
}



export default App;