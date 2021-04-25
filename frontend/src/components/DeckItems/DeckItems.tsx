import { DeckWithSize } from "../../interface/Deck"
import DeckItem from "./DeckItem/DeckItem"

import classes from './DeckItems.module.css'

type DeckItemsProps = {
    decks: DeckWithSize[]
}

const DeckItems = ({decks}:DeckItemsProps):JSX.Element => {

    const decksDisplay = decks.map(deck => {
        return <DeckItem title={deck.name} size={deck.size} key={deck._id} id={deck._id} />
    })

    return (
        <div className={classes.Container}>
            <div className={classes.Grid}>
                {decksDisplay}
            </div>
        </div>
    )
}

export default DeckItems