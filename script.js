var form = document.getElementById('form');
var linhas = '';

const imgAprovado = '<img src="./images/aprovado.png" alt"aprovado"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt"reprovado"/>'
const atividades = [];
const notas = [];
const aprovado = '<span class="aprovado">Aprovado</span>';
const reprovado = '<span class="reprovado">Reprovado</span>';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    mediaFinal();
    exibirMedia()
})

function adicionarLinha() {
    
    var inputNomeAtividade = document.getElementById('nome-atividade');
    var inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado: imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
}

function atualizarTabela(){
    var corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function exibirMedia(){
    var mediaResultadoFinal = mediaFinal();

    document.getElementById('media-final').innerHTML = mediaResultadoFinal;
    document.getElementById('media-resultado').innerHTML = mediaResultadoFinal >= 7 ? aprovado: reprovado; 
}

function mediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}

