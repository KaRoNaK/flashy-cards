import Backdrop from "../../UI/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from './SideDrawer.module.css'

type SideDrawerProps = {
    open: boolean,
    closed: () => void,
}

const SideDrawer = ({open, closed}:SideDrawerProps): JSX.Element => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop show={open} clicked={closed} />
            <div className={attachedClasses.join(' ')} onClick={closed}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
}

export default SideDrawer