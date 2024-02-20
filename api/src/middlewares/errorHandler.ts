import { Request, Response } from "express";

export function errorMiddleware(err: Error, _: Request, res: Response): void {
  res.status(500).json({ message: "Request failed", details: err });
}

export function error404Middleware(_: Request, res: Response): void {
  res.status(404).json({ message: "Ressource not found" });
}
