import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navabr from "./components/Navabr";
import store from "./store/store";

function App() {
  return (
    <div className="App">
       <Provider store ={store}>   {/*/ by this we can able to add our store init */}
        <BrowserRouter>
          <Navabr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
