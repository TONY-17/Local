import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Detergents: [
      {
        imageSrc: "https://th.bing.com/th/id/OIP.QMbqiEh1w6qKgw5TPBwuKQHaHa?pid=ImgDet&rs=1",
        title: "Tide Fresh Coral Blast",
        content: "Experience the invigorating scent of the ocean with Tide Fresh Coral Blast. This detergent combines advanced cleaning power with a refreshing fragrance that will transform your laundry routine. Its innovative formula tackles tough stains while keeping your fabrics soft and vibrant. Dive into a world of clean, with the trusted performance of Tide.",
        price: "R53.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: "https://th.bing.com/th/id/OIP.ay2jAviSSn3vbcJV1uFeFAHaHa?pid=ImgDet&rs=1",
        title: "OMO Auto",
        content: "Make laundry days effortless with OMO Auto detergent. Specially designed for automatic washing machines, this powerful formula gets rid of dirt and stains while being gentle on your clothes. No more worries about stubborn marks – OMO Auto takes care of it all. Enjoy clean, fresh-smelling garments every time.",
        price: "R53.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: "https://th.bing.com/th/id/OIP.HVRNqUmQS2DegJeMI6xNEAHaHa?pid=ImgDet&rs=1",
        title: "Domestos",
        content: "Domestos brings you the ultimate solution for a germ-free home. This powerful detergent not only cleans but also disinfects, ensuring a hygienic environment for your family. Say goodbye to germs and tough stains with Domestos. Maintain a spotless home that radiates cleanliness and health.",
        price: "R53.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc: "https://th.bing.com/th/id/OIP.2dozPCju1Abie34GY46uzgHaHc?pid=ImgDet&rs=1",
        title: "Laundry Detergent",
        content: "Discover the cost-effective way to keep your clothes looking their best. Our Laundry Detergent offers reliable cleaning performance at an affordable price. Its advanced formula gently removes dirt and odors, leaving your fabrics fresh and revitalized. Experience laundry day satisfaction without breaking the bank.",
        price: "R22.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc: "https://th.bing.com/th/id/OIP.2dozPCju1Abie34GY46uzgHaHc?pid=ImgDet&rs=1",
        title: "Laundry Detergent",
        content: "Discover the cost-effective way to keep your clothes looking their best. Our Laundry Detergent offers reliable cleaning performance at an affordable price. Its advanced formula gently removes dirt and odors, leaving your fabrics fresh and revitalized. Experience laundry day satisfaction without breaking the bank.",
        price: "R22.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
    ],
    Cosmetics: getRandomRepair(),
  },
  activeTabIndx = 0,
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */

  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(
    tabsKeys[activeTabIndx == 0 ? 0 : activeTabIndx]
  );

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControl
                  key={index}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey]
              .filter((card, index) => index !== 6)
              .map((card, index) => (
                <CardContainer key={index}>
                  <Card
                    className="group"
                    href={card.url}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <CardImageContainer imageSrc={card.imageSrc}>
                      <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer>
                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 1,
                            height: "auto",
                          },
                          rest: {
                            opacity: 0,
                            height: 0,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardButton
                          onClick={() => {
                            const serializedCard = encodeURIComponent(
                              JSON.stringify(card)
                            );
                            window.location = `/components/landingPages/SaaSProductLandingPage?serializedCard=${serializedCard}`;
                          }}
                        >
                          View Details
                        </CardButton>
                      </CardHoverOverlay>
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                      <CardPrice>{card.price}</CardPrice>
                    </CardText>
                  </Card>
                </CardContainer>
              ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
      "https://th.bing.com/th/id/OIP.dzqB33x0LyqukcKpPZ52owHaFj?w=269&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "Bestial Beauty",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
      price: "R53.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
      "https://th.bing.com/th/id/R.6da6e5ddffb5236157085b0dd7dff8e5?rik=rzpUgrWXiUsMGA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_MAEXNH0nVoU%2fTO1MWhnh1nI%2fAAAAAAAAHrM%2fMo6k0MpX6Zo%2fs1600%2fchanel%2bholiday%2bgroup%2b2.bmp&ehk=y55fqzSPYuAhLEMQVXcq9lsCTi0A%2bkcH23VXYB%2bZNRQ%3d&risl=&pid=ImgRaw&r=0",
      title: "Avon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
      price: "R22.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
     "https://www.littlemagonline.com/wp-content/uploads/2009/10/chanelwinter2009noirsobscurscollection1-280x300.jpeg", 
      title: "Nail Archives",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      price: "R89.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
      "https://th.bing.com/th/id/OIP.-DTAICpg3D4DISX13eH_9QHaFw?pid=ImgDet&w=200&h=154&c=7&dpr=1,5",
      title: "The pink Panel",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
      price: "R312.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomRepair = () => {
  const cards = [
    {
      imageSrc: "https://th.bing.com/th/id/OIP.dzqB33x0LyqukcKpPZ52owHaFj?w=269&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "Bestial Beauty",
      content: "Elevate your beauty routine with the exquisite Bestial Beauty collection. Crafted with precision and care, each product is designed to enhance your natural beauty. Discover a world of luxurious textures, vibrant colors, and long-lasting formulas. From everyday essentials to glamorous accents, Bestial Beauty offers an unparalleled experience in cosmetics.",
      price: "R53.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc: "https://th.bing.com/th/id/R.6da6e5ddffb5236157085b0dd7dff8e5?rik=rzpUgrWXiUsMGA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_MAEXNH0nVoU%2fTO1MWhnh1nI%2fAAAAAAAAHrM%2fMo6k0MpX6Zo%2fs1600%2fchanel%2bholiday%2bgroup%2b2.bmp&ehk=y55fqzSPYuAhLEMQVXcq9lsCTi0A%2bkcH23VXYB%2bZNRQ%3d&risl=&pid=ImgRaw&r=0",
      title: "Avon",
      content: "Discover the timeless elegance of Avon's beauty products. With a legacy of excellence, Avon offers a diverse range of cosmetics that cater to your individual style. From lipsticks that pop to skincare that nourishes, Avon products are designed to help you feel confident and radiant. Experience beauty with a brand that has stood the test of time.",
      price: "R22.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc: "https://www.littlemagonline.com/wp-content/uploads/2009/10/chanelwinter2009noirsobscurscollection1-280x300.jpeg",
      title: "Nail Archives",
      content: "Indulge your nails with the captivating Nail Archives collection by Chanel. Immerse yourself in a world of sophisticated nail colors that express your individuality. From classic neutrals to bold hues, this collection offers endless possibilities for nail artistry. Elevate your style with nails that are as stunning as you are.",
      price: "R89.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc: "https://th.bing.com/th/id/OIP.-DTAICpg3D4DISX13eH_9QHaFw?pid=ImgDet&w=200&h=154&c=7&dpr=1,5",
      title: "The Pink Panel",
      content: "Introducing The Pink Panel, your go-to destination for makeup essentials. From blushes that add a natural flush to your cheeks to eyeshadows that create mesmerizing looks, this collection has it all. Each product is carefully curated to offer high-quality pigments and long-lasting wear. Join The Pink Panel and embrace a world of endless makeup possibilities.",
      price: "R312.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ];
  
  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
const getRandomCards2 = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "John Gattie",
      content: "Want a perfectionist. Dont even think twice about picking me.",
      price: "R5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1637531347055-4fa8aa80c111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Tyler Jones Lee",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "R2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Kamogelo Mavimbela",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "R8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1637531347055-4fa8aa80c111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "R3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ];

  const shuffledCards = cards.sort(() => Math.random() - 0.5);

  // Return a random number of items (between 1 and the array length)
  const randomNumber = Math.floor(Math.random() * shuffledCards.length) + 1;
  return shuffledCards.slice(0, randomNumber);
};
