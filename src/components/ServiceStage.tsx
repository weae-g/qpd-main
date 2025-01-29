import React from "react";

interface Stage {
  name: string;
  steps: string[];
}

interface ServiceStageProps {
  stages: Stage[];
}

export const ServiceStage: React.FC<ServiceStageProps> = ({ stages }) => {
  return (
    <div className="service-stage">
      <div className="service-stage__container">
        <div className="service-stage__list">
          {stages.map((stage, index) => (
            <div key={index} className="service-stage__item">
              <div className="service-stage__subtitle subtitle">{stage.name}</div>
              <div className="service-stage__body">
                <ul className="service-stage__description">
                  {stage.steps.map((step, stepIndex) => (
                    <li className="text" key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
