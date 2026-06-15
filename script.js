// --- 1. MENU RESPONSIVO ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (para mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- 2. SURGIMENTO DOS ELEMENTOS (SCROLL) ---
const elementos = document.querySelectorAll('.esconder');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
}, { threshold: 0.15 });

elementos.forEach(el => observer.observe(el));

// --- 3. GERADOR DE BOLHAS ---
const container = document.getElementById('container-bolhas');
function criarBolha() {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha-js');
    const tam = Math.random() * 35 + 15 + 'px';
    bolha.style.width = tam;
    bolha.style.height = tam;
    bolha.style.left = Math.random() * 100 + 'vw';
    const tempo = Math.random() * 4 + 5 + 's';
    bolha.style.animationDuration = tempo;
    container.appendChild(bolha);
    setTimeout(() => { bolha.remove(); }, parseFloat(tempo) * 1000);
}
setInterval(criarBolha, 500);

// --- 4. CALCULADORA DE IMPACTO (DESAFIO COMPLEMENTAR) ---
function calcularImpacto() {
    const selecao = document.getElementById('tech-select').value;
    const resultado = document.getElementById('resultado-calc');
    
    if (selecao === 'tradicional') {
        resultado.innerText = "⚠️ Alerta: Gasto estimado de 10.000L de água por hectare/dia. Tente a tecnologia inteligente!";
        resultado.style.color = "#b91c1c";
    } else {
        resultado.innerText = "🌱 Excelente! Economia de 6.000L de água por hectare/dia detectada usando gotejamento inteligente.";
        resultado.style.color = "#15803d";
    }
}

// --- 5. QUIZ SUSTENTÁVEL (DESAFIO COMPLEMENTAR) ---
function verificarQuiz(acertou) {
    const resultado = document.getElementById('resultado-quiz');
    if (acertou) {
        resultado.innerText = "🎉 Correto! Os drones monitoram a saúde da lavoura lá de cima sem pisar e compactar o solo.";
        resultado.style.color = "#15803d";
    } else {
        resultado.innerText = "❌ Errado! Tratores pesados compactam o solo, dificultando a absorção de água.";
        resultado.style.color = "#b91c1c";
    }
}
