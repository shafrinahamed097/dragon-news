import React from "react";
import Header from "../../components/Header/Header";
import BreakingNews from "../../components/BreakingNews/BreakingNews";

// import Navbar from "../../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <section className="w-11/12 mx-auto">
        <BreakingNews />
      </section>
    </div>
  );
};

export default HomeLayout;
