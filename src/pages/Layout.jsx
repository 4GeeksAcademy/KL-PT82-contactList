import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="app-wrapper">
      <ScrollToTop>
        <header><Navbar /></header>
        <main className="app-main container mt-4"><Outlet /></main>
        <footer><Footer /></footer>
      </ScrollToTop>
    </div>
  );
};
