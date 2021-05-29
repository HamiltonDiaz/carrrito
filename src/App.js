import "./App.css";
import CheckoutPage from "./components/Car/CheckoutPage";
import NavBar from "./components/Layouts/Navbar";
// import Products from "./components/Products/Products";

function App() {
    return (
    <div className="App">
        <NavBar/>
        <CheckoutPage/>
        {/* <Products/> */}
    </div>
    );
}

export default App;
