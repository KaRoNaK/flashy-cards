import classes from './DrawerToggle.module.css'

type DrawerToggleProps = {
    clicked: () => void
}

const DrawerToggle = ({clicked}: DrawerToggleProps):JSX.Element => {
    return (
        <div className={classes.DrawerToggle} onClick={clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle