import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/About Us";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
