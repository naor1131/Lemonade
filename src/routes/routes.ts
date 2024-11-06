import { Router, Request, Response } from "express";

const router = Router();

router.get("", async (req: Request, res: Response) => {
  const { id } = req.query;

  res.status(200).json({ ping: "ok", id: id });
});

router.post("", async (req: Request, res: Response) => {
  const { id } = req.body;

  res.status(200).json({ ping: "ok", id: id });
});

export default router;
