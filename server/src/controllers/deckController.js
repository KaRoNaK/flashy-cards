// import { validationResult } from "express-validator";
import Deck from "../models/deckModel.js";
import asyncWrapper from "../middleware/asyncWrapper.js";
import { createError } from "../util/error.js";

export const getDecks = asyncWrapper(async (req, res, next) => {
    const decks = await Deck.getAllWithCountedPairs();

    res.json({ success: true, data: decks });
});

export const getDeckById = asyncWrapper(async (req, res, next) => {
    const deckId = req.params.id;

    const deck = await Deck.findById(deckId, {
        useFindAndModify: false,
    }).select(["-pairs._id", "-__v"]);

    if (!deck) {
        return next(createError(404, "Deck with given ID not found"));
    }

    res.json({ success: true, data: deck });
});

export const createDeck = asyncWrapper(async (req, res, next) => {
    const deckName = req.body["deckName"];
    const pairs = req.body["pairs"];
    const deck = new Deck({ name: deckName, pairs });

    const createdDeck = await deck.save();

    res.status(201).json({ success: true, data: createdDeck });
});

export const updateDeck = asyncWrapper(async (req, res, next) => {
    const deckName = req.body["deckName"];
    const pairs = req.body["pairs"];
    const deckId = req.params.id;
    const updateDeck = { name: deckName, pairs };

    const updateResult = await Deck.findByIdAndUpdate(deckId, updateDeck, {
        useFindAndModify: false,
    });

    if (!updateResult) {
        return next(createError(404, "Deck with given ID not found"));
    }
    res.json({ success: true, data: updateResult });
});

export const deleteDeck = asyncWrapper(async (req, res, next) => {
    const deckId = req.params.id;

    const deleteResult = await Deck.findByIdAndRemove(deckId, {
        useFindAndModify: false,
    });

    if (!deleteResult) {
        return next(createError(404, "Deck with given ID not found"));
    }

    res.json({ success: true, data: {} });
});
