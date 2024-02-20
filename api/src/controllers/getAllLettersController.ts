import { Request, Response, NextFunction } from "express";
import { getAllLetters } from "../models/letters.model";

export default async function getAllLettersController(
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const response = await getAllLetters();

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
