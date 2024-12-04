document.addEventListener("DOMContentLoaded", () => {
    // const modal = document.getElementById('modal');
    const form = document.getElementById('add-player-form');
    const positionInput = document.getElementById('player-position');
    let joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
    const addButton = document.getElementById('add-player-button');
    const modal = document.querySelector('#modal');
    const cartesjours = document.getElementById('remp');

    // fetchAndAddPlayers();
    // // ----------------------fetch json---------------------------
    // function fetchAndAddPlayers() {
    //     fetch("../players.json") // Remplace par le chemin réel de ton fichier JSON
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Erreur lors du chargement du fichier JSON");
    //             }
    //             return response.json(); // Convertir la réponse en JSON
    //         })
    //         .then(data => {
    //                 if (Array.isArray(data.players)) {
    //                 data.players.forEach(player => {
    //                     const jour = {
    //                         name: player.name,
    //                         photo: player.photo,
    //                         position: player.position,
    //                         nationality: player.nationality,
    //                         club: player.club,
    //                     };
    //                     if (player.position === "GK"){
    //                         jour.rating = player.rating;
    //                         jour.diving = player.diving;
    //                         jour.handling = player.handling;
    //                         jour.kicking = player.kicking;
    //                         jour.reflexes = player.reflexes;
    //                         jour.speed = player.speed;
    //                         jour.positioning = player.positioning;
    //                     } 
    //                     else{
    //                         jour.rating = player.rating;
    //                         jour.pace = player.pace;
    //                         jour.shooting = player.shooting;
    //                         jour.passing = player.passing;
    //                         jour.dribbling = player.dribbling;
    //                         jour.defending = player.defending;
    //                         jour.physical = player.physical;
    //                     }
    
    //                     joueurs.unshift(jour);
    //                 });
    
    //                 savearray();
    //                 console.log("Joueurs ajoutés avec succès !");
    //             } else {
    //                 console.error("Le fichier JSON ne contient pas de tableau 'players'.");
    //             }
    //         })
    //         .catch(error => {
    //             console.error("Erreur lors du fetch :", error);
    //         });
    //         affichjrrmp();
    // }
    // fetchAndAddPlayers();
    

    // affiiichaaage de formuuulaaaiiiree dynaaamiiique
    function affichform() {
        const form1 = document.getElementById("form1");
        const form2 = document.getElementById("form2");

        form1.classList.add("d-none");
        form2.classList.add("d-none");

        if(positionInput.value === 'GK'){
            form2.classList.remove("d-none");
        }
        else{
            form1.classList.remove("d-none");
        }
    }


    // vaaaliiidaaationnn des chaaaammmmps
    function validatform() {
        // const boutonAddPlayer = document.querySelector("button[type='submit']");
        const numerosnot = document.querySelectorAll('.numerosnot');
        const numerosgk = document.querySelectorAll('.numerosgk');
        const inputinfos = document.querySelector('.infos');
        const inputurls = document.querySelectorAll('.urls');
        let toutvalid = true;

        const numerosnotValid = Array.from(numerosnot).every(input => {
            const value = parseInt(input.value.trim(), 10);
            return value >= 10 && value <= 99;
        });

        const numerosgkValid = Array.from(numerosgk).every(input => {
            const value = parseInt(input.value.trim(), 10); 
            return value >= 10 && value <= 99;
        });


        if (inputinfos) {
            const nameValue = inputinfos.value.trim();
            const namePattern = /^[A-Za-z\s]+$/;
            if (nameValue.length < 3 || nameValue.length > 50 || !namePattern.test(nameValue)) {
                toutvalid = false;
            }
        }

        inputurls.forEach(function(input) {
            const urlPattern = /^(https?:\/\/)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(:\d+)?(\/[^\s]*)?$/;
            if (!urlPattern.test(input.value.trim())) {
                toutvalid = false;
            } 
        });

        toutvalid = toutvalid && (numerosnotValid || numerosgkValid);

        return toutvalid;
    }

    // stooooockkkeeeeeeeeerrrr le jooooooouuuuuuuuur
    function savearray() {
        localStorage.setItem("joueurs", JSON.stringify(joueurs));
    }
    function saveJrs() {
        const formData = new FormData(form);
        
        const jour = {};

        formData.forEach((value, key) => {
            jour[key] = value;
        });

        jour.id = Date.now(); 

        joueurs.unshift(jour);

        savearray();

        affichjrrmp();

        form.reset();
    }

    // affiiiiichiiiieeeer toooouuuuut jooooooouuuurs
    function affichjrrmp() {
        cartesjours.innerHTML = '';
        joueurs.forEach((jour) =>  {
            if(jour.position === 'GK'){
                cartesjours.innerHTML += `
                <div class="carte" data-id="${jour.id}">
                    <div class="badge-image">
                        <img src="assests/images/badge_gold.webp" alt="description">
                        <div class="contenu">
                            <div class="rating">
                                <div class="nom">
                                    <p>${jour.ratinggk} <br> ${jour.position} </p>
                                </div>
                            </div>
                            <div class="profil-player">
                                <img src="${jour.photo}" alt="">
                            </div>
                            <div class="nom-player">
                                <h6>${jour.name}</h6>
                            </div>
                            <div class="statistiques">
                                <div class="nomb">
                                    <p>DIV <br> ${jour.diving} </p>
                                </div>
                                <div class="nomb">
                                    <p>HAN <br> ${jour.handling}</p>
                                </div>
                                <div class="nomb">
                                    <p>KIC <br>${jour.kicking}</p>
                                </div>
                                <div class="nomb">
                                    <p>REF <br>${jour.reflexes}</p>
                                </div>
                                <div class="nomb">
                                    <p>SPE <br>${jour.speed}</p>
                                </div>
                                <div class="nomb">
                                    <p>POS <br>${jour.positioning}</p>
                                </div>
                            </div>
                            <div class="logos">
                                <div class="natio">
                                    <img src="${jour.nationality}" alt="">
                                </div>
                                <div class="club">
                                    <img src="${jour.club}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge-titre">
                        <div class="d-flex justify-content-center ajmosu">
                            <button type="button" class="supprimer"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="modifier"><i class="fa-solid fa-pen"></i></button>
                        </div>
                    </div> 
                </div>
                `;
            }
            else {
                cartesjours.innerHTML += `
                <div class="carte" data-id="${jour.id}">
                    <div class="badge-image">
                        <img src="assests/images/badge_gold.webp" alt="description">
                        <div class="contenu">
                            <div class="rating">
                                <div class="nom">
                                    <p>${jour.ratingnot} <br> ${jour.position} </p>
                                </div>
                            </div>
                            <div class="profil-player">
                                <img src="${jour.photo}" alt="">
                            </div>
                            <div class="nom-player">
                                <h6>${jour.name}</h6>
                            </div>
                            <div class="statistiques">
                                <div class="nomb">
                                    <p>PAC <br> ${jour.pacing} </p>
                                </div>
                                <div class="nomb">
                                    <p>SHO <br> ${jour.shooting}</p>
                                </div>
                                <div class="nomb">
                                    <p>PAS <br>${jour.passing}</p>
                                </div>
                                <div class="nomb">
                                    <p>DRI <br>${jour.dribbling}</p>
                                </div>
                                <div class="nomb">
                                    <p>DEF <br>${jour.defending}</p>
                                </div>
                                <div class="nomb">
                                    <p>PHY <br>${jour.physical}</p>
                                </div>
                            </div>
                            <div class="logos">
                                <div class="natio">
                                    <img src="${jour.nationality}" alt="">
                                </div>
                                <div class="club">
                                    <img src="${jour.club}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge-titre">
                        <div class="d-flex justify-content-center ajmosu">
                            <button type="button" class="supprimer"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="modifier"><i class="fa-solid fa-pen"></i></button>
                        </div>
                    </div> 
                </div>
                `;
            }
        });
    }
    affichjrrmp();
    

    // foooonnnctiiooonnement deee button de add player 
    function clique() {
        const validationreussie = validatform();
        if (validationreussie) {
            saveJrs();
        } 
        else {
            alert('Veuillez remplir tous les champs correctement');
        }
    }

    positionInput.addEventListener('input', () => affichform());

    addButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        clique();
    });

    // fiiiiiiiiiltreeeeeeeee array de joooooooooouuueeeeeuuuuurs
    function filterPlayers(joueurs, positionflt) {
        return joueurs.filter(jour => jour.position === positionflt);
    }
    
    // Fonction pour afficher les joueurs dans le div modal
    function renderPlayers(filteredJoueurs) {
        const modal = document.querySelector('#modal');
        modal.innerHTML = '';
        
        filteredJoueurs.forEach(jour => {
            if (jour.position === 'GK') {
                const playerCardGK = `
                    <div class="btnclose">
                        <button type="button" class="close-modal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="cart">
                        <div class="badge-image">
                            <img src="assests/images/badge_gold.webp" alt="description">
                            <div class="contenu">
                                <div class="rating">
                                    <div class="nom">
                                        <p>${jour.ratinggk} <br> ${jour.position} </p>
                                    </div>
                                </div>
                                <div class="profil-player">
                                    <img src="${jour.photo}" alt="">
                                </div>
                                <div class="nom-player">
                                    <h6>${jour.name}</h6>
                                </div>
                                <div class="statistiques">
                                    <div class="nomb">
                                        <p>DIV <br> ${jour.diving} </p>
                                    </div>
                                    <div class="nomb">
                                        <p>HAN <br> ${jour.handling}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>KIC <br>${jour.kicking}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>REF <br>${jour.reflexes}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>SPE <br>${jour.speed}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>POS <br>${jour.positioning}</p>
                                    </div>
                                </div>
                                <div class="logos">
                                    <div class="natio">
                                        <img src="${jour.nationality}" alt="">
                                    </div>
                                    <div class="club">
                                        <img src="${jour.club}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="badge-titre">
                            <div class="d-flex justify-content-center ajmosu">
                                <button type="button" class="selection" onclick="selection()"><i class="fa-solid fa-check"></i></button>
                            </div>
                        </div> 
                    </div>
                `;
                modal.innerHTML += playerCardGK;
            } else {
                // Affichage pour les autres joueurs
                const playerCardOther = `
                    <div class="btnclose">
                        <button type="button" class="close-modal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="cart">
                        <div class="badge-image">
                            <img src="assests/images/badge_gold.webp" alt="description">
                            <div class="contenu">
                                <div class="rating">
                                    <div class="nom">
                                        <p>${jour.ratingnot} <br> ${jour.position} </p>
                                    </div>
                                </div>
                                <div class="profil-player">
                                    <img src="${jour.photo}" alt="">
                                </div>
                                <div class="nom-player">
                                    <h6>${jour.name}</h6>
                                </div>
                                <div class="statistiques">
                                    <div class="nomb">
                                        <p>PAC <br> ${jour.pacing} </p>
                                    </div>
                                    <div class="nomb">
                                        <p>SHO <br> ${jour.shooting}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>PAS <br>${jour.passing}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>DRI <br>${jour.dribbling}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>DEF <br>${jour.defending}</p>
                                    </div>
                                    <div class="nomb">
                                        <p>PHY <br>${jour.physical}</p>
                                    </div>
                                </div>
                                <div class="logos">
                                    <div class="natio">
                                        <img src="${jour.nationality}" alt="">
                                    </div>
                                    <div class="club">
                                        <img src="${jour.club}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="badge-titre">
                            <div class="d-flex justify-content-center ajmosu">
                                <button type="button" class="selection" onclick="selection()"><i class="fa-solid fa-check"></i></button>
                            </div>
                        </div> 
                    </div>
                `;
                modal.innerHTML += playerCardOther;
            }
        });
    
        modal.classList.remove('d-none');
    }
    
    // ajout evenement pour filltrage 
    function setupPositionButtons() {
        const positionButtons = document.querySelectorAll('.add-player-btn');
        positionButtons.forEach(button => {

            button.addEventListener('click', function () {

                const positionflt = button.classList[1].toUpperCase(); 

                if (joueurs.length === 0) {
                    alert('Aucun joueur disponible');
                    return;
                }

                const filteredJoueurs = filterPlayers(joueurs, positionflt);

                if (filteredJoueurs.length === 0) {
                    modal.innerHTML = `
                        <div class="btnclose">
                            <button type="button" class="close-modal"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <p>Aucun joueur trouvé pour la position ${positionflt}.</p>`;
                    modal.classList.remove('d-none');
                    return;
                }
    
                // Afficher les joueurs filtrés
                renderPlayers(filteredJoueurs);
            });
        });
    }   

    setupPositionButtons();

    // // --------------------------------supprimerJoueur-------------------------------------
    function supprimerJoueur(playerId) {
        const playerIdNumber = Number(playerId);
        joueurs = joueurs.filter(jour => jour.id !== playerIdNumber );
        savearray();
        affichjrrmp();
    } 

    // -------------------------------modifierJoueur--------------------------------------------
    function modifierJoueur(playerId) {
        const playerIdNumber = Number(playerId);
        const joueur = joueurs.find(jour => jour.id === playerIdNumber);
        console.log(joueur);
        Object.keys(joueur).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = joueur[key];
        }
        });
        supprimerJoueur(playerId);
    }

    // ----------button innerhtml----------------
    document.addEventListener('click', function (event) {
        if (event.target.closest('.close-modal')) {

            const modal = document.querySelector('#modal');
            modal.classList.add('d-none');
        }

        if (event.target.closest('.supprimer')) {            
            event.preventDefault();
            const carte = event.target.closest('.carte');
            const playerId = carte.getAttribute('data-id');         
            supprimerJoueur(playerId);
        }
    
        if (event.target.closest('.modifier')) {
            const carte = event.target.closest('.carte');
            const playerId = carte.getAttribute('data-id');
            modifierJoueur(playerId);
        }
    });

    
    setupPositionButtons();


    // -------------draag-----and------drop----------
    // function setupDragAndDrop() {
    //     const remp = document.querySelector('#remp');
    //     const badges = document.querySelectorAll('.badges');
    
    //     remp.querySelectorAll('.carte').forEach(card => {
    //         card.draggable = true;
    
    //         card.addEventListener('dragstart', (e) => {
    //             e.dataTransfer.effectAllowed = 'move';
    
    //             const nomP = card.querySelector('.nom p');
    //             const textContent = nomP ? nomP.textContent.trim() : '';
    //             console.log('Nom P Text Content:', textContent);
    
    //             const match = textContent.match(/^(\d+)\s+(\w+)$/);
    //             let rating = '';
    //             let position = '';
    
    //             if (match) {
    //                 rating = match[1]; 
    //                 position = match[2]; 
    //             }
    
    //             console.log('Extracted Rating:', rating); 
    //             console.log('Extracted Position:', position);
    
    //             const playerData = {
    //                 position: position,
    //                 name: card.querySelector('.nom-player h6')?.textContent,
    //                 photo: card.querySelector('.profil-player img')?.src,
    //                 rating: rating,
    //                 stats: Array.from(card.querySelectorAll('.statistiques .nomb p')).map(p => ({
    //                     name: p.textContent.split('\n')[0]?.trim(),
    //                     value: p.textContent.split('\n')[1]?.trim()
    //                 })),
    //                 nationality: card.querySelector('.natio img')?.src,
    //                 club: card.querySelector('.club img')?.src
    //             };
    
    //             console.log('Player Data:', playerData);
    
    //             e.dataTransfer.setData('text/plain', JSON.stringify(playerData));
    
    //             // setTimeout(() => card.classList.add('dragging'), 0);
    //         });
    
    //         // card.addEventListener('dragend', () => {
    //         //     card.classList.remove('dragging');
    //         // });
    //     });
    
    //     badges.forEach(badge => {
    //         const badgeImage = badge.querySelector('.badge-image');
    
    //         badge.addEventListener('dragover', (e) => {
    //             e.preventDefault();
    //             // badgeImage.classList.add('drag-over');
    //         });
    
    //         badge.addEventListener('dragleave', () => {
    //             // badgeImage.classList.remove('drag-over');
    //         });
    
    //         badge.addEventListener('drop', (e) => {
    //             e.preventDefault();
    //             // badgeImage.classList.remove('drag-over');
    
    //             const playerData = JSON.parse(e.dataTransfer.getData('text/plain'));
    //             const badgePosition = badge.querySelector('.add-player-btn').classList[1].toUpperCase();
    
    //             console.log('Badge Position:', badgePosition); 
    
    //             if (playerData.position === badgePosition) {
    //                 badgeImage.innerHTML = `
    //                                 <img src="./assests/images/badge_gold.webp" alt="">
    //                 `;
    
    //                 const playerCard = createPlayerCardHTML(playerData);
    //                 badgeImage.appendChild(playerCard);
    
    //                 badge.querySelector('.add-player-btn').style.display = 'none';
    //             } 
    //         });
    //     });
    // }
    
    // function createPlayerCardHTML(playerData) {
    //     const playerCard = document.createElement('div');
    //     playerCard.classList.add('contenu');
    
    //     playerCard.innerHTML = `
    //         <div class="rating">
    //             <div class="nom">
    //                 <p>${playerData.rating || ''} <br> ${playerData.position || ''}</p>
    //             </div>
    //         </div>
    //         <div class="profil-player">
    //             <img src="${playerData.photo || ''}" alt="Player">
    //         </div>
    //         <div class="nom-player">
    //             <h6>${playerData.name || ''}</h6>
    //         </div>
    //         <div class="statistiques">
    //             ${playerData.stats
    //                 .map(
    //                     stat => `
    //                 <div class="nomb">
    //                     <p>${stat.name || ''} <br> ${stat.value || ''}</p>
    //                 </div>`
    //                 )
    //                 .join('')}
    //         </div>
    //         <div class="logos">
    //             <div class="natio">
    //                 <img src="${playerData.nationality || ''}" alt="Nationality">
    //             </div>
    //             <div class="club">
    //                 <img src="${playerData.club || ''}" alt="Club">
    //             </div>
    //         </div>`;
    //     return playerCard;
    // }
    
    // setupDragAndDrop();

    function setupDragAndDrop() {
        const remp = document.querySelector('#remp');
        const badges = document.querySelectorAll('.badges');
    
        if (!remp) {
            console.error('#remp container not found');
            return;
        }
    
        // Set up draggable cards within #remp
        remp.querySelectorAll('.carte').forEach(card => {
            card.draggable = true;
    
            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.effectAllowed = 'move';
    
                // Extract player data from the card
                const nomP = card.querySelector('.nom p');
                const textContent = nomP ? nomP.textContent.trim() : '';
                console.log('Nom P Text Content:', textContent); // Log to inspect the text content
    
                // Use regex to split text into rating and position, handling multiple spaces
                const match = textContent.match(/^(\d+)\s+(\w+)$/);
                let rating = '';
                let position = '';
    
                if (match) {
                    rating = match[1]; // Extract the rating (first part)
                    position = match[2]; // Extract the position (second part)
                }
    
                console.log('Extracted Rating:', rating); // Log to verify the rating
                console.log('Extracted Position:', position); // Log to verify the position
    
                const playerData = {
                    position: position || 'Position not found',
                    name: card.querySelector('.nom-player h6')?.textContent,
                    photo: card.querySelector('.profil-player img')?.src,
                    rating: rating || 'Rating not found',
                    stats: Array.from(card.querySelectorAll('.statistiques .nomb p')).map(p => ({
                        name: p.textContent.split('\n')[0]?.trim(),
                        value: p.textContent.split('\n')[1]?.trim()
                    })),
                    nationality: card.querySelector('.natio img')?.src,
                    club: card.querySelector('.club img')?.src
                };
    
                console.log('Player Data:', playerData); // Log to verify extracted player data
    
                // Store the player data in the drag event
                e.dataTransfer.setData('text/plain', JSON.stringify(playerData));
    
                // Add dragging visual feedback
                setTimeout(() => card.classList.add('dragging'), 0);
            });
    
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
            });
        });
    
        // Setup badges as drop targets
        badges.forEach(badge => {
            const badgeImage = badge.querySelector('.badge-image');
    
            badge.addEventListener('dragover', (e) => {
                e.preventDefault();
                badgeImage.classList.add('drag-over');
            });
    
            badge.addEventListener('dragleave', () => {
                badgeImage.classList.remove('drag-over');
            });
    
            badge.addEventListener('drop', (e) => {
                e.preventDefault();
                badgeImage.classList.remove('drag-over');
    
                // Extract player data from the drag event
                const playerData = JSON.parse(e.dataTransfer.getData('text/plain'));
                const badgePosition = badge.querySelector('.add-player-btn').classList[1].toUpperCase();
    
                console.log('Badge Position:', badgePosition); // Log the badge position
    
                // Check if the positions match
                if (playerData.position === badgePosition) {
                    // Replace the badge image with the player's card content
                    badgeImage.innerHTML = `
                                    <img src="./assests/images/badge_gold.webp" alt="">

                    `;
    
                    // Append the player's card content
                    const playerCard = createPlayerCardHTML(playerData);
                    badgeImage.appendChild(playerCard);
    
                    // Optionally hide the badge button if you want
                    badge.querySelector('.add-player-btn').style.display = 'none';
                } else {
                    alert(`Position mismatch! This player is a ${playerData.position}, but this slot requires a ${badgePosition}.`);
                }
            });
        });
    }
    
    // Helper function to create the player card HTML
    function createPlayerCardHTML(playerData) {
        const playerCard = document.createElement('div');
        playerCard.classList.add('contenu');
    
        playerCard.innerHTML = `
            <div class="rating">
                <div class="nom">
                    <p>${playerData.rating || ''} <br> ${playerData.position || ''}</p>
                </div>
            </div>
            <div class="profil-player">
                <img src="${playerData.photo || ''}" alt="Player">
            </div>
            <div class="nom-player">
                <h6>${playerData.name || ''}</h6>
            </div>
            <div class="statistiques">
                ${playerData.stats
                    .map(
                        stat => `
                    <div class="nomb">
                        <p>${stat.name || ''} <br> ${stat.value || ''}</p>
                    </div>`
                    )
                    .join('')}
            </div>
            <div class="logos">
                <div class="natio">
                    <img src="${playerData.nationality || ''}" alt="Nationality">
                </div>
                <div class="club">
                    <img src="${playerData.club || ''}" alt="Club">
                </div>
            </div>`;
        return playerCard;
    }
    
    // Call the setupDragAndDrop function when the document i
        setupDragAndDrop();

});