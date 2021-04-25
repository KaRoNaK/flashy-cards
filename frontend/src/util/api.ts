import axios from "axios";
import { DeckDetailed, DeckWithSize } from "../interface/Deck";

const BASE_URL = "http://localhost:5000";

export const getAllDecks = async (): Promise<Array<DeckWithSize>> => {
    const callResult = await axios.get(`${BASE_URL}/decks`);

    return callResult.data.data;
};

export const getDeckById = async (id: string): Promise<DeckDetailed> => {
    const callResult = await axios.get(`${BASE_URL}/decks/${id}`);

    return callResult.data.data;
};
