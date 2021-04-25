import { body, validationResult } from "express-validator";
import { createError } from "../../util/error.js";

const checkDeck = [
    body("name")
        .exists({ checkFalsy: true })
        .withMessage("Deck name was not provided")
        .bail()
        .isString()
        .withMessage("Deck name is not a string"),
    body("pairs")
        .exists({ checkFalsy: true })
        .withMessage("Pairs were not provided")
        .bail()
        .isArray()
        .withMessage("Pairs is not an array")
        .bail()
        .custom((pairs) => pairStructureCheck(pairs))
        .withMessage("The structure of pairs is not supported"),
    (req, res, next) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            next(createError(400, err.errors));
        }
        next();
    },
];

const pairStructureCheck = (pairs) => {
    const start = "startingWord";
    const goal = "goalWord";

    for (const pair of pairs) {
        if (!pair.hasOwnProperty(start) || !pair.hasOwnProperty(goal)) {
            return false;
        }
        if (!isValidString(pair[start]) || !isValidString(pair[goal])) {
            return false;
        }
    }

    return true;
};

const isValidString = (str) => {
    return typeof str === "string" && str.length > 0;
};

export { checkDeck };
