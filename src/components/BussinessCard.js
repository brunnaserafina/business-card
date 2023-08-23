import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  IconCalendar,
  IconEmail,
  IconLocation,
  IconLock,
  IconPerson,
  IconPhone,
} from "../common/Icons";
import getInfo from "../services/api";
import Information from "./Information";

export default function BussinessCard() {
  const [imagePerfil, setImagePerfil] = useState("");
  const [isInfo, setIsInfo] = useState("user");
  const [color, setColor] = useState("user");

  const iconData = [
    { key: "user", icon: IconPerson },
    { key: "email", icon: IconEmail },
    { key: "birthday", icon: IconCalendar, fontSize: "25px" },
    { key: "location", icon: IconLocation },
    { key: "phone", icon: IconPhone, fontSize: "25px" },
    { key: "password", icon: IconLock },
  ];

  useEffect(() => {
    getInfo()
      .then((response) => {
        const result = response.data.results[0];
        setImagePerfil(result.picture.large);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <ImgDiv>
        <img src={imagePerfil} alt="perfil" />
      </ImgDiv>

      <Information isInfo={isInfo} />

      <Icons>
        {iconData.map((item, index) => (
          <Li
            key={item.index}
            onMouseEnter={() => {
              setIsInfo(item.key);
              setColor(item.key);
            }}
            isColor={color === item.key}
          >
            <item.icon fontSize={item.fontSize} />
          </Li>
        ))}
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 730px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  position: relative;
  text-align: center;

  &::before {
    content: "";
    width: 100%;
    heigth: 2px;
    top: 140px;
    position: absolute;
    border-top: 1px solid #9999;
  }

  p {
    font-size: 18px;
    color: #999999;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 38px;
    color: #2c2e31;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 2;
  }

  @media (max-width: 800px) {
    width: 90vw;

    h1 {
      font-size: 25px;
    }
  }
`;

const Icons = styled.ul`
  font-size: 30px;
  color: #999999;
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;

const Li = styled.li`
  list-style-type: none;
  position: relative;
  color: ${(props) => (props.isColor ? "#83ba43" : "#9999")};
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.isColor ? 1 : 0.7)};

  &:hover {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(-5px);
    opacity: 1;
  }

  ${(props) =>
    props.isColor &&
    `
    &::before {
      content: "-";
      position: absolute;
      top: -20px;
      text-align: center;
    }
  `}
`;

const ImgDiv = styled.div`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9999;
  z-index: 2;
`;
