function abrirCard(cardId) {
    let card = document.getElementById(cardId);
    if (card) {
        card.classList.remove('hidden');
    }
}

function fecharCard(cardId) {
    let card = document.getElementById(cardId);
    if (card){
    card.classList.add('hidden');
    }
}

