"use strict";
const downloadButton = document.querySelector("button#download-btn");
const parts = window.location.pathname.split("/");
const id = Number(parts[parts.length - 1]);
if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        handleDownloadLetter(id);
    });
}
