document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const sadScreen = document.getElementById('sad-screen');
    const confettiContainer = document.getElementById('confetti-container');
    const obrigadoScreen = document.getElementById('obrigado-screen');
    const button0 = document.getElementById('button-0');
    const button100 = document.getElementById('button-100');

    // Ação do botão "0"
    button0.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        sadScreen.classList.remove('hidden');
    });

    // Ação do botão "100"
    button100.addEventListener('click', function() {
        // Esconde a tela principal
        mainContent.style.opacity = '0';

        // Cria a chuva de confetes
        const colors = ['#f0c300', '#f06400', '#00c3f0', '#c3f000', '#f000c3'];
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 1.5 + 's';
            confettiContainer.appendChild(confetti);
        }
        
        // Após a animação, mostra a tela de obrigado
        setTimeout(function() {
            mainContent.classList.add('hidden');
            obrigadoScreen.classList.remove('hidden');
            setTimeout(() => {
                obrigadoScreen.classList.add('visible');
            }, 50);
        }, 2500);
    });
});