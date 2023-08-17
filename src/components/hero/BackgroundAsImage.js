import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://plus.unsplash.com/premium_photo-1680185462024-449a2abaec28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80");
  background-color: rgba(0, 0, 0, 0.5);
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-15`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const HeadingDescription = styled.h1`
  ${tw`text-xl text-center sm:text-xl lg:text-xl xl:text-xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw` w-full h-12 rounded-sm border-2  focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500 px-4 -mx-4 py-2`}
  }
  button {sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

export default () => {
  const [userLocation, setUserLocation] = React.useState(null);
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about-us">About</NavLink>
      <NavLink href="/login">Sign In</NavLink>
    </NavLinks>,
  ];

  const successCallback = async (position) => {
    try {
      const { latitude, longitude } = position.coords;

      // Fetch the location name using Mapbox Geocoding API
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoidHktMTciLCJhIjoiY2xsZXo4dnQzMHJyNTNxbnpsb2Myd3poNCJ9.8wqIfEeC6qmZVvf7b6vR_A`
      );

      if (response.ok) {
        const data = await response.json();
        const locationName = data.features[0].text;
        setUserLocation(locationName);
      } else {
        console.log("Failed to fetch location data.");
      }
    } catch (error) {
      console.log("Error fetching location:", error);
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <br /> <br /> <br />
        <Heading>
          Connect with
          <br />
          <SlantedBackground>Local Professionals.</SlantedBackground>
          <br />
        </Heading>
        
        <br /> 
        <HeadingDescription> <LocationIcon tw="w-4 h-4 text-gray-600" />{userLocation}</HeadingDescription>
        <br /> <br />
      </HeroContainer>
      <br />
    </Container>
  );
};
