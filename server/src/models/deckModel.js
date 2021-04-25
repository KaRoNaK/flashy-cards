import mongoose from "mongoose";

const requiredString = {
    type: String,
    required: true,
};

const deckSchema = new mongoose.Schema({
    name: requiredString,
    pairs: [
        {
            startingWord: requiredString,
            goalWord: requiredString,
        },
    ],
});

deckSchema.statics.getAllWithCountedPairs = function () {
    return this.aggregate().project({
        name: 1,
        size: { $size: "$pairs" },
    });
};

export default mongoose.model("Deck", deckSchema);
