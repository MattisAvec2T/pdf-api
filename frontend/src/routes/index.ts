import express, { Express, Router, Request, Response } from "express";
import { letterApiDomain } from "../config/express";

export function setupRoutes(app: Express): void {
  const router: Router = express.Router();

  // Form page
  router.get("/", (_: Request, res: Response) => {
    res.render("form", { letterApiDomain });
  });

  router.get("/history", (_: Request, res: Response) => {
    res.render("history", { letterApiDomain });
  });

  router.get("/download/:id", (_: Request, res: Response) => {
    res.render("download", { letterApiDomain });
  });

  app.use("/", router);
}
