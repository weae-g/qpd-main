"use client";

import React, { FC } from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className="modal" onClick={handleClose}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <span className="modal__close-button" onClick={handleClose}>
              &times;
            </span>
            <h2 className="modal__title">Поля для связи</h2>
            <form className="modal__form">
              <input
                className="modal__input"
                type="text"
                placeholder="Ваше имя"
                required
              />
              <input
                className="modal__input"
                type="email"
                placeholder="Ваша почта"
                required
              />
              <input
                className="modal__input"
                type="tel"
                placeholder="Ваш телефон"
                required
              />
              <textarea
                className="modal__textarea"
                placeholder="Кратко опишите задачу"
                required></textarea>
              <button className="button button--filled modal__button" type="submit">
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
