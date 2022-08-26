import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Header from "./components/header/Header";
import SlideBar from "./components/Slidebar/SlideBar";
import Footer from "./pages/Footer/Footer";
import ProductDetail from "./pages/Product/ProductDetail";
import Topbar from "./components/topbar/Topbar";
import TopbarMb from "./components/topbar/TopbarMb";
import Cart from "./pages/Cart/Cart";
import Products from "./components/Product/Products";

function App() {
  const currentUser = true;
  return (
    <Router>
      {/* <Topbar /> */}
      <TopbarMb />
      <Topbar />
      <Switch>
        <Route exact path="/">
          {/* <Homepage /> */}
          <Home />
        </Route>
        <Route exact path="/contact">
          {/* <Homepage /> */}
          <Contact />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/cart">
          {/* <Homepage /> */}
          <Cart />
        </Route>
        <Route exact path="/products">
          {/* <Homepage /> */}
          <Products />
        </Route>
        {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
