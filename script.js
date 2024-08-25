// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Example game data (to be expanded or dynamically loaded)
const games = [
    {
        title: "The Last of Us Part II",
        image: "https://placekitten.com/200/150",
        description: "A post-apocalyptic action-adventure game.",
        genre: "action"
    },
    {
        title: "Cyberpunk 2077",
        image: "https://placekitten.com/201/150",
        description: "An open-world, action-adventure story set in Night City.",
        genre: "rpg"
    },
    {
        title: "Ghost of Tsushima",
        image: "https://placekitten.com/202/150",
        description: "An open-world game set in feudal Japan.",
        genre: "action"
    },
    {
        title: "God of War",
        image: "https://placekitten.com/203/150",
        description: "An epic action-adventure game set in Norse mythology.",
        genre: "adventure"
    }
];

function loadGames() {
    const gameGrid = document.getElementById('gameGrid');
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        `;
        gameCard.onclick = () => openModal(game);
        gameGrid.appendChild(gameCard);
    });
}

function recommendGames() {
    const genre = document.getElementById('genre').value;
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    recommendationsGrid.innerHTML = ''; // Clear previous recommendations

    const filteredGames = games.filter(game => game.genre === genre);
    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            `;
            gameCard.onclick = () => openModal(game);
            recommendationsGrid.appendChild(gameCard);
        });
    } else {
        recommendationsGrid.innerHTML = `<p>No recommendations found for the selected genre.</p>`;
    }
}

function openModal(game) {
    const modal = document.getElementById('gameModal');
    const modalContent = document.getElementById('modalGameContent');
    modalContent.innerHTML = `
        <h2>${game.title}</h2>
        <img src="${game.image}" alt="${game.title}">
        <p>${game.description}</p>
    `;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    loadGames();

    // Modal close event
    const closeModalButton = document.querySelector('.close');
    closeModalButton.onclick = closeModal;

    // Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.onclick = function () {
        document.body.classList.toggle('light-mode');
        themeToggle.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Toggle Dark Mode' : 'Toggle Light Mode';
    };
});

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeModal();
    }
}