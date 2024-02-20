import PDFDocument from "pdfkit";
import { Letter } from "../config/database.types";

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth();
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return `${day} ${monthNames[month]}`;
}

export function createLetter(letterData: Letter): typeof PDFDocument {
  const doc = new PDFDocument();
  const regularFont: string = "Helvetica";
  const boldFont: string = "Helvetica-Bold";
  doc.fillColor("#1c1c1c").fontSize(12).font(regularFont);

  // Sender Infos
  let senderInfoText = letterData.sender_name;
  if (letterData.sender_service) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_service}`;
  }
  if (letterData.sender_address) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_address}`;
  }
  if (letterData.sender_zipcode) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_zipcode}`;
    if (letterData.sender_town) {
      senderInfoText = `${senderInfoText}, ${letterData.sender_town}`;
    }
  }
  if (letterData.sender_town && !letterData.sender_zipcode) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_town}`;
  }
  if (letterData.sender_phone) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_phone}`;
  }
  if (letterData.sender_mail) {
    senderInfoText = `${senderInfoText}\n${letterData.sender_mail}`;
  }
  doc
    .font(boldFont)
    .text(senderInfoText.slice(0, letterData.sender_name.length), {
      align: "left",
      continued: true,
    })
    .font(regularFont)
    .text(senderInfoText.slice(letterData.sender_name.length));
  doc.moveDown();

  // Receiver
  let receiverInfoText = letterData.receiver_name;
  if (letterData.receiver_service) {
    receiverInfoText = `${receiverInfoText}\n${letterData.receiver_service}`;
  }
  if (letterData.receiver_address) {
    receiverInfoText = `${receiverInfoText}\n${letterData.receiver_address}`;
  }
  if (letterData.receiver_zipcode) {
    receiverInfoText = `${receiverInfoText}\n${letterData.receiver_zipcode}`;
    if (letterData.receiver_town) {
      receiverInfoText = `${receiverInfoText}, ${letterData.receiver_town}`;
    }
  }
  if (letterData.receiver_town && !letterData.receiver_zipcode) {
    receiverInfoText = `${receiverInfoText}\n${letterData.receiver_town}`;
  }
  doc
    .font(boldFont)
    .text(receiverInfoText.slice(0, letterData.receiver_name.length), {
      align: "right",
      continued: true,
    })
    .font(regularFont)
    .text(receiverInfoText.slice(letterData.receiver_name.length));
  doc.moveDown().moveDown();

  // When/Where
  const createdAt: Date = new Date(String(letterData.created_at));
  doc.text(
    letterData.sender_town
      ? `${letterData.sender_town}, le ${formatDate(createdAt)}`
      : `Le ${formatDate(createdAt)}`,
    {
      align: "right",
    }
  );
  doc.moveDown().moveDown();

  // Object
  doc.font(boldFont).text(`Objet : ${letterData.letter_object}`, {
    align: "left",
  });
  doc.font(regularFont).moveDown();

  // Letter Body
  doc.text(letterData.letter_body, {
    align: "left",
  });
  doc.moveDown();

  // Sender Signature (Name)
  doc.text(letterData.sender_name, {
    align: "right",
  });

  return doc;
}
