import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
