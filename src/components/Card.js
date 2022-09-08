import React from "react";
import styled from "styled-components";
import QRCode from "../img/qr-code.png";

const Card = () => {
  return (
    <CardWrapper>
      <StyledCard>
        <img src={QRCode} alt="QR code" />
        <h4>Improve your front-end skills by building projects</h4>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </StyledCard>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  background-color: #d5e1ef;
  transition: all .3s ease-in;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 90%;
    height: 80%;
  }
`;

const StyledCard = styled.div`
  background-color: hsl(0, 0%, 100%);
  transition: all .3s ease-in;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  width: 80%;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 450px) {
    width: 50%;
  }
  @media (min-width: 576px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1400px) {
    width: 20%;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: inherit;
  }
  h4,
  p {
    padding: 0 0.5rem;
  }
  h4 {
    @media (max-width: 375px) {
      font-size: 15px;
    }
  }
  p {
    font-size: 13px;
    margin: 1rem 0;
    color: #b2b3b7;
    text-align: center;
    @media (max-width: 375px) {
      font-size: 15px;
    }
  }
`;
