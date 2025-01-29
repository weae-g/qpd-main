"use client";

import Image from "next/image";
import { LavaBackground } from "./LavaBackground";
import Modal from "./Modal";
import { useState } from "react";

export const HomePreview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="preview home-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">
          <span>Студия</span>
          <br />
          quality product design
        </h1>
        <h2 className="subtitle">
          Превратим вашу <span>идею в</span> цифровую <span>реальность</span>
        </h2>
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
