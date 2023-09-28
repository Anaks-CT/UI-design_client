import Image from "next/image"
import "./SmallCard.css"


const SmallCard = ({icon, heading, desc}) => {
  return (
    <div className="feature-card-small">
        <div className='feature-card-gradient-small'/>
      <div className='feature-image-container-small'>
        <Image alt="" src={icon}/>
      </div>
      <h3>{heading}</h3>
      <h5>{desc}</h5>
    </div>
  )
}

export default SmallCard