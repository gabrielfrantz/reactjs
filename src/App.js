import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </Router>
  );
};

function Hero() {
  return (
    <section id={"hero"}>Sua infraestrutura livre de ameaças online</section>
  );
};

function Ofertas() {
  return (
    <section id={"ofertas"}>Nós oferecemos</section>
  );
};

export default App;
