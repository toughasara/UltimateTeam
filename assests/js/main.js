document.addEventListener("DOMContentLoaded", () => {
    // const nameInput = document.getElementById('player-name');
    // const natioInput = document.getElementById('player-nationality');
    // const clubInput = document.getElementById('player-club');
    // const positionInput = document.getElementById('player-position');
    // const rateInput = document.getElementById('player-rating');
    // const paceInput = document.getElementById('player-pace');
    // const shootingInput = document.getElementById('player-shooting');
    // const passingInput = document.getElementById('player-passing');
    // const dribblingInput = document.getElementById('player-dribbling');
    // const defendingInput = document.getElementById('player-defending');
    // const physicalInput = document.getElementById('player-physical');
    const addpalyer = document.querySelector("button[type='submit']");
    const Input = document.querySelectorAll('input');
    const positionInput = document.getElementById('player-position');
    const GKbadges = document.querySelector("#gk-badges");
    const LBbadges = document.querySelector("#lb-badges");
    let joueurs = localStorage.getItem('joueurs') || [];
    let sub = localStorage.getItem('sub') || [];
    let position = positionInput.value;
    let GK = empty;
    let CB = empty;
    let LB = empty;
    let RB = empty;
    let CD = empty;
    let CM = empty;
    let LW = empty;
    let RW = empty;
    let LM = empty;
    let RM = empty;
    let ST = empty;


    // vaaaliiidaaationnn
    function validation() {
        return Input.value.trim().length > 0;
    }
    function etatdebouton() {
        addpalyer.disabled = !validation();
    }
    document. forms [0].onsubmit = function (event) {
        let infoValid = false;
        if (Input.value.trim().length > 0) {
            infoValid = true;
        }
        if (infoValid === false) {
            event.preventDefault ();
            etatdebouton();
            alert("veuillez terminer la renplissage de formulaire !");
        }
    };




    function affichierFavorites() {
        joueurs.innerHTML = "";  
        if (favorites.length === 0) {
            favoritespage.innerHTML = "<p>Aucun produit dans les favoris.</p>";
        }
        else {
            favorites.forEach(produit => {
                const favoritCard = `
                    <div class="card favorite-card">
                        <img src="${produit.image}" alt="${produit.name}">
                        <h5>${produit.name}</h5>
                        <p>$${produit.price.toFixed(2)}</p>
                        <button class="btn btn-outline-danger btn-sm" onclick="supprimerdefavories(${produit.id})"><i class="fas fa-heart-broken"></i> Retirer</button>
                        <button class="btn btn-outline btn-sm" onclick="addToCart(${produit.id})"><i class="fas fa-shopping-cart"></i> Ajouter Au panier</button>
                    </div>
                `;
                favoritespage.innerHTML += favoritCard;
            });
        }
    }

    // affiiiiiichaaaaaageeeee
    function afficherjours() {
        switch(position) {
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case LB:
                LBbadges.innerHTML = `
                    <div id="lb-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            case GK:
                GKbadges.innerHTML = `
                    <div id="gk-badges" class="badges col-12">
                        badge() 
                    </div>
                `;
                break;
            default:
              // code block
        }
    }

    function affichierFavorites() {
        favoritespage.innerHTML = "";  
        if (favorites.length === 0) {
            favoritespage.innerHTML = "<p>Aucun produit dans les favoris.</p>";
        }
        else {
            favorites.forEach(produit => {
                const favoritCard = `
                    <div class="card favorite-card">
                        <img src="${produit.image}" alt="${produit.name}">
                        <h5>${produit.name}</h5>
                        <p>$${produit.price.toFixed(2)}</p>
                        <button class="btn btn-outline-danger btn-sm" onclick="supprimerdefavories(${produit.id})"><i class="fas fa-heart-broken"></i> Retirer</button>
                        <button class="btn btn-outline btn-sm" onclick="addToCart(${produit.id})"><i class="fas fa-shopping-cart"></i> Ajouter Au panier</button>
                    </div>
                `;
                favoritespage.innerHTML += favoritCard;
            });
        }
    }

    function affichersub() {
        
    }

    // ajouuuuuteeeerrr jouuuueuuuur
    function ajouterplayer(position){
        const badgecherch = joueurs.some(item => item.position === position);
        if (!badgecherch) {
            joueurs.push(position); 
            // localStorage.setItem('joueurs', position);
            alert("joueur ajouté !");
            saveplayer()
            afficherjours();
        }
        else {
            sub.push(position); 
            localStorage.setItem('sub', position);  
            alert("pas de place disponible , joueur ajouter au remplacement !");
            affichersub();
        }
    }
    function ajouteraufavories(produitId){
        const produit = { id: produitId };
        const produitExists = favorites.some(item => item.id === produitId);
        if (!produitExists) {
            favorites.push(produit); 
            localStorage.setItem('favorites', JSON.stringify(favorites));  
            alert("Produit ajouté aux favoris !");
            affichierFavorites();
        }
        else {
            alert("Produit déjà dans les favoris.");
        }
    }

    // saaaveee jouuueuuur
    function saveplayer() {
        localStorage.setItem('joueurs', joueurs);
    }

});