import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as StarIcon } from "images/star-icon.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-sm`;
  // Get the imageSrc from the query parameter
  const queryParams = new URLSearchParams(window.location.search);
  const serializedCard = queryParams.get("serializedCard");
  // Parse the serialized card object
  const card = JSON.parse(decodeURIComponent(serializedCard));

  return (
    <AnimationRevealPage>
      <Hero />

      <MainFeature
        subheading={<Subheading>Details</Subheading>}
        heading={card?.title}
        description={
          <>
            <Description>
              <strong>{card?.price}</strong>
            </Description>
            <br></br>
            <Description>          
              {card?.content}
            </Description>
          </>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Send Message"
        imageSrc={card.imageSrc}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        reviews={card?.reviews}
        rating={card?.rating}
      />

      <Footer />
    </AnimationRevealPage>
  );
};
