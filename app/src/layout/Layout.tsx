import React, { ReactNode } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Layout.css"; // Importando o CSS do layout

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
        <Navbar />
      <div className="layout-main">{children}</div>
      <Footer /> {/* O Footer ficará no final */}
    </div>
  );
}
