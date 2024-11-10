import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled, { keyframes } from "styled-components";

const DropdownEnergy = ({ setIsDropdownEnergyOpen }) => {
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
    justify-content: center;
    font-weight: 700;
    font-size: large;
  `;

  const MenuImagesEnergy = styled.div`
    img {
      width: 30%;
      aspect-ratio: 4/3;
      object-fit: contain;
    
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

    const MenuImagesEnergypanels = styled.div`
      img {
        width: 30%;
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
        <CloseMenu onClick={() => setIsDropdownEnergyOpen(false)}>
          <CloseIcon />
        </CloseMenu>
        <MenuItems>
          <li>
            <MenuItemName>Solar Roofs</MenuItemName>
            <MenuImagesEnergypanels>
              <img src="/src/assets/solarpanel.png" alt="" />
            </MenuImagesEnergypanels>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Power Wall</MenuItemName>
            <MenuImagesEnergy>
              <img src="/src/assets/powerwall.png" alt="" />
            </MenuImagesEnergy>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Mega Pack</MenuItemName>
            <MenuImagesEnergy>
              <img src="/src/assets/megapack.png" alt="" />
            </MenuImagesEnergy>
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

export default DropdownEnergy;
