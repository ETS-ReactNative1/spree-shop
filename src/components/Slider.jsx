import React from "react";
import styled from "styled-components";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform:translateX(${props => props.slideIndex * -100}vw)
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 10px;
  background-color: transparent;
  cursor: pointer;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`;

const Slider = () => {

    const [slideIndex, setSlideIndex ] = useState(0)

const handleClick = (direction) => {
  if (direction === "left") {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  } else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  }
}
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
