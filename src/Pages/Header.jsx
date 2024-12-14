import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import DropdownVehicle from "../DropdownMenu/DropdownVehicle";
import DropdownEnergy from "../DropdownMenu/DropdownEnergy";
import DropdownCharger from "../DropdownMenu/DropdownCharger";
import DropdownDiscover from "../DropdownMenu/DropdownDiscover";
import DropdownCountry from "../DropdownMenu/DropdownCountry";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //TO navigate to other pages
  const navigate = useNavigate();

  const handleSupport = () => navigate("/support");
  const handleSignUp = () => navigate("/login");

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVehicleOpen, setIsDropdownVehicleOpen] = useState(false);
  const [isDropdownEnergyOpen, setIsDropdownEnergyOpen] = useState(false);
  const [isDropdownChargerOpen, setIsDropdownChargerOpen] = useState(false);
  const [isDropdownDiscoverOpen, setIsDropdownDiscoverOpen] = useState(false);
  const [isDropdownCountryOpen, setIsCountryDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isDropdownCountryOpen);
  };
  const toggleDiscoverDropdown = () => {
    setIsDropdownDiscoverOpen(!isDropdownDiscoverOpen);
  };

  const toggleChargerDropdown = () => {
    setIsDropdownChargerOpen(!isDropdownChargerOpen);
  };

  const toggleVehicleDropdown = () => {
    setIsDropdownVehicleOpen(!isDropdownVehicleOpen);
  };

  const toggleEnergyDropdown = () => {
    setIsDropdownEnergyOpen(!isDropdownEnergyOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownVehicleOpen &&
        !event.target.closest(".dropdown-vehicle-container")
      ) {
        setIsDropdownVehicleOpen(false);
      }
      if (
        isDropdownEnergyOpen &&
        !event.target.closest(".dropdown-energy-container")
      ) {
        setIsDropdownEnergyOpen(false);
      }
      if (
        isDropdownChargerOpen &&
        !event.target.closest(".dropdown-charger-container")
      ) {
        setIsDropdownChargerOpen(false);
      }
      if (
        isDropdownDiscoverOpen &&
        !event.target.closest(".dropdown-discover-container")
      ) {
        setIsDropdownDiscoverOpen(false);
      }
      if (
        isDropdownCountryOpen &&
        !event.target.closest(".dropdown-country-container")
      ) {
        setIsCountryDropdownOpen(false);
      }
      if (
        isProfileDropdownOpen &&
        !event.target.closest(".profile-dropdown-container")
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [
    isDropdownVehicleOpen,
    isDropdownEnergyOpen,
    isDropdownChargerOpen,
    isDropdownDiscoverOpen,
    isDropdownCountryOpen,
    isProfileDropdownOpen,
  ]);

  return (
    <Container>
      <Logo>
        <img src="/src/assets/Logo.png" alt="" />
      </Logo>
      <Menu>
        <MenuItem onMouseEnter={toggleVehicleDropdown}>Vehicles</MenuItem>
        <MenuItem onMouseEnter={toggleEnergyDropdown}>Energy</MenuItem>
        <MenuItem onMouseEnter={toggleChargerDropdown}>Charger</MenuItem>
        <MenuItem onMouseEnter={toggleDiscoverDropdown}>Discover</MenuItem>
        <MenuItem>Shop</MenuItem>
      </Menu>
      <RightMenu>
        <Image onClick={handleSupport} src="/src/assets/help.svg" alt="" />
        <Image
          onMouseEnter={toggleCountryDropdown}
          src="/src/assets/web.png"
          alt=""
        />
        <ProfileContainer>
          <Image
            onClick={toggleProfileDropdown}
            src="/src/assets/profile.png"
            alt="Profile"
          />
          {isProfileDropdownOpen && (
            <ProfileDropdown className="profile-dropdown-container">
              <DropdownItem onClick={() => navigate("/profile")}>
                Profile Settings
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/logout")}>
                Logout
              </DropdownItem>
            </ProfileDropdown>
          )}
        </ProfileContainer>{" "}
      </RightMenu>
      <BurgerMenu onClick={toggleMenu}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerMenu>
      {isOpen && (
        <BurgerMenuItems>
          <CloseIcon onClick={toggleMenu} />
          <MenuItem href="#">Vehicles</MenuItem>
          <MenuItem href="#">Energy</MenuItem>
          <MenuItem href="#">Charging</MenuItem>
          <MenuItem href="#">Discover</MenuItem>
          <MenuItem href="#">Shop</MenuItem>
          <MenuItem href="#">Sign In</MenuItem>
        </BurgerMenuItems>
      )}
      {isDropdownVehicleOpen && (
        <DropdownVehicleContainer className="dropdown-vehicle-container">
          <DropdownVehicle
            setIsDropdownVehicleOpen={setIsDropdownVehicleOpen}
          />
        </DropdownVehicleContainer>
      )}
      {isDropdownEnergyOpen && (
        <DropdownEnergyContainer className="dropdown-energy-container">
          <DropdownEnergy setIsDropdownEnergyOpen={setIsDropdownEnergyOpen} />
        </DropdownEnergyContainer>
      )}
      {isDropdownChargerOpen && (
        <DropdownChargerContainer className=".dropdown-charger-container">
          <DropdownCharger
            setIsDropdownChargerOpen={setIsDropdownChargerOpen}
          />
        </DropdownChargerContainer>
      )}
      {isDropdownDiscoverOpen && (
        <DropdownDiscoverContainer className=".dropdown-discover-container">
          <DropdownDiscover
            setIsDropdownChargerOpen={setIsDropdownDiscoverOpen}
          />
        </DropdownDiscoverContainer>
      )}
      {isDropdownCountryOpen && (
        <DropdownCountryContainer className=".dropdown-country-container">
          <DropdownCountry
            setIsCountryDropdownOpen={setIsCountryDropdownOpen}
          />
        </DropdownCountryContainer>
      )}
      {isProfileDropdownOpen && (
        <ProfileDropdown className="profile-dropdown-container">
    <DropdownItem onClick={() => navigate("/profile")}>
      Profile Settings
    </DropdownItem>
    <DropdownItem onClick={() => navigate("/logout")}>
      Logout
    </DropdownItem>
  </ProfileDropdown>
      )}
    </Container>
  );
};

export default Header;

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

const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownVehicleContainer = styled.div`
  position: absolute;
  top: -15px; // Adjust this value to match the height of the header
  left: 0;
  right: 0;
  z-index: 1;
`;
const DropdownEnergyContainer = styled.div`
  position: absolute;
  top: -15px; // Adjust this value to match the height of the header
  left: 0;
  right: 0;
  z-index: 1;
`;
const DropdownChargerContainer = styled.div`
  position: absolute;
  top: -15px; // Adjust this value to match the height of the header
  left: 0;
  right: 0;
  z-index: 1;
`;
const DropdownDiscoverContainer = styled.div`
  position: absolute;
  top: -15px; // Adjust this value to match the height of the header
  left: 0;
  right: 0;
  z-index: 1;
`;
const DropdownCountryContainer = styled.div`
  position: absolute;
  top: -15px; // Adjust this value to match the height of the header
  left: 0;
  right: 0;
  z-index: 1;
`;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  img {
    height: 50px;
    width: 70px;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  font-weight: 600;
  font-size: 13px;
  padding: 8px 11px;
  flex-wrap: nowrap;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px 3px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
`;

const BurgerMenuItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow-y: auto;
  max-height: 100vh;
  gap: 20px;
  animation: ${slideDown} 0.5s ease-in-out;
  transform-origin: right center;

  @media (min-width: 769px) {
    display: none;
  }
`;
