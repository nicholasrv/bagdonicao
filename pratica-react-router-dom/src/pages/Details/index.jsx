import { useParams } from "react-router-dom";

const Details = () => {

    const {nome} = useParams();

    return(
        <div>
            <h1>Details Home Page</h1>
            <h2>{nome}</h2>
        </div>
    );
};

export default Details;
