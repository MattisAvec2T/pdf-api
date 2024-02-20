import { Request, Response } from "express";

export function error404Middleware(_: Request, res: Response): void {
  res.status(404).render("page404");
}
