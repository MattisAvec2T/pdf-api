import { Request, Response, NextFunction } from "express";
import { getLetterById } from "../models/letters.model";
import { createLetter } from "../services/generatePDF";

export default async function getAllLettersController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = Number(req.params.id);
    const response = await getLetterById(id);
    if (response) {
      const doc = createLetter(response);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="letter_${response.sender_name}_${response.created_at}.pdf"` // response.created_at
      );
      res.status(200);
      doc.pipe(res);
      doc.end();
    } else {
      res.status(404).json({
        message: "ressource not found",
      });
    }
  } catch (error) {
    next(error);
  }
}
