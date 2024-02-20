import { Request, Response, NextFunction } from "express";
import { createLetter } from "../models/letters.model";

export default async function createLetterController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {
      sender_name,
      sender_service,
      sender_address,
      sender_zipcode,
      sender_town,
      sender_phone,
      sender_mail,
      receiver_name,
      receiver_service,
      receiver_address,
      receiver_zipcode,
      receiver_town,
      letter_object,
      letter_body,
    } = req.body;

    const response = await createLetter({
      sender_name: sender_name,
      sender_service: sender_service,
      sender_address: sender_address,
      sender_zipcode: sender_zipcode,
      sender_town: sender_town,
      sender_phone: sender_phone,
      sender_mail: sender_mail,
      receiver_name: receiver_name,
      receiver_service: receiver_service,
      receiver_address: receiver_address,
      receiver_zipcode: receiver_zipcode,
      receiver_town: receiver_town,
      letter_object: letter_object,
      letter_body: letter_body,
    });

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}
