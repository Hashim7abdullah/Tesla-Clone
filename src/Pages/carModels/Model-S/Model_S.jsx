import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import modelSMain from "../assets/model-s-order.png";
import modelSfront from "../assets/model-s-back.png";
import { Checkbox } from "@mui/material";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f3f3;
  background-position: center;
  background-size: cover;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  background-color: #fafcfb;
  width: 70%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ArrowButton = styled.div`
  background-position: center;
  background-size: cover;
  background-color: #b2b3b489;
  padding: 5px;
  padding-left: 11px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #b2b3b4;
  }
  @media (max-width: 768px) {
    padding: 4px; /* Reduce padding on smaller screens */
  }

  @media (max-width: 480px) {
    padding: 2px;
  }
`;

const ImageContainer = styled.div`
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Content = styled.div`
  width: 30%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 868px) {
    width: 50%;
    gap: 20px;
    padding-top: 10%;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
    padding-top: 10%;
  }
`;

const Heading = styled.div`
  text-align: center;
  font-size: medium;
  margin-top: 40px;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 768px) {
    font-size: small;
  }
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  padding-top: 1rem;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

const Feature1 = styled.div`
  h3 {
    font-size: medium;
    color: rgba(0, 0, 0, 0.7);

    font-weight: 600;
    text-align: center;
    @media (max-width: 768px) {
      font-size: small;
    }
  }
  p {
    font-size: small;
    color: rgba(0, 0, 0, 0.6);

    font-weight: 100;
    @media (max-width: 768px) {
      font-size: smaller;
    }
  }
`;

const Feature2 = styled(Feature1)``;

const Feature3 = styled(Feature1)``;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: small;
  font-weight: 600;

  border-bottom: 2px solid #aaadaa;
  transition: box-shadow 0.3s ease;
`;
const Tab = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;
  &:hover {
    box-shadow: 0 2px 0 0 #0a0a0a; /* Adds a bottom shadow on hover */
  }
`;
const TabContent = styled.div``;
const Description = styled.div`
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
`;
const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  p {
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
  }
  span {
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    font-size: small;
    font-weight: 600;
  }
  li {
    display: flex;
    justify-content: space-around;
    padding: 15px;
    border: 0.025rem solid rgba(0, 0, 0, 0.3);

    border-radius: 5px;
    font-size: small;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      background-color: rgba(217, 214, 214, 0.5);
      border: 0.025rem solid rgba(0, 0, 0, 0.8);
      transition: box-shadow 0.3s ease;
      cursor: pointer;
    }
  }
`;

const Model_S = () => {
  const images = [modelSMain, modelSfront];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("cash");

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Container>
      <ImageWrapper>
        <ArrowButton onClick={handlePrevImage}>
          <ArrowBackIosIcon />
        </ArrowButton>

        <ImageContainer>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </ImageContainer>

        <ArrowButton onClick={handleNextImage}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </ImageWrapper>
      <Content>
        <Heading>
          <h1>Model S</h1>
        </Heading>
        <Features>
          <Feature1>
            <h3>320mi</h3>
            <p>Range (est.)</p>
          </Feature1>
          <Feature2>
            <h3>135mph</h3>
            <p>Top Speed</p>
          </Feature2>
          <Feature3>
            <h3>6.5sec</h3>
            <p>0-60 mph</p>
          </Feature3>
        </Features>
        <Tabs>
          <Tab
            isActive={activeTab === "cash"}
            onClick={() => setActiveTab("cash")}
          >
            Cash
          </Tab>
          <Tab
            isActive={activeTab === "lease"}
            onClick={() => setActiveTab("lease")}
          >
            Lease
          </Tab>
          <Tab
            isActive={activeTab === "finance"}
            onClick={() => setActiveTab("finance")}
          >
            Finance
          </Tab>
        </Tabs>
        <TabContent>
          {activeTab === "cash" && (
            <ListItems>
              <li>
                <p>Long Range Rear-Wheel Drive</p>
                <p>$31,490</p>
              </li>
              <li>
                <p>Long Range All-Wheel Drive</p>
                <p>$34,490</p>
              </li>
              <li>
                <p>Performance All-Wheel Drive</p>
                <p>$37,990</p>
              </li>
              <Description>
                $3,999 (9%) down, 1.99% ADescriptionR, 72 months
              </Description>
              <span>
                {" "}
                <Checkbox />
                Include est. incentives of $7,500 and gas <br /> savings of $100
                /mo
              </span>
            </ListItems>
          )}
          {activeTab === "lease" && (
            <ListItems>
              <li>
                <p>Long Range Rear-Wheel Drive</p>
                <p>$339 /mo</p>
              </li>
              <li>
                <p>Long Range All-Wheel Drive</p>
                <p>$349 /mo</p>
              </li>
              <li>
                <p>Performance All-Wheel Drive</p>
                <p>$499 /mo</p>
              </li>
            </ListItems>
          )}
          {activeTab === "finance" && (
            <ListItems>
              <li>
                <p>Long Range Rear-Wheel Drive</p>
                <p>$459 /mo</p>
              </li>
              <li>
                <p>Long Range All-Wheel Drive</p>
                <p>$415 /mo</p>
              </li>
              <li>
                <p>Performance All-Wheel Drive</p>
                <p>$549 /mo</p>
              </li>
            </ListItems>
          )}
        </TabContent>
      </Content>
    </Container>
  );
};

export default Model_S;
