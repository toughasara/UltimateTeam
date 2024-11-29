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
    // const inputnumbrs = document.querySelectorAll('.numeros');
    // const statique = document.querySelectorAll(".static");
    const Inputs = document.querySelectorAll('input');
    const positionInput = document.getElementById('player-position');
    const GKbadges = document.querySelector("#gk-badges");
    const LBbadges = document.querySelector("#lb-badges");
    const joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
    const trainjrs = JSON.parse(localStorage.getItem("subs")) || [];
    let position = positionInput.value;
    
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
        const boutonAddPlayer = document.querySelector("button[type='submit']");
        const inputnumbrs = document.querySelectorAll('.numeros');
        const inputinfos = document.querySelectorAll('.infos');
        let toutvalid = true;

        inputnumbrs.forEach(function(input) {
            if (input.value.trim().length < 10 || input.value.trim().length > 100) {
                toutvalid = false;
                // input.style.borderColor = 'red';
            } 
        });

        inputinfos.forEach(function(input) {
            if (input.value.trim() === "") {
                toutvalid = false;
            } 
        });

        boutonAddPlayer.disabled = !toutvalid;
        return toutvalid;
    }

    // stooooockkkerrrr le jouur
    function saveUser() {
        const form = document.getElementById('add-player-form');

        // cree object FormData
        const formData = new FormData(form);

        // cree object pour stocker un joueur
        const jour = {};

        // remplir l'object 
        formData.forEach((value, key) => {
            jour[key] = value;
        });

        // stocker l'object dons un array
        joueurs.push(jour);

        localStorage.setItem("joueurs", JSON.stringify(joueurs));

        affichjrrmp();

        form.reset();
    }

    // affiiiiichiiiieeeer tout jouuuurs
    function affichjrrmp() {
        const cartesjours = document.getElementById('remp');
        cartesjours.innerHTML = '';
        joueurs.forEach((jour) =>  {
            if(position === GK){
                cartesjours.innerHTML += `
                <div class="carte">
                    <div class="badge-image">
                        <img src="assests/images/badge_gold.webp" alt="description">
                        <div class="contenu">
                            <div class="rating">
                                <div class="nom">
                                    <p>${jour.rating} <br> ${jour.position} </p>
                                </div>
                            </div>
                            <div class="profil-player">
                                <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="">
                            </div>
                            <div class="nom-player">
                                <h6>${jour.nom}</h6>
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
                                    <img src="https://cdn.sofifa.net/flags/pt.png" alt="">
                                </div>
                                <div class="club">
                                    <img src="https://cdn.sofifa.net/meta/team/2506/120.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge-titre">
                        <div class="d-flex justify-content-center ajmosu">
                            <button type="submit" class="" onclick="ajoueuipe()"><i class="fa-solid fa-plus"></i></button>
                            <button type="submit" class="" onclick="supprimer()"><i class="fa-solid fa-trash"></i></button>
                            <button type="submit" class="" onclick="modifier()"><i class="fa-solid fa-pen"></i></button>
                        </div>
                    </div> 
                </div>
                `;
            }
            else {
                cartesjours.innerHTML += `
                <div class="carte">
                    <div class="badge-image">
                        <img src="assests/images/badge_gold.webp" alt="description">
                        <div class="contenu">
                            <div class="rating">
                                <div class="nom">
                                    <p>${jour.rating} <br> ${jour.position} </p>
                                </div>
                            </div>
                            <div class="profil-player">
                                <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="">
                            </div>
                            <div class="nom-player">
                                <h6>${jour.nom}</h6>
                            </div>
                            <div class="statistiques">
                                <div class="nomb">
                                    <p>PAC <br> ${jour.pacing} </p>
                                </div>
                                <div class="nomb">
                                    <p>SHO <br> ${jour.shooting}</p>
                                </div>
                                <div class="nomb">
                                    <p>PASS <br>${jour.passing}</p>
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
                                    <img src="https://cdn.sofifa.net/flags/pt.png" alt="">
                                </div>
                                <div class="club">
                                    <img src="https://cdn.sofifa.net/meta/team/2506/120.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge-titre">
                        <div class="d-flex justify-content-center ajmosu">
                            <button type="submit" class="" onclick="ajoueuipe()"><i class="fa-solid fa-plus"></i></button>
                            <button type="submit" class="" onclick="supprimer()"><i class="fa-solid fa-trash"></i></button>
                            <button type="submit" class="" onclick="modifier()"><i class="fa-solid fa-pen"></i></button>
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
            saveUser();
            affichjrrmp();
        } 
        else {
            alert('Ces champ ne peut pas être vide');
        }
    }

    // function afficherjours() {
    //     switch(position) {
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case LB:
    //             LBbadges.innerHTML = `
    //                 <div id="lb-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         case GK:
    //             GKbadges.innerHTML = `
    //                 <div id="gk-badges" class="badges col-12">
    //                     badge() 
    //                 </div>
    //             `;
    //             break;
    //         default:
    //           // code block
    //     }
    // }

    // function affichersub() {
        
    // }

    // ajouuuuuteeeerrr jouuuueuuuur
    // function ajouterplayer(position){
    //     const badgecherch = joueurs.some(item => item.position === position);
    //     if (!badgecherch) {
    //         joueurs.push(position); 
    //         // localStorage.setItem('joueurs', position);
    //         alert("joueur ajouté !");
    //         saveplayer()
    //         afficherjours();
    //     }
    //     else {
    //         sub.push(position); 
    //         localStorage.setItem('sub', position);  
    //         alert("pas de place disponible , joueur ajouter au remplacement !");
    //         affichersub();
    //     }
    // }


    positionInput.addEventListener('input', () => affichform());
});