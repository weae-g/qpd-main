"use client";

import Image from "next/image";
import { LavaBackground } from "./LavaBackground";
import { useState } from "react";
import Modal from "./Modal";

export const AboutPreview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="preview about-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">
          <span>Студия</span>
          <br />
          quality product design
        </h1>
        <button
          className="button button--filled"
          onClick={() => setShowModal(true)}>
          Заказать
          <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
        </button>
        <h2 className="subtitle">
          Добро пожаловать в <span>Quality Product Design</span> — студию, где
          страсть к дизайну и стремление к совершенству превращают идеи в
          реальные, впечатляющие продукты.
        </h2>
        <h2 className="subtitle">
          <span> Мы — команда профессионалов</span> , объединенных любовью к
          качественному и инновационному дизайну, и мы готовы воплотить ваши
          идеи в жизнь.
        </h2>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
