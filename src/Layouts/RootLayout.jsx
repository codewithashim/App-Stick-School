import React from "react";
import TopNav from "../Shared/Navbar/TopNav/TopNav";
 import Footer from "../Shared/Footer/Footer";
import MainNav from "../Shared/Navbar/MainNav/MainNav";

const RootLayout = ({ children }) => {
  return (
    <main>
      <header className="navbar">
        <TopNav />
        <MainNav />
      </header>
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default RootLayout;
