interface DeckBase {
    name: string;
}

interface DeckWithId {
    _id: string;
}

export interface DeckDetailedBase extends DeckBase {
    pairs: { startingWord: string; goalWord: string }[];
}

export interface DeckDetailed extends DeckDetailedBase, DeckWithId {}

export interface DeckWithSize extends DeckBase, DeckWithId {
    size: number;
}
