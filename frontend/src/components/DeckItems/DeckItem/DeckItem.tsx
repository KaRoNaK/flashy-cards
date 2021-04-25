import { useHistory } from 'react-router'
import classes from './DeckItem.module.css'

type DeckItemProps = {
    id: string
    title: string,
    size: number
}

const DeckItem = ({title, size, id}:DeckItemProps):JSX.Element => {
    const history = useHistory()

    const clickHandler = () => {
        history.push(`/browse/${id}`)
    }

    return (
        <div className={classes.Container} onClick={clickHandler}>
            <h3>{title} ({size})</h3>
        </div>
    )
}

export default DeckItem