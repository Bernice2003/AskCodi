document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preferences-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const income = parseInt(document.getElementById('income').value);
        const preferences = document.getElementById('preferences').value;
        fetchRecommendations(income, preferences);
    });
});

function fetchRecommendations(income, preferences) {
    // Here you would make an AJAX request to your backend to fetch recommendations
    // For this example, we'll generate some dummy recommendations
    const recommendations = generateDummyRecommendations();
    renderRecommendations(recommendations);
}

function generateDummyRecommendations() {
    // This function generates dummy recommendations, replace it with real data
    return [
        { name: "Bali, Indonesia", description: "Explore beautiful beaches and rich cultural heritage.", image: "bali.jpg" },
        { name: "Tokyo, Japan", description: "Experience the vibrant city life and delicious cuisine.", image: "tokyo.jpg" },
        { name: "Paris, France", description: "Discover art, fashion, and romance in the City of Light.", image: "paris.jpg" },
        // Add more destinations here...
    ];
}

function renderRecommendations(recommendations) {
    const container = document.getElementById("recommendations");
    container.innerHTML = "";
    recommendations.forEach(destination => {
        const card = document.createElement("div");
        card.classList.add("destination");
        card.innerHTML = `
            <h2>${destination.name}</h2>
            <img src="${destination.image}" alt="${destination.name}" style="max-width: 100%;">
            <p>${destination.description}</p>
        `;
        container.appendChild(card);
    });
}
