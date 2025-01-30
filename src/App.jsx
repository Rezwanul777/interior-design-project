import "./App.css";
import Hero from "./components/Navbar/hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero/>
      </main>
    </>
  );
}

export default App;
