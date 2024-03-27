import express from "express";
import { Test } from "../controllers/test.js";


export const router = express.Router();


router.get("/",Test)