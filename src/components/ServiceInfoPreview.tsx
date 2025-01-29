"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { LavaBackground } from "./LavaBackground";
import Modal from "./Modal";

interface ServiceInfoPreviewProps {
  title: string;
  subtitles: string[]; 
}

export const ServiceInfoPreview: FC<ServiceInfoPreviewProps> = ({ title, subtitles }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="preview service-info-preview">
      <LavaBackground />
      <div className="preview__container">
        <h1 className="title">
          {/* <span>Project</span> */}
          <br />
          {title}
        </h1>
        <button
          className="button button--filled"
          onClick={() => setShowModal(true)}>
          Заказать
          <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
        </button>
        {subtitles.map((subtitle, index) => (
          <h2 className="subtitle" key={index}>
            {subtitle}
          </h2>
        ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
