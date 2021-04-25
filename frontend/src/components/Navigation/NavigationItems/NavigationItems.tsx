import Logo from "../../Logo/Logo"
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from './NavigationItems.module.css'

const NavigationItems = ():JSX.Element => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact colored={false} ><Logo/></NavigationItem>
            <NavigationItem link="/about" >About</NavigationItem>
            <NavigationItem link="/browse">Browse decks</NavigationItem>
        </ul>
    )
}

export default NavigationItems