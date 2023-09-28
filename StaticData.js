import feature1Img from "./assets/phone.svg";

import icon1 from "./assets/smallCardImg1.svg";
import icon2 from "./assets/smallCardImg2.svg";
import icon3 from "./assets/smallCardImg3.svg";

import miniCard1 from "./assets/miniCard1.svg";
import miniCard2 from "./assets/miniCard2.svg";
import miniCard3 from "./assets/miniCard3.svg";
import miniCard4 from "./assets/miniCard4.svg";
import miniCard5 from "./assets/miniCard5.svg";


export const miniCards = [
    {
      id: 1,
      img: miniCard1,
    },
    {
      id: 2,
      img: miniCard2,
      name: "Green modern bikini",
      price: 100,
      rating: 4.3,
    },
    {
      id: 3,
      img: miniCard3,
      name: "Bikini Pairs",
      price: 100,
      rating: 4.3,
    },
    {
      id: 4,
      img: miniCard4,
      name: "Blue bikini",
      price: 100,
      rating: 4.3,
    },
    {
      id: 5,
      img: miniCard5,
      name: "Beach wear",
      price: 100,
      rating: 4.3,
    },
  ];

export const bigFeatures = [
  {
    id: 1,
    heading: "Unlock Your ABC Earning Potential",
    desc: "Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.",
    img: feature1Img,
    style: true,
  },
  {
    id: 2,
    heading: "Boost Your Sales with Built-in E-commerce",
    desc: "Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.",
    img: miniCards,
    style: false,
  },
];

export const smallFeatures = [
  {
    id: 1,
    icon: icon1,
    heading: "Save Time with Automation and Efficiency",
    desc: "Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.",
  },
  {
    id: 2,
    icon: icon2,
    heading: "Join a Supportive Community",
    desc: "Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.",
  },
  {
    id: 3,
    icon: icon3,
    heading: "Unlock Exclusive Opportunities and Prizes",
    desc: "Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.",
  },
];


