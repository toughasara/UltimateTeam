function setupDragAndDrop() {
    const modal = document.querySelector('#modal');
    const badges = document.querySelectorAll('.badges');
    
    // Make modal cards draggable
    document.querySelectorAll('.cart').forEach(card => {
        card.draggable = true;
        card.addEventListener('dragstart', (e) => {
            // Store player data from the card
            const playerData = {
                position: card.querySelector('.nom p').textContent.split('\n')[1].trim(),
                name: card.querySelector('.nom-player h6').textContent,
                photo: card.querySelector('.profil-player img').src,
                rating: card.querySelector('.nom p').textContent.split('\n')[0].trim(),
                stats: Array.from(card.querySelectorAll('.statistiques .nomb p')).map(p => ({
                    name: p.textContent.split('\n')[0].trim(),
                    value: p.textContent.split('\n')[1].trim()
                })),
                nationality: card.querySelector('.natio img').src,
                club: card.querySelector('.club img').src
            };
            
            e.dataTransfer.setData('text/plain', JSON.stringify(playerData));
            
            // Hide modal but keep dragged element visible
            setTimeout(() => {
                modal.classList.add('d-none');
            }, 0);
        });
    });

    // Make badge positions droppable
    badges.forEach(badge => {
        badge.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        badge.addEventListener('drop', (e) => {
            e.preventDefault();
            const playerData = JSON.parse(e.dataTransfer.getData('text/plain'));
            const badgePosition = badge.querySelector('.add-player-btn').classList[1].toUpperCase();

            if (playerData.position === badgePosition) {
                // Clear existing content
                const badgeImage = badge.querySelector('.badge-image');
                badgeImage.innerHTML = '';

                // Create new player card with the same structure as your modal cards
                const playerCard = document.createElement('div');
                playerCard.className = 'contenu';
                
                if (playerData.position === 'GK') {
                    playerCard.innerHTML = `
                        <div class="rating">
                            <div class="nom">
                                <p>${playerData.rating} <br> ${playerData.position}</p>
                            </div>
                        </div>
                        <div class="profil-player">
                            <img src="${playerData.photo}" alt="">
                        </div>
                        <div class="nom-player">
                            <h6>${playerData.name}</h6>
                        </div>
                        <div class="statistiques">
                            ${playerData.stats.map(stat => `
                                <div class="nomb">
                                    <p>${stat.name} <br> ${stat.value}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="logos">
                            <div class="natio">
                                <img src="${playerData.nationality}" alt="">
                            </div>
                            <div class="club">
                                <img src="${playerData.club}" alt="">
                            </div>
                        </div>`;
                } else {
                    playerCard.innerHTML = `
                        <div class="rating">
                            <div class="nom">
                                <p>${playerData.rating} <br> ${playerData.position}</p>
                            </div>
                        </div>
                        <div class="profil-player">
                            <img src="${playerData.photo}" alt="">
                        </div>
                        <div class="nom-player">
                            <h6>${playerData.name}</h6>
                        </div>
                        <div class="statistiques">
                            ${playerData.stats.map(stat => `
                                <div class="nomb">
                                    <p>${stat.name} <br> ${stat.value}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="logos">
                            <div class="natio">
                                <img src="${playerData.nationality}" alt="">
                            </div>
                            <div class="club">
                                <img src="${playerData.club}" alt="">
                            </div>
                        </div>`;
                }

                badgeImage.appendChild(playerCard);
                badge.classList.add('filled');
                badge.querySelector('.add-player-btn').style.display = 'none';
            }
        });
    });
}

// Call this function after your modal content is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupDragAndDrop();
});
