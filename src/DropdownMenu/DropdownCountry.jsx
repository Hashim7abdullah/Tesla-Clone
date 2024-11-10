import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const DropdownCountry = ({setIsCountryDropdownOpen}) => {
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
    margin-top: 40px;
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
  `;

  const CountryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    width: 80%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  `;

  const CountryItem = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    &:hover {
      background: rgba(234, 230, 230, 0.668);
    }

    h4 {
      font-size: medium;
      margin: 0 0 10px;
      padding-bottom: 5px;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        padding-bottom: 3px;
        font-size: small;
      }
    }

    p {
      font-size: small;
      margin: 0;
      cursor: pointer;
    }
  `;
  const Flag = styled.img`
    width: 30px;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
  `;

  //code

  const [data, setData] = useState([]);

  const datafetch = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <DropdownContainer>
      <DropdownContainerWrapper>
        <CloseMenu onClick={() => setIsCountryDropdownOpen(false)}>
          <CloseIcon />
        </CloseMenu>
        <MenuItems>
          <CountryGrid>
            {data.map((country, index) => (
              <CountryItem key={index}>
                <Flag
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                />
                <h4>{country.name.common}</h4>
                <p>{country.capital ? country.capital[0] : "N/A"}</p>
              </CountryItem>
            ))}
          </CountryGrid>
        </MenuItems>
      </DropdownContainerWrapper>
    </DropdownContainer>
  );
};

export default DropdownCountry;
