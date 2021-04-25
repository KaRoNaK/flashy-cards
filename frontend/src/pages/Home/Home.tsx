import {  useHistory } from 'react-router'
import Button from '../../components/UI/Button/Button'
import classes from './Home.module.css'

const Home = ():JSX.Element => {
        const history = useHistory()
        const getStartedHandler = () => {
                history.push('/about')
        }


        return <div className={classes.Container}>
        <div className={[classes.Section, classes.Center].join(' ')}>
                <div className={classes.GettingStartedSection}>
                        <h1>Your future depends on what you do today, and today has already started</h1>
                        <p>Get better, one deck at a time</p>
                        <Button clicked={getStartedHandler}>Get started</Button>
                </div>

        </div>
        <div className={classes.Section}>
                <div className={classes.MainImage}>
                        <img src="https://wallpapercave.com/wp/wp2035997.jpg" alt="Study hard"/>
                </div>
                <div className={[classes.Center, classes.ImageBottomSection].join(' ')}>
                        <p>Exams have never been easier</p>
                </div>
        </div>
</div>
}
       
    


export default Home