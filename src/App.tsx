import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import AboutHistoryPage from "./pages/AboutHistoryPage";
import BackupHomePage from "./pages/BackupHomePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LogisticsPage from "./pages/LogisticsPage";
import MarineVesselSupplyPage from "./pages/MarineVesselSupplyPage";
import PetroleumProductsHaulagePage from "./pages/PetroleumProductsHaulagePage";
import ProfilePdfPage from "./pages/ProfilePdfPage";
import ServicesPage from "./pages/ServicesPage";
import ShippingPage from "./pages/ShippingPage";

export default function App() {
  return (
    <Routes>
      <Route path="pdf_profile_view.html" element={<ProfilePdfPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="index.php" element={<HomePage />} />
        <Route path="index.html" element={<HomePage />} />
        <Route path="main_page.html" element={<HomePage />} />
        <Route path="main_page_bkp2.html" element={<BackupHomePage />} />
        <Route path="main_page_bkup1.html" element={<BackupHomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about_us.html" element={<AboutPage />} />
        <Route path="about_us_history.html" element={<AboutHistoryPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="our_services.html" element={<ServicesPage />} />
        <Route path="services/marine-vessel-supply" element={<MarineVesselSupplyPage />} />
        <Route path="marine_vessel_supply.html" element={<MarineVesselSupplyPage />} />
        <Route path="services/logistics" element={<LogisticsPage />} />
        <Route path="logistics.html" element={<LogisticsPage />} />
        <Route path="octg.html" element={<LogisticsPage />} />
        <Route path="services/shipping" element={<ShippingPage />} />
        <Route path="shipping.html" element={<ShippingPage />} />
        <Route path="construction-works.html" element={<ShippingPage />} />
        <Route path="services/petroleum-products-haulage" element={<PetroleumProductsHaulagePage />} />
        <Route path="petroleum_products_haulage.html" element={<PetroleumProductsHaulagePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact_us.html" element={<ContactPage />} />
        <Route path="contact_us.htm" element={<ContactPage />} />
        <Route path="contact_subscribe.html" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
