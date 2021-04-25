import { useEffect, useState } from 'react'
import DeckItems from '../../components/DeckItems/DeckItems'

import {DeckWithSize} from '../../interface/Deck'
import { getAllDecks } from '../../util/api'
import classes from './DeckBrowser.module.css'

const DeckBrowser = () :JSX.Element => {
    const [decks, setDecks] = useState<DeckWithSize[]>([])

    useEffect(() => {
        const fetchDecks = async () => {
            const decksRes = await getAllDecks()
            setDecks(decksRes)
        }

        fetchDecks()
    }, [])

    return (
        <div className={classes.Background}>
            <div className={classes.Container}>
                {console.log(decks)
                }
                {/* { decks && <DeckItems decks={decks} /> } */}
                <DeckItems decks={decks} />
            </div>
        </div>
    )
}

export default DeckBrowser