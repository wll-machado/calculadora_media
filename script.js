var form = document.getElementById('form');
var linhas = '';

const imgAprovado = '<img src="./images/aprovado.png" alt"aprovado"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt"reprovado"/>'
form.addEventListener('submit', function(e) {
    e.preventDefault();

    var inputNomeAtividade = document.getElementById('nome-atividade');
    var inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado: imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    var corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
})