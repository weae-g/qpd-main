import Image from "next/image";

export const OurFeatures = () => {
  const features = [
    {
      title: "UI/UX",
      description:
        "Мы создаем интуитивно понятные и эстетически привлекательные пользовательские интерфейсы.",
      image: "/images/about/uiux.png",
    },
    {
      title: "DESIGN",
      description:
        "Мы разрабатываем креативные и визуально привлекательные дизайны, которые подчеркивают уникальность вашего бренда.",
      image: "/images/about/design.png",
    },
    {
      title: "SEO",
      description:
        "Мы оптимизируем ваш сайт для поисковых систем, чтобы привлечь больше трафика и повысить видимость вашего бизнеса в интернете.",
      image: "/images/about/seo.png",
    },
    {
      title: "HOST",
      description:
        "Мы предлагаем надежный и безопасный хостинг для вашего сайта, обеспечивая стабильную работу и защиту данных.",
      image: "/images/about/host.png",
    },
  ];

  return (
    <div className="features">
      <div className="features__container">
        <div className="features__list">
          {features.map((feature, index) => (
            <div key={index} className="features__item">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="features__image"
              />
              <h3 className="features__title">{feature.title}</h3>

              <div className="features__overlay">
                <p className="features__description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
