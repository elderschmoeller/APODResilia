// let corpo = document.getElementById('data-escolha');
// let data = document.getElementById('data');

let botao = document.getElementById('botao');

$('#botao').click(function (evento) {
    evento.prevetDefault();
    requisicaoApi();
    console.log('botao clicado');
})

async function requisicaoApi() {
    let api = 'es8WIc8UBOONpYHedK2RhfrF8OREDtKw0WqwnKak';
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}`);
    console.log(resposta);

    let data = resposta.json();
    console.log(data);
    apiData(data);
}

function apiData(data) {
    document.querySelector('#conteudo').innerHTML += data.explanation
    document.querySelector('#content').innerHTML += `<img src="${data.url}`
}

































// var requisicao = new XMLHttpRequest();
// requisicao.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=fPFTcM18d1qr2E9XU8Zm89BOtfUDFFOJyNY3w6Xd');
// requisicao.send();

// requisicao.onload = function(){{
//     if (requisicao.status == 200){
//         var response = requisicao.response;
//         var responseOBJ = JSON.parse(response);
//         console.log(responseOBJ);
//     }
// }}















