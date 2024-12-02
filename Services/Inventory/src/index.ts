import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//healthcheck

app.get("/healthcheck", (req, res) => {
  res.status(200).json({ message: "Service is healthy" });
});

const PORT = process.env.PORT || 4002;
const SERVICE = process.env.SERVICE_NAME;

app.listen(PORT, () => console.log(`${SERVICE} listening on ${PORT}`));
