fetch('https://nico-on-web.github.io/sneakers-assignement-js/sneakers.json')
  .then(response => response.json())
  .then(data => {

console.log(data.nomCommercial)
    //afficherProduits(data)
    //apeller affciherProduit

    afficherProduit(data.produits)
    afficherService(data.services)
   afficherTemoignage(data.temoignages)
   afficherPhraseAccroche(data)
   affichertexteAppelAction(data)
  });


  function afficherProduit(tableauProduit) {

    tableauProduit.forEach(produit=>{

        console.log(produit.nom)
        document.getElementById("section-produits").innerHTML+= 
        `  <div class="w30 card " >
            <!-- produit -->
            <div>
            <img src="${produit.imageUrl}" alt="" class="w100 mb">
                <h2>"${produit.nom}"</h2>
            </div>
            <p>"${produit.description}".</p>
            
        </div>`
    })}


 function afficherService(service) {

  

       
        document.getElementById("section-services").innerHTML+= 
        ` <div class="card w30">
            <!-- personalisation -->
                <img src="asset/195e7f9b62d9aa38ef36281c4847ada8-removebg-preview.png" class="w100" alt="">
                <h2>${service[0].nom}</h2>
               
           
                <p>${service[0].description}</p>
            </div>
            <div class="card w30">
            <!-- personalisation -->
                <img src="asset/e5ee1b24d907e38ea2ce768826488ea7-removebg-preview.png" class="w100" alt="">
                <h2>${service[1].nom}</h2>
               
           
                <p>${service[1].description}</p>
            </div>
            <div class="card w30">
            <!-- personalisation -->
                <img src="asset/66b1f66bf52948b5e76774e8f3e9347e-removebg-preview.png" class="w100" alt="">
                <h2>${service[2].nom}</h2>
               
           
                <p>${service[2].description}</p>
            </div>
        `
       
    }


 function afficherTemoignage(tableautemoignage) {

    tableautemoignage.forEach(temoignage=>{

       
        document.getElementById("section-temoignages").innerHTML+= 
        ` <div class="card w20">
                <h2 >${temoignage.prenom}</h2>
                <p >${temoignage.typeExperience}</p>
           
            <p >${temoignage.commentaire}
            </p>
           </div>`
    })}

    
function afficherPhraseAccroche(data) {

        document.getElementById("div-hero").innerHTML+= 


   `
            <p>${data.phraseAccroche}</p>
            <a href=""class="btn txt-white">${data.texteAppelAction}</a>`
  


    }
