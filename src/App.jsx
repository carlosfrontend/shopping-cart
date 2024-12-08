import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BrandLogo from "./assets/logo.png";
import { Gift, HouseIcon, ShoppingBag } from "lucide-react";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const links = [
    { id: 0, name: "Home", path: "home", icon: <HouseIcon size={18} /> },
    { id: 1, name: "Shop", path: "shop", icon: <Gift size={18} /> },
    { id: 2, path: "cart", icon: <ShoppingBag size={18} /> },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar title={"Deals Shop"} imageUrl={BrandLogo} links={links} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
