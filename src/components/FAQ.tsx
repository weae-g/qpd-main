"use client";

import React, { useState } from "react";

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq__item">
      <div className={`faq__question ${isOpen ? "q-open" : ""}`} onClick={toggleOpen}>
        <p>{question}</p>
        <span className={`faq__icon ${isOpen ? "open" : ""}`}>+</span>
      </div>
      <div className={`faq__answer ${isOpen ? "open" : ""}`}>{answer}</div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Какие услуги предлагает ваша веб-студия?",
      answer:
        "Мы предоставляем полный спектр услуг по разработке сайтов, включая UI/UX дизайн, веб-дизайн, SEO оптимизацию, хостинг и техническую поддержку.",
    },
    {
      question: "Сколько времени занимает разработка сайта?",
      answer:
        "Сроки разработки зависят от сложности проекта, но обычно это занимает от 2 до 6 недель.",
    },
    {
      question: "Какие технологии вы используете?",
      answer:
        "Мы используем современные технологии, такие как React, Next.js, Node.js, а также популярные CMS, такие как WordPress и Drupal.",
    },
    {
      question: "Как проходит процесс работы над проектом?",
      answer:
        "Процесс работы включает несколько этапов: сбор требований, разработка дизайна, разработка сайта, тестирование и запуск, а также последующая поддержка.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq__container">
        <h2 className="title">
          Часто задаваемые <span>вопросы</span>
        </h2>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
