// Loaded by form.ejs in <script> element
declare const letterApiDomain: string;

interface Letter {
  id: number | undefined;
  date: Date | undefined;

  sender_name: string;
  sender_service: string | null;
  sender_address: string | null;
  sender_zipcode: string | null;
  sender_town: string | null;
  sender_phone: string | null;
  sender_mail: string | null;

  receiver_name: string;
  receiver_service: string | null;
  receiver_address: string | null;
  receiver_zipcode: string | null;
  receiver_town: string | null;

  letter_object: string;
  letter_body: string;
}

function handleDownloadLetter(id: number) {
  sendApiGetRequestBlobResponse(`${letterApiDomain}/${id}`)
    .then((blob) => {
      const downloadLink: HTMLAnchorElement = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      console.log(blob);
      downloadLink.download = `letter${id}`;
      downloadLink.click();
    })
    .catch((error: Error) => {
      console.error("Erreur lors de la connexion à l'API :", error);
      alert(
        `Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`
      );
      window.location.reload();
    });
}

async function sendApiPostRequest(
  url: URL | string,
  sendData: Letter
): Promise<object> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the API");
  }
}

async function sendApiGetRequest(
  url: URL | string
): Promise<Letter[] | Letter> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the API");
  }
}

async function sendApiGetRequestBlobResponse(url: URL | string): Promise<Blob> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const pdfFile: Blob = await response.blob();
    return pdfFile;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the API");
  }
}

async function sendApiDeleteRequest(url: URL | string): Promise<object> {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to the API");
  }
}
