"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "./Icon";

interface BubbleProps {
  size: string;
  distance: string;
  position: string;
  time: string;
  delay: string;
}

const Bubble: React.FC<BubbleProps> = ({
  size,
  distance,
  position,
  time,
  delay,
}) => {
  const bubbleStyle: React.CSSProperties = {
    "--size": size,
    "--distance": distance,
    "--position": position,
    "--time": time,
    "--delay": delay,
  } as React.CSSProperties;

  return <div className="bubble" style={bubbleStyle} />;
};

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="footer">
      <div className="bubbles">
        {Array.from({ length: 128 }, (_, i) => (
          <Bubble
            key={i}
            size={`${2 + Math.random() * 4}rem`}
            distance={`${6 + Math.random() * 4}rem`}
            position={`${-5 + Math.random() * 110}%`}
            time={`${2 + Math.random() * 2}s`}
            delay={`${-1 * (2 + Math.random() * 2)}s`}
          />
        ))}
      </div>
      <div className="footer__container">
        <div className="footer__nav">
          <div className="footer__nav-list">
            <div className="nav__list-item">
              <Link href="/portfolio">Портфолио</Link>
            </div>
            <div className="nav__list-item">
              <Link href="/services">Услуги</Link>
            </div>
            <div className="nav__list-item">
              <Link href="/about">О студии</Link>
            </div>
          </div>
        </div>
        <div className="footer__logo">
          <div className="logo">
            <Icon
              onClick={() => router.push("/")}
              name="logo"
              height={80}
              width={160}
              color="--color-light"
            />
          </div>
          <p>quality product design</p>
        </div>
        <div className="footer__socials">
          <div className="socials__list-item">
            <Image
              src={"/images/phone.svg"}
              width={40}
              height={40}
              alt="phone"
            />
            <p>+7 (999) 999 99 99</p>
          </div>
          <div className="socials__list-item">
            <Image
              src={"/images/mail.svg"}
              width={40}
              height={40}
              alt="phone"
            />
            <p>example@mail.ru</p>
          </div>
          <div className="socials__list-item">
            <Image src={"/images/tg.svg"} width={40} height={40} alt="phone" />
            <p>@example</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>©2024 by QPD - quality product design</p>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
