import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <ScrollContainer>
        <Section
          title="Model S"
          description="From $56,350"
          backgroundImage="model-s.jpg"
          leftBtnTxt="Order Now" 
          RightBtnTxt="Demo Drive"
          leftBtnLink="/model-s-order"
          rightBtnLink="/model-s-demo"
        />
        <Section
          title="Model T"
          description="From $99,680"
          backgroundImage="Car2.jpg"
          leftBtnTxt="Order Now"
          RightBtnTxt="Demo Drive"
        />
        <Section
          title="Model Y"
          description="From $39,950"
          backgroundImage="model-y.jpg"
          leftBtnTxt="Order Now"
          RightBtnTxt="Demo Drive"
        />
        <Section
          title="Model X"
          description="From $76,620"
          backgroundImage="model-x.jpg"
          leftBtnTxt="Order Now"
          RightBtnTxt="Demo Drive"
        />
        <Section
          title="Model 3"
          description="From $63,340"
          backgroundImage="model-3.jpg"
          leftBtnTxt="Order Now"
          RightBtnTxt="Demo Drive"
        />
        <Section
          title="Accessories"
          backgroundImage="accessories.jpg"
          leftBtnTxt="Order Now"
        />
      </ScrollContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type-y:  mandatory; /* Enables vertical snap */
  scroll-behavior: smooth; /* Optional, for smooth scrolling */
`;

const SectionWrap = styled.div`
  scroll-snap-align: start; /* Ensures sections snap to the top of the viewport */
  height: 100vh; /* Each section takes up full viewport height */
`;