import "./Section2.css"

import { bigFeatures, smallFeatures } from "../../StaticData"
import BigCard from "./features/BigCard"
import SmallCard from "./features/SmallCard"

const Section2 = () => {
  return (
    <div id="features-container">
    <h2>
      <span>Elevate</span>Your Craft
    </h2>
    <div id="feature-card-container1">
      {bigFeatures.map((feature) => (
        <BigCard
          key={feature.id}
          heading={feature.heading}
          desc={feature.desc}
          image={feature.img}
          style={feature.style}
        />
      ))}
    </div>
    <div id="feature-card-container2">
      {smallFeatures.map((feature) => (
        <SmallCard
          desc={feature.desc}
          heading={feature.heading}
          icon={feature.icon}
          key={feature.id}
        />
      ))}
    </div>
  </div>
  )
}

export default Section2