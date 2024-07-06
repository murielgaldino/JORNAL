// Array de exemplo de anúncios
const announcements = [
    { 
        title: "",
        description: "festa junina realizada no dia 05 de julho de 2024",
        date: "05 de julho de 2024" },
        
    {
        title: "Anúncio 2", 
        description: "Descrição breve do anúncio 2.",
        date: "05 de julho de 2024" }
];

// Função para carregar os anúncios na página
function loadAnnouncements() {
    const announcementList = document.getElementById('announcementList');

    // Limpar a lista antes de adicionar os novos anúncios
    announcementList.innerHTML = '';

    // Adicionar cada anúncio à lista
    announcements.forEach(announcement => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${announcement.title}</h3>
            <p>${announcement.description}</p>
            <p>Data de publicação: ${announcement.date}</p>
        `;
        announcementList.appendChild(li);
    });
}

// Chamar a função para carregar os anúncios ao carregar a página
window.onload = loadAnnouncements;
