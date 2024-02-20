"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleDownloadLetter(id) {
    sendApiGetRequestBlobResponse(`${letterApiDomain}/${id}`)
        .then((blob) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `letter${id}`;
        downloadLink.click();
    })
        .catch((error) => {
        console.error("Erreur lors de la connexion à l'API :", error);
        alert(`Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`);
        window.location.reload();
    });
}
function sendApiPostRequest(url, sendData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendData),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return yield response.json();
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to connect to the API");
        }
    });
}
function sendApiGetRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return yield response.json();
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to connect to the API");
        }
    });
}
function sendApiGetRequestBlobResponse(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const pdfFile = yield response.blob();
            return pdfFile;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to connect to the API");
        }
    });
}
function sendApiDeleteRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return yield response.json();
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to connect to the API");
        }
    });
}
