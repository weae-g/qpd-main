export const ProjectInfo = () => {
  return (
    <div className="project-info">
      <div className="project-info__container">
        <div className="project-info__title title">INSPIRATION</div>
        <div className="project-info__body">
          <div className="project-info__technologies">
            <div className="project-info__technologies-item">REACT</div>
            <div className="project-info__technologies-item">POSTGRESQL</div>
            <div className="project-info__technologies-item">
              PYTHON FAST API
            </div>
            <div className="project-info__technologies-item">
              EXCLUSIVE DESIGN
            </div>
          </div>
          <div className="project-info__price">
            <p className="text price">
              от 100 000 <span>₽</span>
            </p>
            <p className="text time">8 недель</p>
          </div>
        </div>
        <div className="project-info__tags">
          <div className="tag">WEB</div>
          <div className="tag">IT</div>
        </div>
        <div className="project-info__description">
          <p className="text">
            <span>Цель проекта:</span>
          </p>
          <p className="text">
            Вдохновить и стимулировать креативность, помогая пользователям
            находить и реализовывать свои идеи через инновационные и эстетичные
            решения.
          </p>
          <p className="text">
            <span>Описание:</span>
          </p>
          <p className="text">
            Проект Inspiration — это источник мотивации и креативности для
            людей, стремящихся реализовать свои идеи и добиться успеха. Мы
            создаем платформу, где каждая деталь будет призвана вдохновлять и
            поддерживать пользователей на их пути.
          </p>
        </div>
      </div>
    </div>
  );
};
