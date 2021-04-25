import classes from './Logo.module.css'

const Logo = ():JSX.Element => {
    return (
        <div className={classes.Logo}>
            <h2 className={classes.LogoText}>Flashy cards</h2>
        </div>
    )
}

export default Logo