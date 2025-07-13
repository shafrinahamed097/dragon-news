import React from "react";
import Header from "../../components/Header/Header";
import BreakingNews from "../../components/BreakingNews/BreakingNews";

import Navbar from "../../components/Navbar/Navbar";
import LeftNavbar from "../../components/layout/LeftNavbar/LeftNavbar";
import RighNavbar from "../../components/layout/RightNavbar/RighNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Header />

      <section className="w-11/12 mx-auto">
        <BreakingNews />
      </section>

      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RighNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
