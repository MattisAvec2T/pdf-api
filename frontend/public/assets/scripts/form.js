"use strict";
const form = document.querySelector("form#letter-form");
const button = document.querySelector("#letter-form button[type=submit]");
const isOfTypeLetter = (object) => {
    return ("sender_name" in object &&
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
        "letter_body" in object);
};
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (button) {
            button.disabled = true;
        }
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            // Change from kebab-case to snake_case (input name are in kebab-case and interface's keys are in snake_case)
            key = key.replace(/-/g, "_");
            // Check if value has content (ignoring spaces for typos)
            let newValue = value.toString();
            newValue = /[a-zA-Z\d]/.test(newValue.replace(" ", "")) ? newValue : null;
            formObject[key] = newValue;
        });
        // Check if the form has the good data format
        if (isOfTypeLetter(formObject)) {
            sendApiPostRequest(letterApiDomain, formObject)
                .then((response) => {
                // if the response sends an id, the letter was sent
                if ("id" in response) {
                    window.location.href = `download/${response.id}`;
                }
                else {
                    console.error("Request to Database Failed");
                    alert(`Request to Database Failed.\nPress OK to Refresh`);
                    window.location.reload();
                }
            })
                .catch((error) => {
                console.error("Failed to connect to the API :", error);
                alert(`Failed to connect to the API (${letterApiDomain}).\nPress OK to Refresh`);
                window.location.reload();
            });
        }
        else {
            alert("Wrong form data.\nPress OK to Refresh");
            window.location.reload();
        }
    });
}
