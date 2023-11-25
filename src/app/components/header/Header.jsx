"use client";

import { data } from "@/data/pages";
import Link from "next/link";
import React, { useRef } from "react";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  const { pageLinks } = data;
  return (
    // <header>
    //   <div className="container">
    //     <nav>
    //       <div className="logo">
    //         <Link href="/" onClick={showNavbar}>
    //           <img src="/logo.svg" alt="" />
    //         </Link>
    //       </div>
    //       <div ref={navRef} className="menu" onClick={showNavbar}>
    //         {pageLinks.map((item, index) => (
    //           <Link href={item.url} key={index}>
    //             {item.name}
    //           </Link>
    //         ))}
    //       </div>

    //       <div className="toggle-btn" onClick={showNavbar}>
    //         menu
    //       </div>
    //     </nav>
    //   </div>
    // </header>

    <header>
      <div className="container">
        <a href="/" className="logo">
          Tsotetsi
        </a>
        <nav ref={navRef}>
          {pageLinks.map((i, index) => (
            <Link onClick={showNavbar} href={i.url} key={index}>
              {i.name}
            </Link>
          ))}
        </nav>
        <span onClick={showNavbar}></span>
      </div>
    </header>
  );
};

export default Header;
