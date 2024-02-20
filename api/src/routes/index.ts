import express, { Express, Router } from "express";
import findLetterByIdController from "../controllers/getLetterByIdController";
import findAllLettersController from "../controllers/getAllLettersController";
import createLetterController from "../controllers/createLetterController";
import deleteLetterByIdController from "../controllers/deleteLetterByIdController";

export function setupRoutes(app: Express): void {
  const letterRouter: Router = express.Router();

  letterRouter.get("/:id", findLetterByIdController);
  letterRouter.get("/", findAllLettersController);
  letterRouter.post("/", createLetterController);
  letterRouter.delete("/:id", deleteLetterByIdController);

  app.use("/letter", letterRouter);
}
