document.addEventListener("DOMContentLoaded", () => {
    // const modal = document.getElementById('modal');
    const positionInput = document.getElementById('player-position');
    const joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
    const addButton = document.getElementById('add-player-button');
    const modal = document.querySelector('#modal');
    const cartesjours = document.getElementById('remp');

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
        const form = document.getElementById('add-player-form');

        // cree object FormData
        const formData = new FormData(form);

        // cree object pour stocker un joueur
        const jour = {};

        // remplir l'object 
        formData.forEach((value, key) => {
            jour[key] = value;
        });

        jour.id = Date.now(); 

        // stocker l'object dons un array
        joueurs.push(jour);

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

    // fiiiiiiiiiltreeeeeeeee array de joooooooooouuueeeeeuuuuurs
    // Fonction pour filtrer les joueurs par position
    function filterPlayers(joueurs, positionflt) {
        // Si aucune position spécifique, on retourne tous les joueurs
        return joueurs.filter(jour => jour.position === positionflt);
    }
    
    // Fonction pour afficher les joueurs dans le div modal
    function renderPlayers(filteredJoueurs) {
        const modal = document.querySelector('#modal');
        modal.innerHTML = ''; // Réinitialiser le contenu du modal
        
        // Créer des cartes pour chaque joueur filtré
        filteredJoueurs.forEach(jour => {
            // Affichage spécifique pour les joueurs de position "GK"
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
    
        // Rendre le modal visible
        modal.classList.remove('d-none');
    }
    
    // Ajouter un événement aux boutons pour filtrer les joueurs
    function setupPositionButtons() {
        const positionButtons = document.querySelectorAll('.add-player-btn');
        positionButtons.forEach(button => {
        console.log(button)

            button.addEventListener('click', function () {
                // alert('rani khdama hhhh');
                // Extraire la position depuis la classe du bouton
                const positionflt = button.classList[1].toUpperCase(); // Exemple : "lw", "st", etc.
    
                // Filtrer les joueurs par position
                const joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];

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

    // // --------------------------------supprimerJoueur-------------------------------------
    // function supprimerJoueur(playerId) {
    //     // joueurs.filter(jour => jour.id !== playerId);
    //     // const playerId = cart.getAttribute('data-id'); 
    //     joueurs = joueurs.filter(jour => jour.id !== playerId);
    //     cartesjours[playerId].remove();
    //     savearray();
    //     affichjrrmp();
    // }

    // -------------------------------modifierJoueur--------------------------------------------
    function modifierJoueur(playerId) {
        const joueur = joueurs.find(jour => jour.id === playerId);
    
        if (joueur) {
            document.querySelector('#form-name').value = joueur.name;
            document.querySelector('#form-position').value = joueur.position;
            document.querySelector('#form-rating').value = joueur.ratingnot;
            document.querySelector('#form-photo').value = joueur.photo;
    
            // Ajouter un attribut pour savoir quel joueur on modifie
            document.querySelector('#add-player-form').setAttribute('data-player-id', playerId);
        } 
        else {
            alert('Joueur introuvable');
        }
    }
    // ------------sauvegarder modification-------------
    document.querySelector('#add-player-button').addEventListener('click', function () {
        const playerId = document.querySelector('#add-player-form').getAttribute('data-player-id');
        
        // Trouver le joueur à modifier par son ID
        const joueur = joueurs.find(jour => jour.id === playerId);
    
        if (joueur) {
            joueur.name = document.querySelector('#form-name').value;
            joueur.position = document.querySelector('#form-position').value;
            joueur.ratingnot = document.querySelector('#form-rating').value;
            joueur.photo = document.querySelector('#form-photo').value;
            savearray()            
            alert('Les modifications ont été enregistrées avec succès.');
        } 
        else {
            alert('Joueur introuvable.');
        }
    });

    // ----------button innerhtml----------------
    document.addEventListener('click', function (event) {
        if (event.target.closest('.close-modal')) {
            const modal = document.querySelector('#modal');
            modal.classList.add('d-none'); // Cacher le modal
        }

        if (event.target.closest('.supprimer')) {
            const cart = event.target.closest('.cart'); 
            if (!cart) {
                alert('Impossible de trouver un parent avec la classe .cart');
                return;
            }
            const playerId = cart.getAttribute('data-id');
            if (!playerId) {
                alert('Erreur : aucun data-id trouvé.');
                return;
            }            
            supprimerJoueur(playerId);
        }
    
        if (event.target.closest('.modifier')) {
            const cart = event.target.closest('.cart');
            const playerId = cart.getAttribute('data-id'); // Récupérer l'ID du joueur
            modifierJoueur(playerId); // Appeler la fonction de modification
        }
    });

     // --------------------------------supprimerJoueur-------------------------------------
    function supprimerJoueur(playerId) {
        // joueurs.filter(jour => jour.id !== playerId);
        // const playerId = cart.getAttribute('data-id'); 
        joueurs = joueurs.filter(jour => jour.id !== playerId);
        cartesjours[playerId].remove();
        savearray();
        affichjrrmp();
    }

    positionInput.addEventListener('input', () => affichform());
    
    addButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission if inside a form
        clique();
    });
    // initialise button
    // modal.classList.add('d-none');
    setupPositionButtons();

});