import express, { Express } from "express";
import cors from "cors";

export function configureExpress(app: Express): void {
  app.use(cors());
  app.use(express.json());
}
