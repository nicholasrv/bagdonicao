////let idade = 15;
///if (idade < 18){
 ///   console.log("entrou no if");
///}else{
 ///   console.log("entrou no else");
///}



//////////

function podeSubir(altura, acompanhada) { 
    if (altura > 1.40 && altura < 2.00)
    {
        return "acesso autorizado"
    }

    else if(altura <= 1.40 && altura > 1.20 && acompanhada)
    {
        return "acesso permitido com acompanhante"
    }

    else
    {
        return "acesso negado"
    }
 
}
    console.log(podeSubir(1.4, true ))