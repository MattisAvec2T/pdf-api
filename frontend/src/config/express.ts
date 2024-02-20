import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();
export const letterApiDomain: string =
  process.env.LETTER_API_DOMAIN || "http://localhost:3060/letter/";

export function configureExpress(app: Express): void {
  // Use files in "public/"
  app.use(express.static("public"));
  // Render files in "public/views/ using ejs render mode
  app.set("view engine", "ejs");
  app.set("views", __dirname + "/../views/");
}
