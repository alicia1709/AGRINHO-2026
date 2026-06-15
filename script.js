// --- 1. MENU RESPONSIVO ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

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
}, { threshold: 0.1 });

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

// --- 4. CALCULADORA DE IMPACTO ---
function calcularImpacto() {
    const selecao = document.getElementById('tech-select').value;
    const resultado = document.getElementById('resultado-calc');
    
    if (selecao === 'tradicional') {
        resultado.innerText = "⚠️ Alerta: Alto desperdício detectado na irrigação convencional.";
        resultado.style.color = "#b91c1c";
    } else {
        resultado.innerText = "🌱 Excelente! Economia de até 60% de água mapeada com gotejamento inteligente.";
        resultado.style.color = "#15803d";
    }
}

// --- 5. QUIZ DE SUSTENTABILIDADE (5 PERGUNTAS) ---
const perguntasQuiz = [
    {
        pergunta: "Qual tecnologia ajuda a monitorar plantações inteiras sem compactar o solo?",
        opcoes: [
            { texto: "Tratores Pesados", correta: false },
            { texto: "Drones Agrícolas", correta: true }
        ]
    },
    {
        pergunta: "Qual sistema de irrigação economiza mais água no campo?",
        opcoes: [
            { texto: "Irrigação por Aspersão Comum", correta: false },
            { texto: "Gotejamento Inteligente", correta: true }
        ]
    },
    {
        pergunta: "O desmatamento ilegal causa qual principal impacto na atmosfera?",
        opcoes: [
            { texto: "Aumento das emissões de Carbono", correta: true },
            { texto: "Redução natural das chuvas ácidas", correta: false }
        ]
    },
    {
        pergunta: "Qual dessas opções é considerada uma fonte de energia renovável para o campo?",
        opcoes: [
            { texto: "Geradores a Diesel", correta: false },
            { texto: "Painéis Solares Fotovoltaicos", correta: true }
        ]
    },
    {
        pergunta: "O que caracteriza a prática da Agricultura Regenerativa?",
        opcoes: [
            { texto: "Recuperação e recomposição da saúde do solo", correta: true },
            { texto: "Uso massivo e contínuo de fertilizantes químicos", correta: false }
        ]
    }
];

let indicePerguntaAtual = 0;
let pontuacaoUsuario = 0;

function carregarPergunta() {
    if (indicePerguntaAtual >= perguntasQuiz.length) {
        mostrarResultadoFinal();
        return;
    }

    const dadosAtual = perguntasQuiz[indicePerguntaAtual];
    const textoPergunta = document.getElementById("texto-pergunta");
    const containerOpcoes = document.getElementById("opcoes-quiz");

    textoPergunta.innerText = `Pergunta ${indicePerguntaAtual + 1}/5: ${dadosAtual.pergunta}`;
    containerOpcoes.innerHTML = "";

    dadosAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao.texto;
        botao.classList.add("btn-interativo");
        botao.onclick = () => processarResposta(opcao.correta);
        containerOpcoes.appendChild(botao);
    });
}

function processarResposta(foiCorreta) {
    if (foiCorreta) pontuacaoUsuario++;
    indicePerguntaAtual++;
    carregarPergunta();
}

function mostrarResultadoFinal() {
    document.getElementById("container-pergunta").style.display = "none";
    const telaResultado = document.getElementById("tela-resultado-quiz");
    const textoResultado = document.getElementById("resultado-final-texto");
    
    telaResultado.style.display = "block";
    
    if (pontuacaoUsuario >= 4) {
        textoResultado.innerHTML = `🎉 <strong>Excelente!</strong> Você marcou ${pontuacaoUsuario} de 5 pontos. Você entende muito sobre sustentabilidade agrícola!`;
        textoResultado.style.color = "#15803d";
    } else {
        textoResultado.innerHTML = `🌿 <strong>Bom trabalho!</strong> Você acertou ${pontuacaoUsuario} de 5 perguntas. Continue estudando para proteger nosso futuro verde!`;
        textoResultado.style.color = "#0369a1";
    }
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacaoUsuario = 0;
    document.getElementById("container-pergunta").style.display = "block";
    document.getElementById("tela-resultado-quiz").style.display = "none";
    carregarPergunta();
}

window.addEventListener("DOMContentLoaded", () => {
    carregarPergunta();
});
