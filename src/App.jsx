import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CustomCursor from "./components/common/CustomCursor.jsx";
import Preloader from "./components/common/Preloader.jsx";
import BackgroundAtmosphere from "./components/common/BackgroundAtmosphere.jsx";
import ServicesOverviewPage from "./pages/ServicesOverviewPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
// ...inside <Routes>:

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}