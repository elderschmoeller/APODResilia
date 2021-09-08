// let botao = document.getElementById('botao');

$('botao').click(function(evento) {
    evento.preventDefault();
    sendRequest();
})

async function requisicaoApi() {

    let key = 'es8WIc8UBOONpYHedK2RhfrF8OREDtKw0WqwnKak';
    let inputData = $('#data').val();
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${inputData}`);
    console.log(resposta);

    let data = await resposta.json();
    console.log(data);
    apiData(data);
}

function apiData(data) {
    document.getElementById('conteudo').innerHTML += data.explanation
    console.log(data.url)
    document.getElementById('imagem-conteudo').src = data.url;
    document.body.style.backgroundImage.url = data.url;
}