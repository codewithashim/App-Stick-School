import Home from "@/src/Components/Home/Home/Home";
import RootLayout from "@/src/Layouts/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <RootLayout>
      <section>
        <Home />
      </section>
    </RootLayout>
  );
};
export default HomePage;

