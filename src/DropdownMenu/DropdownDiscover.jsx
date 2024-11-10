import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled, { keyframes } from "styled-components";

const DropdownDiscover = ({ setIsDropdownDiscoverOpen }) => {
  const slideDown = keyframes`
  0% {
    transform: translateY(-35%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const DropdownContainer = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 4rem;
    background-color: rgba(255, 255, 255, 1);
    animation: ${slideDown} 0.5s ease-in-out;
    transform-origin: right center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    max-height: 100vh;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const DropdownContainerWrapper = styled.div``;

  const CloseMenu = styled.div`
    margin-top: 70px;
    margin-bottom: 20px;
    padding: 0 20px;
    display: flex;
    align-items: end;
    justify-content: end;
    cursor: pointer;
  `;

  const MenuItems = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    /* line-height: 70px; */
    /* padding: 20px 100px; */
  `;

  const FirstItem = styled.div`
    h3 {
      margin-bottom: 15px;
      color: rgb(134, 135, 135);
      font-size: medium;
      cursor: default;
    }
    li {
      list-style-type: none;
      line-height: 30px;
      font-weight: 600;
      font-size: small;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  `;

  const SecondItem = styled(FirstItem)``;

  const ThirdItem = styled(FirstItem)``;

  return (
    <DropdownContainer>
      <DropdownContainerWrapper>
        <CloseMenu onClick={() => setIsDropdownDiscoverOpen(false)}>
          <CloseIcon />
        </CloseMenu>
        <MenuItems>
          <FirstItem>
            <h3>Resources</h3>
            <li>Demo Drive</li>
            <li>Insurance</li>
            <li>Military Purchase Program</li>
            <li>Video Guides</li>
            <li>Customer Service</li>
            <li>Events</li>
          </FirstItem>
          <SecondItem>
            <h3>Location Services</h3>
            <li>Find Us</li>
            <li>Find a Collision Centre</li>
            <li>Find a Certified Installer</li>
          </SecondItem>
          <ThirdItem>
            <h3>Company</h3>
            <li>About</li>
            <li>Careers</li>
            <li>Investor Relations</li>
          </ThirdItem>
        </MenuItems>
      </DropdownContainerWrapper>
    </DropdownContainer>
  );
};

export default DropdownDiscover;
