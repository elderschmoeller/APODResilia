let botao = document.querySelector('#botao');

async function requisicaoApi() {
    let key = 'es8WIc8UBOONpYHedK2RhfrF8OREDtKw0WqwnKak';
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
    console.log(resposta);

    let data = await resposta.json();
    console.log(data);
    apiData(data);
}

function apiData(data) {
    document.querySelector('#conteudo').innerHTML += data.explanation
    console.log(data.url)
    document.getElementById('imagem-conteudo').src = data.url;
}