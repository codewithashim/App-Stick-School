import React from "react";
import MainNav from "../Shared/Navbar/MainNav/MainNav";
import Footer from "../Shared/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <main>
      <header className="header-container">
        <div className="container">
          <MainNav />
        </div>
      </header>
      <section className="min-h-screen">{children}</section>
      <Footer />
    </main>
  );
};

export default RootLayout;
