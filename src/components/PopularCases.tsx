import React from "react";

const popularCasesData = [
  {
    title: "Сайт-визитка",
    description:
      "Создайте профессиональное первое впечатление с нашим сайтом-визиткой.",
    price: "от 100 000 ₽",
    time: "2-4 недели",
    detailedDescription:
      "Простое, стильное и информативное решение, идеально подходящее для представления вашей компании или услуг онлайн.",
  },
  {
    title: "Лэндинг",
    description:
      "Привлеките внимание и увеличьте конверсии с помощью нашего лендинга.",
    price: "от 40 000 ₽",
    time: "1-2 недели",
    detailedDescription:
      "Эффективно структурированная страница, созданная для продвижения одного продукта или услуги и максимально удобная для посетителей.",
  },
  {
    title: "Интернет-магазин",
    description: "Откройте ваш онлайн-магазин с нашей помощью.",
    price: "от 200 000 ₽",
    time: "4-6 недель",
    detailedDescription:
      "Мы разработаем удобную и функциональную платформу для продажи товаров, включая интеграцию с платежными системами и управление заказами.",
  },
];

const PopularCases = () => {
  return (
    <div className="popular">
      <h2 className="title">Популярное</h2>

      <div className="popular__container">
        <div className="popular__list">
          {popularCasesData.map((caseItem, index) => (
            <div key={index} className="popular__list-item">
              <div className="popular-card">
                <div className="popular-card__content">
                  <h3 className="popular-card__title">{caseItem.title}</h3>
                  <div className="popular-card__actions">
                    <button className="button button--filled">Хочу</button>
                    <div className="popular-card__time">
                      <p>{caseItem.price}</p>
                      <p>{caseItem.time}</p>
                    </div>
                  </div>
                </div>
                <div className="popular-card__divider"></div>
                <div className="popular-card__description">
                  <p className="description">{caseItem.description}</p>
                  <p className="description">{caseItem.detailedDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCases;
