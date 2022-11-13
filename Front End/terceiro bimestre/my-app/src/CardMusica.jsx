import "./card.css";

function CardMusica(props){
    return(
        <div className="card" key={props.key}>
            <p>{props.musica.nomeDoArtista}</p>
            <p>{props.musica.nomeDaMusica}</p>
        </div>
    )
}





export default CardMusica;


