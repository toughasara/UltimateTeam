document.addEventListener("DOMContentLoaded", () => {
    const Inputs = document.querySelectorAll('input');
    const positionInput = document.getElementById('player-position');
    const GKbadges = document.querySelector("#gk-badges");
    const LBbadges = document.querySelector("#lb-badges");
    const joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
    const trainjrs = JSON.parse(localStorage.getItem("subs")) || [];
    let position = positionInput.value;
    const addButton = document.getElementById('add-player-button');

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

    // stooooockkkerrrr le jouur
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
            if(position === 'GK'){
                cartesjours.innerHTML += `
                <div class="carte">
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
            saveJrs();
        } 
        else {
            alert('Veuillez remplir tous les champs correctement');
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


    positionInput.addEventListener('input', () => affichform());
    addButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission if inside a form
        clique();
    });
});