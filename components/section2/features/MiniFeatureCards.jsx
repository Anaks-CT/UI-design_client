import "./MiniFeatureCards.css";

import star from "../../../assets/Vector.svg";
import Image from "next/image";

const MiniFeatureCards = ({ img, name, price, rating }) => {
  return (
    <div>
      {/* <img src={img} alt="mini-card-image" /> */}
      <Image src={img} alt="mini-card-image" />
      {name && price && rating && (
        <div>
          {name && <p>{name}</p>}
          {price && rating && (
            <div>
              <p>${price}</p>
              <span>
                {/* <img src={star} alt="" /> */}
                <Image src={star} alt="" />
                <p>{rating}</p>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniFeatureCards;
