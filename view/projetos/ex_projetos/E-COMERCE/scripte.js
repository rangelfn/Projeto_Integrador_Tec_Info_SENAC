document.addEventListener('DOMContentLoaded', function () {
    // A função que manipula os botões de compra
    const buttons = document.querySelectorAll('.comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const article = button.closest('article');
            const preco = parseFloat(article.getAttribute('data-preco'));
            alert(`Você adicionou um produto de R$${preco.toFixed(2)} ao seu carrinho!`);
        });
    });
});
