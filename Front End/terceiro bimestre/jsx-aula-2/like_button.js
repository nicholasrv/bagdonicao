function MeuComponente(){
    return React.createElement(
        'button',
        {
            //passar as propriedades do HTML em objeto, neste caso vamos passar onClick pelo componetne inserido ser um botão.
            onClick: ()=>alert('ok'),
            style:{
                backgroundColor:'red',
            },
        },
        "Pressione",
    );
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(MeuComponente());