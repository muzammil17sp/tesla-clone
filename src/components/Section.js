import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = ({
  title,
  description,
  image,
  rightButtonText,
  leftButtonText,
}) => {
  return (
    
    <Wrap bgImage={image}>
      <Fade bottom >
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
        </ItemText>
        </Fade>
      <Buttons>
        <Fade bottom> <ButtonGroup>
          <LeftButton>{leftButtonText}</LeftButton>
          {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
        </ButtonGroup></Fade>
        
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./images/model-s.jpg");  background-image:
   linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.12),
      rgba(0, 0, 0, 0.12)
    ),
    ${(props) => `url("./images/${props.bgImage}")`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* overflow-x: hidden; */
  /* @media (max-width: 768px) {
    background-size: 180% 100%;
  } */
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: #000;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin-top: 15px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  text-align: center;
`;
