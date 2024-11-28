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
    const boutonAddStatistiques = document.querySelector("button[type='button']");
    const boutonAddPlayer = document.querySelector("button[type='submit']");
    const Input = document.querySelectorAll('input');
    const positionInput = document.getElementById('player-position');
    const GKbadges = document.querySelector("#gk-badges");
    const LBbadges = document.querySelector("#lb-badges");
    let joueurs = localStorage.getItem('joueurs') || [];
    let sub = localStorage.getItem('sub') || [];
    let position = positionInput.value;

    // vaaaliiidaaationnn
    function validation() {
        return Input.value.trim().length > 0;
    }
    function etatdebouton() {
        boutonAddPlayer.disabled = !validation();
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


    // pooosiiitiiiooonn
    function formposition() {
        if(validation){
            if(position === GK){}
            else{}
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

    // saaaveee jouuueuuur
    function saveplayer() {
        localStorage.setItem('joueurs', joueurs);
    }

});