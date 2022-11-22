import "./App.css";
import { Review } from "./components";
import { Cord } from "./components";
import { Home } from "./components";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Products from "./pages/Products";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Getaccess } from "./pages/GetAccess";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/Themeprovider";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getaccess" element={<Getaccess />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
    // <Cord/>
    // <Review/>
  );
}

export default App;
``