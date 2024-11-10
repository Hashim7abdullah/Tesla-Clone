import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const DropdownVehicle = ({ setIsDropdownVehicleOpen }) => {
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
    line-height: 50px;
    li {
      list-style-type: none;
    }
    @media (max-width: 640px) {
      flex-direction: column;
      gap: 90px;
      line-height: 0px;
    }
  `;

  const MenuItemName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: large;
  `;

  const MenuImages = styled.div`
    img {
      width: 50%;
      aspect-ratio: 4/3;
      object-fit: contain;
      @media (max-width: 640px) {
        width: 40%;
        height: auto;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuImagesY = styled.div`
    img {
      width: 60%;
      aspect-ratio: 4/3;
      object-fit: contain;
      @media (max-width: 640px) {
        width: 40%;
        height: auto;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuImagesx = styled.div`
    img {
      width: 60%;
      aspect-ratio: 4/3;
      object-fit: contain;
      @media (max-width: 640px) {
        width: 40%;
        height: auto;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MenuItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    button {
      padding: 2px;
      border: none;
      border-radius: 2px;
      padding: 2px 10px;
      cursor: pointer;
      font-weight: 600;
      font-size: smaller;
    }
  `;

  const navigate = useNavigate();

  const toggleModelS = () => navigate("/model-s-order");

  return (
    <DropdownContainer>
      <DropdownContainerWrapper>
        <CloseMenu onClick={() => setIsDropdownVehicleOpen(false)}>
          <CloseIcon />
        </CloseMenu>
        <MenuItems>
          <li>
            <MenuItemName>Model S</MenuItemName>
            <MenuImages>
              <img src="/src/assets/model-s-bg.png" alt="" />
            </MenuImages>
            <MenuItemButtons>
              <button onClick={toggleModelS}>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Model Y</MenuItemName>
            <MenuImagesY>
              <img src="/src/assets/model-y-bg.png" alt="" />
            </MenuImagesY>
            <MenuItemButtons>
              <button>Order Now</button>
              <button>Learn</button>
            </MenuItemButtons>
          </li>
          <li>
            <MenuItemName>Model X</MenuItemName>
            <MenuImagesx>
              <img src="/src/assets/model-x-bg.png" alt="" />
            </MenuImagesx>
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

export default DropdownVehicle;
