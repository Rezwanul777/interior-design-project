import "./App.css";
import Brands from "./components/bands/Brands";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Hero from "./components/Navbar/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/Newsleter/NewsLetter";
import Services from "./components/sevices/Services";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero/>
        <Brands/>
        <Banner/>
        <Services/>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
