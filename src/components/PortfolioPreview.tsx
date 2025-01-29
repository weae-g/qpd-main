"use client";

import Image from "next/image";
import { LavaBackground } from "./LavaBackground";
import { useState } from "react";
import Modal from "./Modal";

export const PortfolioPreview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="preview about-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">Портфолио</h1>
        <button
          className="button button--filled"
          onClick={() => setShowModal(true)}>
          Заказать
          <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
