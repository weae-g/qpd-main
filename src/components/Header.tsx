"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import { Icon } from "./Icon";
import Modal from "./Modal";

export const Header = () => {
  const router = useRouter();
  const [icon, setIcon] = useState("sun");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 20) {
      setIcon("sun");
    } else {
      setIcon("moon");
    }
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="nav">
            <div className="nav__list">
              <div className="nav__list-item">
                <div className="logo">
                  <Icon
                    onClick={() => router.push("/")}
                    name="logo"
                    height={40}
                    width={80}
                    color="--color-light"
                  />
                </div>
              </div>
              <div className="nav__list-item">
                <Link href="/portfolio">Портфолио</Link>
              </div>
              <div className="nav__list-item">
                <Link href="/#services">Услуги</Link>
              </div>
              <div className="nav__list-item">
                <Link href="/about">О студии</Link>
              </div>
              <div className="nav__list-item">
                <button className="button" onClick={() => setShowModal(true)}>Заявка</button>
              </div>
              <Icon name={icon} height={40} width={40} />
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
};
