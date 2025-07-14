function verificarPalindromo() {
    let input = document.getElementById('palavra');
    let palavra = document.querySelector('.form__input');
    let textoOriginal = palavra.value.trim().toLowerCase();     
    let texto = textoOriginal
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
    let textoInvertido = texto.split('').reverse().join('');
    
    if (texto === textoInvertido) {
        let lista = document.getElementById('lista-palindromos');
        let itemLista = document.createElement('li');
        itemLista.textContent = `${palavra.value} é um palíndromo.`;
        lista.appendChild(itemLista);
        input.value = '';
        
    } else {
        let listaSemPalindromos = document.getElementById('lista-sem-palindromos');
        let itemLista = document.createElement('li');
        itemLista.textContent = `${palavra.value} não é um palíndromo.`;
        listaSemPalindromos.appendChild(itemLista);
        input.value = '';
    }
}
function reiniciar() {
    let input = document.getElementById('palavra');
    input.value = '';
    
    let listaPalindromos = document.getElementById('lista-palindromos');
    listaPalindromos.textContent = '';
    
    let listaSemPalindromos = document.getElementById('lista-sem-palindromos');
    listaSemPalindromos.textContent = '';
}