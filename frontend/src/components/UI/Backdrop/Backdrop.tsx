import classes from './Backdrop.module.css'

type BackdropProps = {
    show: boolean,
    clicked: () => void
}

const Backdrop = ({show, clicked}:BackdropProps):JSX.Element | null => {
    return (
        show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
    )
}

export default Backdrop