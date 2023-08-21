import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserProfile,
  RedirectToSignIn,
} from "@clerk/clerk-react";
export default () => {
  return (
    <AnimationRevealPage>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </AnimationRevealPage>
  );
};
