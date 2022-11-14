import "./card.css";

function CardMusica(props){
    console.log(props);
    return(
        <>
            <div className="card" key={props.key}>
                <p>🎤 {props.musica.nomeDoArtista}</p>
                <p>🎼 {props.musica.nomeDaMusica}</p>
            </div>
            <div className="line"></div>
        </>
    )
}

export default CardMusica;