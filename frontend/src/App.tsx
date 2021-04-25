import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Layout from './hoc/Layout/Layout';
import About from './pages/About/About';
import DeckBrowser from './pages/DeckBrowser/DeckBrowser';
import DeckDetail from './pages/DeckBrowser/DeckDetail/DeckDetail';
import Home from './pages/Home/Home';

const App = ():JSX.Element => {
  let routes = (
    <Switch>
      <Route path="/browse" exact ><DeckBrowser /></Route>
      <Route path="/browse/:id" exact ><DeckDetail /></Route>
      <Route path="/about" ><About /></Route>
      <Route path="/" exact><Home /></Route>
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div style={{minHeight: '100%'}}>

      <Layout>
        {routes}
      </Layout>
    </div>
  )
}

export default App;
