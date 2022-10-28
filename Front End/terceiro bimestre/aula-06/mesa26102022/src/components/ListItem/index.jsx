import styles from './styles.module.css';

const ListItem = ({cidade}) => {    
    const {country, population, color, city} = cidade;

    console.log(cidade);

    return (
        <div style={{backgroundColor: color}} className={styles.cidade}>
            <h2>{country}</h2>
            <h3>{city}</h3>
            <h4>População: {population}</h4>
        </div>
    )
}

export default ListItem;