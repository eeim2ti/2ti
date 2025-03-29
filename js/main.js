// Função para alternar o menu mobile
function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    menu.classList.toggle('active');
}

// Função para alternar entre abas
function setupTabs() {
    const menuLinks = document.querySelectorAll('.main-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fecha o menu no mobile
            if (window.innerWidth <= 768) {
                document.getElementById('mainMenu').classList.remove('active');
            }
            
            // Remove a classe active de todos os links e conteúdos
            menuLinks.forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });
}

// Função de busca
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('searchResults');
    const contentContainer = document.querySelector('.tab-content.active');
    
    if (!contentContainer) return;
    
    const originalContent = contentContainer.innerHTML;
    
    if (!searchTerm) {
        resultsContainer.textContent = "Por favor, digite algo para buscar.";
        contentContainer.innerHTML = originalContent;
        return;
    }
    
    const searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const pageContent = contentContainer.textContent;
    
    if (searchRegex.test(pageContent)) {
        contentContainer.innerHTML = originalContent.replace(
            searchRegex,
            match => `<mark>${match}</mark>`
        );
        
        const matchCount = (pageContent.match(searchRegex) || []).length;
        resultsContainer.textContent = `Encontrado "${searchTerm}" ${matchCount} vez(es)`;
    } else {
        resultsContainer.textContent = `Nenhum resultado encontrado para "${searchTerm}".`;
        contentContainer.innerHTML = originalContent;
    }
}

// Configuração inicial quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Configura o botão do menu
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);
    
    // Configura as abas
    setupTabs();
    
    // Configura a busca
    document.getElementById('searchButton').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    // Ativa a primeira aba por padrão
    document.querySelector('.main-menu a').click();
    
    // Fecha o menu ao clicar fora (para mobile)
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mainMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (window.innerWidth <= 768 && 
            !menu.contains(e.target) && 
            e.target !== menuToggle && 
            !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
});

// Função para alternar o menu mobile
function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    menu.classList.toggle('active');
}

// Função de busca
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('searchResults');
    const contentContainer = document.querySelector('.tab-content.active');
    
    if (!contentContainer) return;
    
    const originalContent = contentContainer.innerHTML;
    
    if (!searchTerm) {
        resultsContainer.textContent = "Por favor, digite algo para buscar.";
        contentContainer.innerHTML = originalContent;
        return;
    }
    
    const searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const pageContent = contentContainer.textContent;
    
    if (searchRegex.test(pageContent)) {
        contentContainer.innerHTML = originalContent.replace(
            searchRegex,
            match => `<mark>${match}</mark>`
        );
        
        const matchCount = (pageContent.match(searchRegex) || []).length;
        resultsContainer.textContent = `Encontrado "${searchTerm}" ${matchCount} vez(es)`;
    } else {
        resultsContainer.textContent = `Nenhum resultado encontrado para "${searchTerm}".`;
        contentContainer.innerHTML = originalContent;
    }
}

// Configuração inicial quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Configura o botão do menu
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);
    
    // Configura a busca
    document.getElementById('searchButton').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    // Fecha o menu ao clicar fora (para mobile)
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mainMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (window.innerWidth <= 768 && 
            !menu.contains(e.target) && 
            e.target !== menuToggle && 
            !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
});