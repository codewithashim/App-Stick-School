import RootLayout from "@/src/Layouts/RootLayout";
import MainNav from "@/src/Shared/Navbar/MainNav/MainNav";
import TopNav from "@/src/Shared/Navbar/TopNav/TopNav";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="bg-[#087477]">
          <MainNav />
          <TopNav />
      </div>
      <h1>Home Page</h1>
    </section>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
