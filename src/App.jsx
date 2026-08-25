import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CustomCursor from "./components/common/CustomCursor.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Preloader from "./components/common/Preloader.jsx";
import BackgroundAtmosphere from "./components/common/BackgroundAtmosphere.jsx";
import ServicesOverviewPage from "./pages/ServicesOverviewPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import Products from "./pages/Products.jsx";
import ScrumPilot from "./pages/ScrumPilot.jsx";
import Available24 from "./pages/Available24.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Preloader />
      <CustomCursor />
      <BackgroundAtmosphere />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/scrumpilot" element={<ScrumPilot />} />
        <Route path="/products/available24" element={<Available24 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}