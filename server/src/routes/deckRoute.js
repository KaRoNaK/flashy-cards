import express from "express";

import {
    getDecks,
    createDeck,
    updateDeck,
    deleteDeck,
    getDeckById,
} from "../controllers/deckController.js";
import { checkDeck } from "../middleware/validation/deckValidation.js";

const router = express.Router();

router.get("/", getDecks);
router.get("/:id", getDeckById);
router.post("/", checkDeck, createDeck);
router.put("/:id", checkDeck, updateDeck);
router.delete("/:id", deleteDeck);

export default router;
