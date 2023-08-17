import { styled } from "styled-components";
import {
  IconCalendar,
  IconEmail,
  IconLocation,
  IconLock,
  IconPerson,
  IconPhone,
} from "../common/Icons";

export default function BussinessCard() {
  return (
    <Wrapper>
      <ImgDiv>
        <img
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="perfil"
        />
      </ImgDiv>

      <p>Hi, My name is</p>
      <h1>Mrs Matilde Hoiberg</h1>

      <Icons>
        <li>
          <IconPerson />
        </li>
        <li>
          <IconEmail />
        </li>
        <li>
          <IconCalendar fontSize={"25px"} />
        </li>
        <li>
          <IconLocation />
        </li>
        <li>
          <IconPhone fontSize={"25px"} />
        </li>
        <li>
          <IconLock />
        </li>
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
  justify-content: center;
  border-radius: 4px;

  p {
    font-size: 18px;
    color: #999999;
    margin-bottom: 0;
  }

  h1 {
    font-size: 38px;
    color: #2c2e31;
    font-family: Ubuntu, sans-serif;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

const Icons = styled.ul`
  font-size: 30px;
  color: #999999;
  display: flex;
  width: 80%;
  justify-content: space-evenly;

  li {
    list-style-type: none;
    position: relative;
  }

  li:hover {
    color: #83ba43;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li:hover::before {
    content: "--";
    position: absolute;
    top: -20px;
  }
`;

const ImgDiv = styled.div`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
