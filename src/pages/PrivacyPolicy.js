import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "About Info" }) => {

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: August 15, 2023</p>

            <p>
              <b>Easy plug marketplace</b> is a hyperlocal platform that connect
              verified local SMMEs with buyers. The platform comes with a
              location tracker and also pays attention to distance, therefore
              listing will be shown to people 10km or less from you.
            </p>

            <p>
              However, users with also have a location search option to connect
              with people from anywhere around the country. It is specifically
              designed for SMMEs to sell to the locals to increase sales. Local
              buyers and sellers do not have to deal with packaging as well as
              delivery fee as they will be meeting up at their own preferred
              location. It is a face to face interaction therefore the buyer
              only pays for the item they see to avoid being scammed
            </p>

            <p>
              Once the buyer likes an item, from the platform they can be able
              to chat in private with the seller to make a deal. Once you sign
              in, it tracks your location, verifies you using your mobile number
              and also recommend listings within your area. There is a rating
              system that will allow buyers to rate the service they received
              from the buyer. What is more interesting about the platform is
              that verified locals are able to list secondhand items on the
              platform and sell them to the locals.
            </p>
            <p>
              The exciting part about the platform is that we charge from as
              little as R30 for hyperlocal advertising and a separate fee for
              listing. Easy plug marketplace is easy to use, all you need to do
              is take a picture, upload and write a description of you item.
            </p>

            <h2>Easy plug marketplace</h2>
            <ul>
              <li>
                <p>
                1 day = R30
                </p>
              </li>
              <li>
                <p>
                3 days = R60
                </p>
              </li>
              <li>
              7 days = R120
              </li>
              <li>
              15 days= R220
              </li>
              <li>
              30 days= R440
              </li>{" "}
            </ul>
            <p>
            Contact us on <strong>079 7630 964</strong> or <strong>lmlebogang@gmail.com</strong>
            </p>
          
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
