import React from "react";
import TopNav from "../Shared/Navbar/TopNav/TopNav";
import MainNav from "../Shared/Navbar/MainNav/MainNav";
import Footer from "../Shared/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <main>
      <header className="bg-black navbar">
        <TopNav />
        <MainNav />
      </header>
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default RootLayout;