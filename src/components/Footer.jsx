import React from "react";
import Link from "next/link";
import logo from "@/assets/images/logo-white.svg";
import play from "@/assets/images/play.svg";
import ios from "@/assets/images/ios.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
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
        <div className="footer-container">
          {/* Logo and Contact */}
          <div className="footer-section">
            <h3>Contact us</h3>
            <ul>
              <li>
                <Link href={"maito:log@gmail.com"}>Log@gmail.com</Link>
              </li>
              <li>
                <Link href={"tel:1234567890"}>+91 12345 67890</Link>
              </li>
              <li>
                <Link href={"#"} target="_blank">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </li>
            </ul>
            <div className="social-links">
              <Link href="#" target="_blank" aria-label="Facebook">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="#" target="_blank" aria-label="Twitter">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" target="_blank" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3>Product Links</h3>
            <ul>
              <li>
                <Link href="#">Auctor volutpat.</Link>
              </li>
              <li>
                <Link href="#">Fermentum turpis.</Link>
              </li>
              <li>
                <Link href="#">Mi consequat.</Link>
              </li>
              <li>
                <Link href="#">Amet venenatis.</Link>
              </li>
              <li>
                <Link href="#">Convallis porttitor.</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#">Egestas vitae.</Link>
              </li>
              <li>
                <Link href="#">Viverra lorem ac.</Link>
              </li>
              <li>
                <Link href="#">Eget ac tellus.</Link>
              </li>
              <li>
                <Link href="#">Erat nulla.</Link>
              </li>
              <li>
                <Link href="#">Volutpat proin.</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h3>Legal Links</h3>
            <ul>
              <li>
                <Link href="#">Egestas vitae.</Link>
              </li>
              <li>
                <Link href="#">Viverra lorem ac.</Link>
              </li>
              <li>
                <Link href="#">Eget ac tellus.</Link>
              </li>
              <li>
                <Link href="#">Erat nulla.</Link>
              </li>
              <li>
                <Link href="#">Volutpat proin.</Link>
              </li>
            </ul>
          </div>

          {/* App Links */}
          <div className="footer-section buttons">
            <h3>Get the app</h3>
            <Link href="#" aria-label="Download on App Store">
              <Image
                src={ios}
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                alt="App Store"
              />
            </Link>
            <Link href="#" aria-label="Download on Google Play">
              <Image
                src={play}
                quality={100}
                width={0}
                height={0}
                sizes="100vh"
                alt="Google Play"
              />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2020. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
