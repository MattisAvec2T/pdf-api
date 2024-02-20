const form: HTMLFormElement | null = document.querySelector("form#letter-form");
const button: HTMLButtonElement | null = document.querySelector(
  "#letter-form button[type=submit]"
);

const isOfTypeLetter = (object: any): object is Letter => {
  return (
    "sender_name" in object &&
    "sender_service" in object &&
    "sender_address" in object &&
    "sender_zipcode" in object &&
    "sender_town" in object &&
    "sender_phone" in object &&
    "sender_mail" in object &&
    "receiver_name" in object &&
    "receiver_service" in object &&
    "receiver_address" in object &&
    "receiver_zipcode" in object &&
    "receiver_town" in object &&
    "letter_object" in object &&
    "letter_body" in object
  );
};

if (form) {
  form.addEventListener("submit", (e): void => {
    e.preventDefault();
    if (button) {
      button.disabled = true;
    }

    const formData: FormData = new FormData(form);
    const formObject: Record<string, string | null> = {};
    formData.forEach((value, key) => {
      // Change from kebab-case to snake_case (input name are in kebab-case and interface's keys are in snake_case)
      key = key.replace(/-/g, "_");
      // Check if value has content (ignoring spaces for typos)
      let newValue: string | null = value.toString();
      newValue = /[a-zA-Z\d]/.test(newValue.replace(" ", "")) ? newValue : null;
      formObject[key] = newValue;
    });

    // Check if the form has the good data format
    if (isOfTypeLetter(formObject)) {
      sendApiPostRequest(letterApiDomain, formObject)
        .then((response: object) => {
          // if the response sends an id, the letter was sent
          if ("id" in response) {
            window.location.href = `download/${response.id}`;
          } else {
            console.error("Request to Database Failed");
            alert(`Request to Database Failed.\nPress OK to Refresh`);
            window.location.reload();
          }
        })
        .catch((error: Error) => {
          console.error("Failed to connect to the API :", error);
          alert(
            `Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`
          );
          window.location.reload();
        });
    } else {
      alert("Wrong form data.\nPress OK to Refresh");
      window.location.reload();
    }
  });
}
