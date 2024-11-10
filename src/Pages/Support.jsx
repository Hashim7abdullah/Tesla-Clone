import React, { useState } from "react"; // <-- Add useState
import styled from "styled-components";
import Header from "./Header";

const Support = () => {
  const [activeTab, setActiveTab] = useState("vehicle"); // <-- Add state for tab control

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BackImg />
      <InputBox>
        <input type="text" placeholder="Search Support" />
      </InputBox>
      <Topics>
        <h2>Trending Topics</h2>
      </Topics>
      <SubTopics>
        <li>Add a Vehicle</li>
        <li>Supercharging Credits</li>
        <li>Leasing</li>
        <li>IRA Clean Vehicle Report</li>
        <li>Cost of Solar</li>
        <li>Troubleshoot Solar</li>
      </SubTopics>

      {/* Tabs for Vehicle and Energy */}
      <Tabs>
        <Tab
          isActive={activeTab === "vehicle"}
          onClick={() => setActiveTab("vehicle")}
        >
          Vehicle
        </Tab>
        <Tab
          isActive={activeTab === "energy"}
          onClick={() => setActiveTab("energy")}
        >
          Energy
        </Tab>
      </Tabs>

      {/* Conditionally show Vehicle or Energy SubTopics */}
      <TabContent>
        {activeTab === "vehicle" && (
          <ListItems>
            <FirstItem>
              <h3>Features and Charging</h3>
              <li>Autopilot</li>
              <li>Software Updates</li>
              <li>Upgrades</li>
              <li>Supercharging</li>
              <li>Home Charging</li>
              <li>Security Features</li>
            </FirstItem>
            <SecondItem>
              <h3>Service and Collision Repair</h3>
              <li>Do It Yourself Guides</li>
              <li>Schedule a Service Visit</li>
              <li>Find a Collision Center</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Warranty</li>
              <li>Tire Care and Repair</li>
              <li>Service Portal</li>
            </SecondItem>
            <ThirdItem>
              <h3>Tesla Account</h3>
              <li>Add a Vehicle</li>
              <li>Account Support</li>
              <li>Tesla App</li>
              <li>Refer and Earn</li>
              <li>Financing & Leasing</li>
            </ThirdItem>
          </ListItems>
        )}
        {activeTab === "energy" && (
          <ListItems>
            <FirstItem>
              <h3>Powerwall</h3>
              <li>How Powerwall Works</li>
              <li>System Design</li>
              <li>Prepare for Installation</li>
              <li>Tesla App for Energy</li>
              <li>Get Help and Schedule Service</li>
              <li>Documents</li>
              <button>Learn More</button>
            </FirstItem>
            <SecondItem>
              <h3>Solar Roof</h3>
              <li>Why Solar Roof</li>
              <li>Installation Overview</li>
              <li>Installation Process</li>
              <li>Troubleshooting Your System</li>
              <li>Frequently Asked Questions</li>
              <li>Monitoring</li>
              <button>Learn More</button>
            </SecondItem>
            <ThirdItem>
              <h3>Solar Panels</h3>
              <li>Why Tesla Solar</li>
              <li>Solar Panel Sizing and Design</li>
              <li>Turn On Your System</li>
              <li>Billing</li>
              <li>Troubleshooting Your System</li>
              <li>Transferring Ownership of Your Solar System</li>
              <button>Learn More</button>
            </ThirdItem>
          </ListItems>
        )}
      </TabContent>
      <Guides>
        <GuidesImage />
        <GuidesInfo>
          <h3>Video Guides</h3>
          <p>
            View tutorials and videos designed to educate you on the basics of
            your <br /> vehicle and energy products.
          </p>
          <li>View Video Guides</li>
          <p>
            Explore interactive videos designed to give you a more in-depth look
            at <br /> your vehicle and its features.
          </p>
          <li>Explore Interactive Videos</li>
        </GuidesInfo>
      </Guides>
      <Ownership>
        <TeslaInfo>
          <h3>Getting Started</h3>
          <p>
            Learn about your Tesla ownership experience – including designing
            and <br /> taking delivery of your vehicle.
          </p>
          <li>Ordering a New Vehicle</li>
          <li>Ordering a Used Vehicle</li>
          <li>Prepare for Delivery Day</li>
          <li>Taking Delivery</li>
          <li>After Taking Delivery</li>
          <li>Find Us</li>
        </TeslaInfo>
        <Teslaown />
      </Ownership>
    </Container>
  );
};

export default Support;

const Guides = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin-top: 4rem;
  gap: 7rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
    padding: 20px 20px;
    gap: 0;
  }
`;

const GuidesImage = styled.div`
  width: 35vw;
  height: 60vh;
  background-image: url("/src/assets/videoguides.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  overflow-y: auto;
  @media (max-width: 768px) {
      width: 100%;
      height: 70vh;
    }
    `;

const GuidesInfo = styled.div`
  margin-top: 7rem;
  h3 {
      font-size: large;
      font-weight: 600;
      margin-bottom: 2rem;
      color: rgba(0, 0, 0, 0.8);
    }
    li {
        list-style-type: none;
        line-height: 5rem;
        font-size: small;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            color: blue;
            text-decoration: underline;
        }
    }
    p {
        font-size: 13px;
        font-weight: 550;
        color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
}
`;
const Ownership = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  margin-top: 4rem;
  gap: 7rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 2rem;
    padding: 20px 20px;
    gap: 0;
  }
`;

const Teslaown = styled.div`
  width: 35vw;
  height: 60vh;
  background-image: url("/src/assets/teslaown.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 70vh;
  }
`;

const TeslaInfo = styled.div`
     margin-top: 2rem;
     text-align: end;
  h3 {
    font-size: large;
    font-weight: 600;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.8);
  }
  li {
    list-style-type: none;
    line-height: 2.25rem;
    font-size: small;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
  p {
    font-size: 13px;
    font-weight: 550;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Make sure the header stays on top */
`;

const BackImg = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url("/src/assets/helpcover.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  overflow-y: auto;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 0 20px;

  input {
    width: 100%;
    max-width: 500px;
    padding: 10px 50px 10px 15px;
    border: 0.025rem solid rgba(0, 0, 0, 0.3);
    outline: none;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 10px 15px;
    }
  }
`;

const Topics = styled.div`
  margin-top: 5rem;
  font-size: larger;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTopics = styled.div`
  padding: 10px 10px;
  margin-top: 2rem;
  font-size: smaller;
  font-weight: 600;
  display: flex;
  justify-content: center;
  gap: 5rem;

  li {
    list-style-type: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Added for Tabs and TabContent
const Tabs = styled.div`
  display: flex;
  margin-top: 4rem;
  padding: 0 5rem;

  @media (max-width: 296px) {
    flex-direction: column;
  }
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 20px;
  font-size: larger;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid #3b3c3b;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 0 0 #0a0a0a; /* Adds a bottom shadow on hover */
  }
`;

const TabContent = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const ListItems = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  flex-wrap: wrap; /* Allows wrapping of list items if needed */
  gap: 1rem; /* Adjusts spacing between list items */

  h3 {
    margin-bottom: 2rem;
    cursor: default;
  }
  li {
    margin-bottom: 1rem;
    list-style-type: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: #5959dd;
      text-decoration: underline;
    }
  }

  button {
    border: none;
    outline: none;
    padding: 4px;
    background: none;
    text-decoration: underline;
    font-size: 13px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
      color: #5959dd;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const FirstItem = styled.div`
  text-align: start;
  line-height: 30px;
`;

const ThirdItem = styled(FirstItem)``;

const SecondItem = styled(FirstItem)``;
