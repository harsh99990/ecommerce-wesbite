"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose, IoMdNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
    document.body.classList.toggle("overflow");
  };

  const navigation = [
    { name: "Home", link: "/" },
    {
      name: "Categories",
      link: "#",
      dropdown: true,
      submenu: [
        { name: "Subcategory 1", link: "#" },
        { name: "Subcategory 2", link: "#" },
        { name: "Subcategory 3", link: "#" },
      ],
    },
    { name: "Explore", link: "#" },
    { name: "About", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header_flex">
          {/* Logo */}
          <Link href={"/"} className="logo">
            <Image
              src={logo}
              alt="Logo"
              quality={100}
              width={0}
              height={0}
              sizes="100vh"
            />
          </Link>

          <div className={`nav_gp_flex ${isMobile ? "menu-show" : ""}`}>
            {/* Navigation Menu */}
            <nav className="nav">
              <ul className="menu_list">
                {navigation.map((item, index) =>
                  item.dropdown ? (
                    <li
                      key={index}
                      className={`menu_item menu_dropdown ${
                        activeDropdown === index ? "active" : ""
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.link}
                        className={`menu_dropdown_link ${
                          pathname === item.link ? "active" : ""
                        }`}
                      >
                        {item.name} <IoIosArrowDown />
                      </Link>
                      {activeDropdown && (
                        <ul className="submenu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="submenu_item">
                              <Link
                                href={subItem.link}
                                className={`submenu_link ${
                                  pathname === subItem.link ? "active" : ""
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={index} className="menu_item">
                      <Link
                        href={item.link}
                        className={`menu_link ${
                          pathname === item.link ? "active" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="nav_icon_flex">
              <Link
                href={"#"}
                className={`${pathname === "/search" ? "checked" : ""} icon_box`}
              >
                <FaSearch className="icon_bx_icon" />
              </Link>
              <Link
                href={"#"}
                className={`${
                  pathname === "/profile" ? "checked" : ""
                } icon_box`}
              >
                <FaUserCircle className="icon_bx_icon" />
              </Link>
              <Link
                href={"/cart"}
                className={`${pathname === "/cart" ? "checked" : ""} icon_box`}
              >
                <FaShoppingCart className="icon_bx_icon" />
                <span className="icon_bx_number">2</span>
              </Link>
            </div>
          </div>
          <button className="hamburger_menu" onClick={handleClick}>
            {isMobile ? (
              <IoMdClose className="hbg_ic" />
            ) : (
              <RxHamburgerMenu className="hbg_ic" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
