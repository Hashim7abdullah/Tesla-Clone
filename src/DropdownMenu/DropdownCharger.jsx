import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled, { keyframes } from "styled-components";

const DropdownCharger = ({ setIsDropdownChargerOpen }) => {
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
    line-height: 70px;
    li {
      list-style-type: none;
    }
  `;

  const MenuItemName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 700;
    font-size: large;
  `;

  const MenuImagesCharger = styled.div`
    img {
      width: 40%;
      aspect-ratio: 4/3;
      object-fit: contain;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuImagesHomeCharger = styled.div`
    img {
      width: 40%;
      aspect-ratio: 4/3;
      object-fit: contain;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuImagesMegaCharger = styled.div`
    img {
      width: 45%;
      aspect-ratio: 4/3;
      object-fit: contain;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;

    button {
      padding: 2px;
      border: none;
      border-radius: 2px;
      padding: 2px 10px;
      cursor: pointer;
      font-weight: 600;
    }
  `;

  return (
    <DropdownContainer>
      <DropdownContainerWrapper>
        <CloseMenu onClick={() => setIsDropdownChargerOpen(false)}>
          <CloseIcon />
        </CloseMenu>
        <MenuItems>
          <li>
            <MenuItemName>Charger</MenuItemName>
            <MenuImagesCharger>
              <img src="/src/assets/charger.png" alt="" />
            </MenuImagesCharger>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Home Charger</MenuItemName>
            <MenuImagesHomeCharger>
              <img src="/src/assets/homecharger.png" alt="" />
            </MenuImagesHomeCharger>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Mega Charger</MenuItemName>
            <MenuImagesMegaCharger>
              <img src="/src/assets/megacharger.png" alt="" />
            </MenuImagesMegaCharger>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
        </MenuItems>
      </DropdownContainerWrapper>
    </DropdownContainer>
  );
};

export default DropdownCharger;

