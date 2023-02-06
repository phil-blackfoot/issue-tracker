import {
  getIssues,
  addIssue,
  deleteIssue,
  updateIssue,
} from "../models/issues";
const express = require("express");
import { authCheck } from "./auth";
import { Request, Response } from "express";

const router = express.Router();
console.log("controller started");

// Get issues for current user
router.get("/home", authCheck, async (req: Request, res: Response) => {
  const issuesFound = await getIssues({ userId: req.user.sub });
  res.send(issuesFound);
});

// Add issue
router.post("/new", async (req: Request, res: Response) => {
  await addIssue(req.body);
  res.status(201).send();
});

// Update issue by ID
router.put("/edit/:id", async (req: Request, res: Response) => {
  await updateIssue(req.body);
  res.status(201).send();
});

// Delete issue by ID
router.delete("/delete/:id", async (req: Request, res: Response) => {
  await deleteIssue(req.params.id);
  res.status(200).send();
});

module.exports = router;
