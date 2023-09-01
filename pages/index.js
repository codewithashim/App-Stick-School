import RootLayout from "@/src/Layouts/RootLayout";
import MainNav from "@/src/Shared/Navbar/MainNav/MainNav";
import TopNav from "@/src/Shared/Navbar/TopNav/TopNav";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="bg-[#087477]">
          <div className="nav-width">
              <MainNav />
              <TopNav />
          </div>

      </div>
      <h1>Home Page</h1>
    </section>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
