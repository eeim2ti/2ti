// Função para configurar a navegação entre páginas
function setupPageNavigation() {
    const menuLinks = document.querySelectorAll('.main-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Para links externos ou âncoras, manter o comportamento padrão
            if (this.href.includes('#') || !this.href.includes(window.location.hostname)) {
                return;
            }
            
            e.preventDefault();
            
            // Fecha o menu no mobile
            if (window.innerWidth <= 768) {
                document.getElementById('mainMenu').classList.remove('active');
            }
            
            // Atualiza a classe active no menu
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Carrega a página correspondente
            window.location.href = this.href;
        });
    });
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupPageNavigation();
});