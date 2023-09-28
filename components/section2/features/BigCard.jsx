import Image from "next/image";
import "./BigCard.css"

import MiniFeatureCards from "./MiniFeatureCards";

const BigCard = ({ heading, desc, image, style }) => {
  return (
    <div className="feature-card-big">
      <div className="feature-card-gradient-big1" />
      <div className="feature-card-gradient-big2" />
      <h3>{heading}</h3>
      <p>{desc}</p>
      <div className="feature-image-container-big">
        {typeof image.src === "string" ? (
          <Image alt="" src={image} width={645} height={247}/>
          // <img src={image} alt="" width={645} height={247} />
        ) : (
          <>
            <div className="mini-feature-container">
              {Array.isArray(image) && image?.map((item) => {
                return (
                  <MiniFeatureCards
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BigCard;
