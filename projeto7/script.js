document.addEventListener('DOMContentLoaded', function() {
  // Formulário para adicionar novos itens
  const addItemForm = document.getElementById('add-item');
  const newItemInput = document.getElementById('new-item');
  
  // Formulário da checklist
  const checklist = document.getElementById('checklist');
  
  // Função para criar novos itens
  function criarNovoItem(texto) {
    // Clona o template
    const template = document.querySelector('#a');
    const novoItem = template.cloneNode(true);
    novoItem.style.display = 'flex';
    
    // Atualiza o texto do label (mantendo o span)
    const label = novoItem.querySelector('label');
    label.innerHTML = '<span></span> ' + texto;
    
    // Configura o botão de deletar
    const deleteBtn = novoItem.querySelector('.delete');
    deleteBtn.addEventListener('click', function() {
      novoItem.remove();
    });
    
    return novoItem;
  }
  
  // Evento para adicionar novos itens
  addItemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const itemText = newItemInput.value.trim();
    
    if (itemText) {
      const novoItem = criarNovoItem(itemText);
      checklist.appendChild(novoItem);
      newItemInput.value = ''; // Limpa o input
    }
  });
  
  // Configura o botão de deletar do item existente
  const existingDeleteBtn = document.querySelector('.checklist-wrapper .delete');
  if (existingDeleteBtn) {
    existingDeleteBtn.addEventListener('click', function() {
      this.closest('.checklist-wrapper').remove();
    });
  }
});