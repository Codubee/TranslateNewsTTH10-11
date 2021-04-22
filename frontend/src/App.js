import './App.css';
import MyNavBar from './components/Navbar';
import LandingPage from './views/LandingPage'
import NewsPage from './views/NewsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    //Allows us to switch between pages with the Navbar using React Router.
    <div className="app-div">
      <MyNavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/News">
            <NewsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;