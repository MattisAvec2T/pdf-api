import { Request, Response, NextFunction } from "express";
import { deleteLetterById } from "../models/letters.model";

export default async function deleteLetterByIdController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = Number(req.params.id);
    const response = await deleteLetterById(id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}
