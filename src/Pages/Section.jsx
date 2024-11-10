import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useOnScreen from "./useOnScreen";

const Section = ({
  title,
  description,
  leftBtnTxt,
  RightBtnTxt,
  backgroundImage,
  leftBtnLink,
  rightBtnLink,
}) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <Wrap ref={ref} bgimg={backgroundImage}>
      <ItemText>
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1, y: isVisible ? 0 : 100 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.p>
      </ItemText>

      {/* Button Group */}
      <ButtonGroup>
        <LeftButton onClick={() => navigate(leftBtnLink)}>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1, y: isVisible ? 0 : 100 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {leftBtnTxt}
          </motion.div>
        </LeftButton>
        {RightBtnTxt && (
          <RightButton onClick={() => navigate(rightBtnLink)}>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1, y: isVisible ? 0 : 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {RightBtnTxt}
            </motion.div>
          </RightButton>
        )}
      </ButtonGroup>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/src/assets/${props.bgimg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: x-large;
  line-height: 50px;
  p {
    font-size: large;
    font-weight: 900;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  overflow-y: hidden;

`;

const LeftButton = styled.div`
  div {
    height: 35px;
    width: 256px;
    padding: 10px;
    background-color: rgba(240, 248, 255, 1);
    border-radius: 5px;
    text-align: center;
    font-size: small;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: rgba(240, 248, 255, 0.6);
    }
  }
`;

const RightButton = styled(LeftButton)`
  div {
    background-color: rgba(0, 123, 255, 1);
    color: white;
    &:hover {
      background-color: rgba(0, 123, 255, 0.6);
    }
  }
`;

// // Canvas wrapper for 3D content
// const CanvasWrapper = styled.div`
//   width: 200px;
//   height: 200px;
// `;
