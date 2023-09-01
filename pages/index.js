import RootLayout from "@/src/Layouts/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <h1>Home Page</h1>
    </section>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
