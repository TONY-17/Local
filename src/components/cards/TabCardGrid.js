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
    Plumbing: [
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.hz2eImSSZ17YD0JioU1DOgHaFK&w=299&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "John Gattie",
        content:
          "Want a perfectionist. Dont even think twice about picking me.",
        price: " ",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.UDcOPFxn3Tq8hllTAYklHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "Tyler Jones Lee",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.2KW49u-g_W4hgM3rdm3nowHaFM&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "Kamogelo Mavimbela",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "4.6",
        reviews: "12",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.Xh3DRDWA2yRH8YMPIbPmjgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "Chillie Cake",
        content: "Wont regret it  I have a perfect rating for a reason.",
        price: " ",
        rating: "5.0",
        reviews: "61",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th/id/OIP.8F1JzGF5uVZ6t0VF2H20GwHaFQ?w=215&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        title: "Guacamole Mex",
        content:
          "Very good at what I do and very affordable. You should book me.",
        price: " ",
        rating: "4.2",
        reviews: "95",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th/id/OIP.I_qKl3g4ey0DZjdh8BootwHaFK?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        title: "Carnet Nachos",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "3.9",
        reviews: "26",
        url: "#",
      },
    ],
    Gardening: getRandomCards(),
    Repair: getRandomRepair(),
    Cleaning: [
      {
        imageSrc:
          "https://studentsuds.com/wp-content/uploads/2018/02/shutterstock_420460471.jpg",
        title: "John Gattie",
        content:
          "Want a perfectionist. Dont even think twice about picking me.",
        price: " ",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th/id/OIP.npOMTIFr3UhouPsng0b7lwAAAA?pid=ImgDet&rs=1",
        title: "Tyler Jones Lee",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th/id/OIP.2vdUe_GWz476MIHPvzfMLgHaE8?pid=ImgDet&rs=1",
        title: "Kamogelo Mavimbela",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "4.6",
        reviews: "12",
        url: "#",
      },
      
    ]
  },
  productTabs = {
    Detergents: [
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.hz2eImSSZ17YD0JioU1DOgHaFK&w=299&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "John Gattie",
        content:
          "Want a perfectionist. Dont even think twice about picking me.",
        price: "",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.UDcOPFxn3Tq8hllTAYklHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "Tyler Jones Lee",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: "",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.hz2eImSSZ17YD0JioU1DOgHaFK&w=299&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "John Gattie",
        content:
          "Want a perfectionist. Dont even think twice about picking me.",
        price: "",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://th.bing.com/th?id=OIP.UDcOPFxn3Tq8hllTAYklHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        title: "Tyler Jones Lee",
        content:
          "Very reliable will arrive early and complete all the desired work.",
        price: " ",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
    ],
    Cosmetics: [],
  },
  tabsVisible = true,
  activeTabIndx = 0,
  activeTabIndx1 = 0,
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

  const tabsKeys1 = Object.keys(productTabs);
  const [activeTab1, setActiveTab1] = useState(
    tabsKeys1[activeTabIndx1 == 0 ? 0 : activeTabIndx1]
  );

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          {tabsVisible ? (
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
          ) : (
            <>
              <TabsControl>
                {Object.keys(productTabs).map((tabName, index) => (
                  <TabControl
                    key={index}
                    active={activeTab1 === tabName}
                    onClick={() => setActiveTab1(tabName)}
                  >
                    {tabName}
                  </TabControl>
                ))}
              </TabsControl>
            </>
          )}
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
        "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "John Gattie",
      content: "Want a perfectionist. Dont even think twice about picking me.",
      price: " ",
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
      price: " ",
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
      price: " ",
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
      price: " ",
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
      imageSrc:
        "https://th.bing.com/th/id/OIP.Hbl_fkhVd4iqGWIrwqqhugHaEi?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "John Gattie",
      content: "Want a perfectionist. Dont even think twice about picking me.",
      price: "",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },

    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.1ro3Q_gSyhWsw46ewHh5pgHaFh?w=243&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "France Jacop",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    ,
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.YmQTzOogDKJ737WIl9qrGAEyDL?pid=ImgDet&w=200&h=132&c=7&dpr=1,5",
      title: "Tyler Jones Lee",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    ,
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.8yisa_0vA4_I2g5KbCI0wQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      title: "Carnet Nachos",
      content:
        "Very reliable will arrive early and complete all the desired work.",
      price: "",
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
      price: " ",
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
      price: " ",
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
      price: " ",
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
      price:  "",
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
