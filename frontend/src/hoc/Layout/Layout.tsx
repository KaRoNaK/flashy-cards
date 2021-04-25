import { ReactNode, useState } from "react"

import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import classes from './Layout.module.css'

type layoutProps = {
    children: ReactNode
}

const Layout = ({children}:layoutProps):JSX.Element => {
    const [sideDrawersVisible, setSideDrawersVisible] = useState(false)

    const sideDrawerClosedHandler = () => {
        setSideDrawersVisible(false)
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawersVisible(visibility => !visibility)
    }

    return (
        <>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer open={sideDrawersVisible} closed={sideDrawerClosedHandler} />
            <main className={classes.Content} >{children}</main>
        </>
    )
}

export default Layout