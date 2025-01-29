"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("sun");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 20) {
      setIcon("sun");
    } else {
      setIcon("moon");
    }
  }, []);

  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <Icon
          onClick={() => router.push("/")}
          name="logo"
          height={32}
          width={80}
          color="--color-light"
        />
      </div>
      <button className="mobile-nav-toggle" onClick={toggleNav}>
        <Icon
          name={isOpen ? "close" : "menu"}
          width={32}
          height={32}
          color="--bg-primary"
          className={`icon ${isOpen ? "close" : ""}`}
        />
      </button>

      <nav className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/portfolio">Портфолио</Link>
          </li>
          <li>
            <Link href="/#services">Услуги</Link>
          </li>
          <li>
            <Link href="/about">О студии</Link>
          </li>
          <li>
            <Icon name={icon} height={32} width={32} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
