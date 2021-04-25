import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

import classes from './NavigationItem.module.css'

interface NavigationItemProps {
    link: string,
    exact?: boolean,
    colored?: boolean
    children: ReactNode
}

const NavigationItem = ({link, exact = false, colored=true, children}:NavigationItemProps):JSX.Element => {
    const navItemClasses = [classes.NavigationItem]
    if(colored){
        navItemClasses.push(classes.Colored)
    }

    return (
        <li className={navItemClasses.join(' ')}>
            <NavLink to={link} exact={exact} activeClassName={classes.active}>
                {children}
            </NavLink>
        </li>
    )
}

export default NavigationItem