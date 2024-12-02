import { Router } from "express";
import { healthCheck } from "controllers/Health";
import { createInventory } from "@/controllers/Create";

export const router = Router();

router.get("/healthcheck", healthCheck);

router.post("/create", createInventory);
