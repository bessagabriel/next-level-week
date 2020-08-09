// Procurar o botão
const newTime = document.querySelector('#add-time');
newTime.addEventListener('click', cloneField);
// Quando clicar no botão
 
// Executar uma ação
function cloneField() {
    
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input');

    // limpar os campos. Quais campos?

    fields.forEach(field => field.value = '');

    // Inserir na página

    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}