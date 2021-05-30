import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import CheckoutPage from "./components/Car/CheckoutPage";
import NavBar from "./components/Layouts/Navbar";
import Products from "./components/Products/Products";


function App() {
    return (
    <Router>
        <div className="App">
            <NavBar/>
            <Switch>
                <Route path="/carrito">
                    <CheckoutPage/>
                </Route>
                <Route path="/">
                    <Products/>
                </Route>
            </Switch>
        </div>
    </Router>
    );
}

export default App;
