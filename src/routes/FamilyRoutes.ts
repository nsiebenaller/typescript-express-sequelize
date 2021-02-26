import express from "express";
import Family from "../db/models/family";
import handle from "../utils/routeHandler";

const FamilyHandler = {
  get: handle(async (_req, res) => {
    const families = await Family.findAll();
    res.json(families);
  }),
  create: handle(async (req, res) => {
    const { name } = req.query;
    if (!name) {
      return res.json({
        success: false,
        data: null,
        errors: ["The field 'name' is required"],
      });
    }
    const family = await Family.create({ name });
    res.json(family);
  }),
  delete: handle(async (_req, res) => {
    res.json("not implemented");
  }),
};

const router = express.Router();
router
  .route("/")
  .get(FamilyHandler.get)
  .post(FamilyHandler.create)
  .delete(FamilyHandler.delete);

export default router;
