import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Challenge from "./components/challenge/Challenge";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Challenge />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
