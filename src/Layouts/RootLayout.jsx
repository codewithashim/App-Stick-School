import React from "react";
import TopNav from "../Shared/Navbar/TopNav/TopNav";
import MainNav from "../Shared/Navbar/MainNav/MainNav";
import Footer from "../Shared/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <main>
      <header className="header-container">
        <div className="container">
          <TopNav />
          <MainNav />
        </div>
      </header>
      <section className="min-h-screen">{children}</section>
      <Footer />
    </main>
  );
};

export default RootLayout;
