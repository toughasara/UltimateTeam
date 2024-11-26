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
    let joueurs = localStorage.getItem('joueurs') || [];
    let sub = localStorage.getItem('sub') || [];


    afficherjours();

    function validation() {
        return Input.value.trim().length > 0;
    }

    function etatdebouton() {
        addpalyer.disabled = !validation();
    }

    function afficherjours() {
        alt;
    }

    function ajouterplayer(){
        if (!badgecherch) {
            joueurs.push(produit); 
            alert("joueur ajouté !");
            afficherjours();
        }
       
    }

});