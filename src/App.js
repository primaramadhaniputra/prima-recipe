import { Container, CssBaseline } from "@mui/material";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container style={{ minHeight: "calc(100vh - 105px)" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singlerecipes/:id" element={<SingleRecipe />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
