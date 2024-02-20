import express, { Express } from "express";
import dotenv from "dotenv";
import { configureExpress } from "./config/express";
import { setupRoutes } from "./routes";
import { error404Middleware } from "./middlewares/errorHandler";

dotenv.config();

// Configuration & Routes
const app: Express = express();
configureExpress(app);
setupRoutes(app);
app.use(error404Middleware);

// Server start
const HOST: string = process.env.HOST || "http://localhost";
const PORT: string | number = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Serveur (front) démarré sur : ${HOST}:${PORT}`);
});
