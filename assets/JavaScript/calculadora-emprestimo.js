document.addEventListener('DOMContentLoaded', () => {
    const calculadoraForm = document.querySelector('#calculadoraForm');
    const resultado = document.querySelector('#resultado');

    if (calculadoraForm) {
        calculadoraForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const valor = parseFloat(document.querySelector('#valor').value);
            const prazo = parseInt(document.querySelector('#prazo').value);
            const taxa = parseFloat(document.querySelector('#taxa').value) / 100;

            const valorFinal = valor * Math.pow((1 + taxa), prazo);
            resultado.textContent = `Valor final: R$ ${valorFinal.toFixed(2)}`;
        });
    }
});
