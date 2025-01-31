import "./App.css";
import Brands from "./components/bands/Brands";
import Hero from "./components/Navbar/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/sevices/Services";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero/>
        <Brands/>
        <Services/>
      </main>
    </>
  );
}

export default App;
