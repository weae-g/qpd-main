export const LavaBackground = () => {
  return (
    <>
      <div className="lava-container">
        <div className="lava">
          {[...Array(10)].map((_, index) => (
            <div key={index} className={`blob blob-${index + 1}`}></div>
          ))}
        </div>
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
};
