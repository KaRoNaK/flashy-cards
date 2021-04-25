import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import deckRoutes from "./src/routes/deckRoute.js";
import errorHandler from "./src/middleware/errorHandler.js";

const app = express();

dotenv.config();
app.use(express.json());

const corsOption = {
    origin: process.env.ORIGIN,
};
app.use(cors(corsOption));

app.use("/decks", deckRoutes);

app.use((req, res) => {
    res.json({ message: "Route not found" });
});

app.use(errorHandler);

mongoose
    .connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        const port = process.env.PORT || 5001;
        app.listen(port, () => {
            console.log("server running");
        });
    })
    .catch((err) => console.log(err));
