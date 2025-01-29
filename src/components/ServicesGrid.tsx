"use client";
import React, { useState } from "react";
import { Icon } from "./Icon";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Разработка веб-сайтов",
    description:
      "Создание и поддержка веб-сайтов для бизнеса и личного использования.",
  },
  {
    id: 2,
    title: "Мобильные приложения",
    description: "Разработка приложений для iOS и Android платформ.",
  },
  {
    id: 3,
    title: "SEO-оптимизация",
    description:
      "Оптимизация веб-сайтов для улучшения их видимости в поисковых системах.",
  },
  {
    id: 4,
    title: "Кибербезопасность",
    description:
      "Защита информации и систем от кибератак и угроз безопасности.",
  },
  {
    id: 5,
    title: "Разработка программного обеспечения",
    description: "Создание программных решений для различных бизнес-задач.",
  },
  {
    id: 6,
    title: "Консалтинг по IT-стратегии",
    description:
      "Консультации по планированию и реализации IT-стратегий для бизнеса.",
  },
  {
    id: 7,
    title: "Разработка пользовательских интерфейсов",
    description:
      "Проектирование и создание удобных интерфейсов для приложений и веб-сайтов.",
  },
  {
    id: 8,
    title: "Интеграция систем",
    description:
      "Объединение различных систем и программ для улучшения бизнес-процессов.",
  },
  {
    id: 9,
    title: "Поддержка и обслуживание IT-инфраструктуры",
    description:
      "Услуги по поддержке и обслуживанию серверов, сетей и оборудования.",
  },
  {
    id: 10,
    title: "Облачные решения",
    description:
      "Реализация облачных сервисов и платформ для хранения и обработки данных.",
  },
  {
    id: 11,
    title: "Внедрение ERP-систем",
    description:
      "Установка и настройка ERP-систем для управления бизнес-процессами.",
  },
  {
    id: 12,
    title: "Анализ данных",
    description:
      "Обработка и анализ данных для получения ценной информации и инсайтов.",
  },
  {
    id: 13,
    title: "Автоматизация бизнес-процессов",
    description:
      "Создание систем и решений для автоматизации рутинных бизнес-процессов.",
  },
  {
    id: 14,
    title: "IT-обучение и тренинги",
    description: "Обучение сотрудников и проведение тренингов по IT-темам.",
  },
  {
    id: 15,
    title: "Техническая поддержка пользователей",
    description:
      "Предоставление поддержки и помощи пользователям в решении IT-проблем.",
  },
  {
    id: 16,
    title: "Проектирование баз данных",
    description:
      "Создание и оптимизация баз данных для хранения и управления данными.",
  },
  {
    id: 17,
    title: "UI/UX-дизайн",
    description:
      "Проектирование и создание дизайна пользовательских интерфейсов и опыта.",
  },
  {
    id: 18,
    title: "Разработка систем машинного обучения",
    description:
      "Создание и внедрение решений на основе машинного обучения и искусственного интеллекта.",
  },
  {
    id: 19,
    title: "Разработка API",
    description:
      "Создание и интеграция API для взаимодействия различных систем и приложений.",
  },
  {
    id: 20,
    title: "Тестирование программного обеспечения",
    description:
      "Проверка и тестирование программных продуктов на наличие ошибок и дефектов.",
  },
];

export const ServicesGrid = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewService = (id: number) => {
    router.push(`/services/${id}`);
  };

  const totalServices = filteredServices.length;

  return (
    <div id="services" className="services">
      <div className="services__container">
        <div className="services-grid">
          <h1 className="services-title title">Наши услуги</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск услуг..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <Icon
              className="search-icon"
              name="search"
              width={32}
              height={32}
              color="var(--bg-primary)"
            />
          </div>

          <div className="grid">
            {filteredServices.slice(0, visibleCount).map((service) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => handleViewService(service.id)}>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-info">
            <p>{`Показано ${Math.min(
              visibleCount,
              totalServices
            )} из ${totalServices}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
