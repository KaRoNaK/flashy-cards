import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import classes from './Toolbar.module.css'

type ToolbarProps = {
    drawerToggleClicked: () => void
}

const Toolbar = ({drawerToggleClicked}:ToolbarProps):JSX.Element => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={drawerToggleClicked} />

            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar