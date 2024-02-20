"use strict";
const main = document.querySelector("main");
function handleDeleteLetter(id) {
    sendApiDeleteRequest(`${letterApiDomain}/${id}`)
        .then((response) => {
        // if the response sends an id, the letter was deleted
        if ("id" in response) {
            window.location.reload();
        }
        else {
            console.error("Request to Database Failed");
            alert(`Request to Database Failed.\nPress OK to Refresh`);
            window.location.reload();
        }
    })
        .catch((error) => {
        console.error("Erreur lors de la connexion à l'API :", error);
        alert(`Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`);
        window.location.reload();
    });
}
function generateDOMElements(letters) {
    if (main) {
        if (letters.length === 0) {
            const emptyArrayWitness = document.createElement("p");
            emptyArrayWitness.classList.add("empty-letters-witness");
            emptyArrayWitness.innerText = "L'Historique est vide";
            main.appendChild(emptyArrayWitness);
        }
        letters.map((letter) => {
            // Letter Card Left
            const entityInfos = document.createElement("div");
            entityInfos.classList.add("entity-infos");
            entityInfos.innerHTML = `
        <h3 class="sender-name"><strong>Expéditeur : </strong> ${letter.sender_name}</h3>
        <h3 class="receiver-name"><strong>Destinataire : </strong> ${letter.receiver_name}</h3>
      `;
            const letterObject = document.createElement("div");
            letterObject.classList.add("letter-object");
            letterObject.innerHTML = `
        <h3 class="letter-object-title"><strong>Objet</strong></h3>
        <p class="letter-object-content">${letter.letter_object}</p>
      `;
            const letterCardLeft = document.createElement("div");
            letterCardLeft.classList.add("letter-card-left");
            letterCardLeft.appendChild(entityInfos);
            letterCardLeft.appendChild(letterObject);
            // Letter Card Right
            const downloadButton = document.createElement("button");
            downloadButton.classList.add("download-btn");
            downloadButton.setAttribute("onClick", `handleDownloadLetter(${letter.id})`);
            downloadButton.innerHTML = "Télécharger PDF";
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.setAttribute("onClick", `handleDeleteLetter(${letter.id})`);
            deleteButton.innerHTML = "Supprimer de l'Historique";
            const letterCardRight = document.createElement("div");
            letterCardRight.classList.add("letter-card-right");
            letterCardRight.appendChild(downloadButton);
            letterCardRight.appendChild(deleteButton);
            // Letter Card
            const letterCard = document.createElement("div");
            letterCard.classList.add("letter-card");
            letterCard.appendChild(letterCardLeft);
            letterCard.appendChild(letterCardRight);
            main.appendChild(letterCard);
        });
    }
}
sendApiGetRequest(letterApiDomain)
    .then((response) => {
    if (response.constructor === Array) {
        generateDOMElements(response);
    }
})
    .catch((error) => {
    console.error("Erreur lors de la connexion à l'API :", error);
    alert(`Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`);
    window.location.reload();
});
