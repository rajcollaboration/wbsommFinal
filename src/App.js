import UserHeader from "./components/UserHeader";
import Footer from './components/Footer'
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Joinus from "./pages/Joinus";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <UserHeader/>
     
    <div className="App">
    <Switch>
    <Route exact path="/" component={Index}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/joinus" component={Joinus}/>
    <Redirect to="/" />
    </Switch>
    </div>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
