import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { router } from "./routes/HealthRouter";

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4002;
const SERVICE = process.env.SERVICE_NAME;

app.use("/api/", router);

app.listen(PORT, () => console.log(`${SERVICE} listening on ${PORT}`));
