import { ReactNode } from "react"

import classes from './Button.module.css'

type ButtonProps = {
    children: ReactNode,
    clicked: () => void
}

const Button = ({children, clicked}: ButtonProps):JSX.Element => {
    return (
        <button className={classes.Button} onClick={clicked}>{children}</button>
    )
}

export default Button