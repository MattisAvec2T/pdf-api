const main: HTMLElement | null = document.querySelector("main");

function handleDeleteLetter(id: number) {
  sendApiDeleteRequest(`${letterApiDomain}/${id}`)
    .then((response) => {
      console.log(`${letterApiDomain}/${id}`);
      console.log("Réponse de l'API :");
      console.log(response);
      // redirect
    })
    .catch((error: Error) => {
      console.error("Erreur lors de la connexion à l'API :", error);
      alert(
        `Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`
      );
      window.location.reload();
    });
}

function generateDOMElements(letters: Letter[]): void {
  if (main) {
    if (letters.length === 0) {
      // affiche "Vide"
      return;
    }
    letters.map((letter) => {
      // Letter Card Left
      const entityInfos: HTMLElement = document.createElement("div");
      entityInfos.classList.add("entity-infos");
      entityInfos.innerHTML = `
        <h3 class="sender-name">${letter.sender_name}</h3>
        <h3 class="receiver-name">${letter.receiver_name}</h3>
      `; // mauvaise casse
      const letterObject: HTMLElement = document.createElement("div");
      letterObject.classList.add("letter-object");
      letterObject.innerHTML = `
        <h3 class="letter-object-title">Objet</h3>
        <p class="letter-object-content">${letter.letter_object}</p>
      `;
      const letterCardLeft: HTMLElement = document.createElement("div");
      letterCardLeft.classList.add("letter-card-left");
      letterCardLeft.appendChild(entityInfos);
      letterCardLeft.appendChild(letterObject);

      // Letter Card Right
      const downloadButton: HTMLButtonElement =
        document.createElement("button");
      downloadButton.classList.add("download-btn");
      downloadButton.setAttribute(
        "onClick",
        `handleDownloadLetter(${letter.id})`
      );
      downloadButton.innerHTML = "Télécharger PDF";
      const deleteButton: HTMLButtonElement = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.setAttribute("onClick", `handleDeleteLetter(${letter.id})`);
      deleteButton.innerHTML = "Supprimer de l'Historique";
      const letterCardRight: HTMLElement = document.createElement("div");
      letterCardRight.classList.add("letter-card-right");
      letterCardRight.appendChild(downloadButton);
      letterCardRight.appendChild(deleteButton);

      // Letter Card
      const letterCard: HTMLElement = document.createElement("div");
      letterCard.classList.add("letter-card");
      letterCard.appendChild(letterCardLeft);
      letterCard.appendChild(letterCardRight);
      main.appendChild(letterCard);
    });
  }
}

sendApiGetRequest(letterApiDomain)
  .then((response) => {
    console.log("Réponse de l'API :");
    console.log(response);
    if (response.constructor === Array) {
      generateDOMElements(response);
    }
  })
  .catch((error: Error) => {
    console.error("Erreur lors de la connexion à l'API :", error);
    alert(
      `Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`
    );
    window.location.reload();
  });
