// // function microondas(comida, tempo){
//     // let pipoca = 10
//     let macarrao = 8
//     let carne = 15
//     let feijao = 12
//     let brigadeiro = 8

//     if (pipoca *2 && macarrao *2 && carne *2 && feijao *2 && brigadeiro *2)
//     {
//         console.log()
//     }
// }

// function microondas(comida, tempo){

//     const padraopipoca = 10
//     const padraomacarrao = 8
//     const padraocarne = 15
//     const padraofeijao = 12
//     const padraobrigadeiro = 8

//     let pipoca = const padraopipoca
//     let macarrao = const padraomacarrao

// }

let tempo = 0

function microondas (comida, TempoDesejado){
    switch (comida){
        case "Pipoca":
            tempo = 10;
            break;
        case "macarrao":
            tempo = 8;
            break;
        case "carne":
            tempo = 15;
            break;
        case "feijao":
            tempo = 12;
            break;
        case "brigadeiro":
            tempo = 8;
            break;
    default: 
        console.log("prato inexistente");
    }
    if (TempoDesejado > (2 * tempo) && TempoDesejado <= (3 * tempo)) {
        console.log ("A comida queimou");
        console.log ("Prato pronto, bom apetite");
    }
    else if (TempoDesejado < tempo){
        console.log("tempo insuficiente");
        console.log ("Prato pronto, bom apetite");
    }
    else if (TempoDesejado > (3 * tempo)) {
        console.log("kabumm");
        console.log ("Prato pronto, bom apetite");
    }
    else {
        console.log ("Prato pronto, bom apetite")
    }


}

// microondas ("brigadeiro", 17);
// microondas ("brigadeiro", 6);
// microondas ("arroz", 17);
// microondas ("brigadeiro", 25);

microondas ("camarao", 38);