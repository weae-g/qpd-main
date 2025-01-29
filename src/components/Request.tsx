"use client";

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

const Request = ({ title, description, buttonText }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="request">
      <h3 className="request__title title">{title}</h3>
      <p className="request__description">{description}</p>
      <button
        className=" button request__button"
        onClick={() => setShowModal(true)}>
        {buttonText}
        <Image src={"/images/arrow-light.svg"} width={60} height={60} alt="" />
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

Request.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Request.defaultProps = {
  title: "ЕСТЬ ВОПРОСЫ?",
  description: "оставьте заявку и мы позвоним в течение дня",
  buttonText: "Отправить заявку",
};

export default Request;
