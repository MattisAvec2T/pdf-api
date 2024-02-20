const downloadButton: HTMLButtonElement | null = document.querySelector(
  "button#download-btn"
);
const parts: Array<string> = window.location.pathname.split("/");
const id: number = Number(parts[parts.length - 1]);

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    handleDownloadLetter(id);
  });
}
