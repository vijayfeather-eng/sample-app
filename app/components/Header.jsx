"use client";

import "./header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-wrapper">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">✦</span>
          <span>Nova</span>
        </div>

        {/* Navigation */}
        <nav className="navigation">

          <Link href="/">
          
            Home
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          <Link
            href="/services"
            className={pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>

          <Link
            href="/projects"
            className={pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

        </nav>

        {/* Button */}
        <Link href="/contact" className="contact-btn">
          Let's Talk <span>→</span>
        </Link>

      </div>
    </header>
  );
}