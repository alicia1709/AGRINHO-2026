// --- 1. EFEITO DE SURGIMENTO AO ROLAR A PÁGINA ---
const elementosParaAnimar = document.querySelectorAll('.esconder');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.25 // Ativa quando 25% do bloco aparece na tela
});

elementosParaAnimar.forEach((el) => observer.observe(el));


// --- 2. GERADOR AUTOMÁTICO DE BOLHAS FRUTIGER AERO ---
const containerBolhas = document.getElementById('container-bolhas');

function criarBolha() {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha-js');

    // Tamanhos aleatórios para as bolhas
    const tamanho = Math.random() * 40 + 10 + 'px';
    bolha.style.width = tamanho;
    bolha.style.height = tamanho;

    // Posição horizontal aleatória
    bolha.style.left = Math.random() * 100 + 'vw';

    // Velocidade de subida aleatória
    const duracao = Math.random() * 5 + 5 + 's';
    bolha.style.animationDuration = duracao;

    containerBolhas.appendChild(bolha);

    // Remove a bolha depois que a animação termina para não travar o site
    setTimeout(() => {
        bolha.remove();
    }, parseFloat(duracao) * 1000);
}

// Cria uma nova bolha a cada 400 milissegundos
setInterval(criarBolha, 400);
