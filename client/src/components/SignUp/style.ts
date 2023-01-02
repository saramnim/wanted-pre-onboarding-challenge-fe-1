import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  margin: 20vh 40vw;
  width: 20vw;
  height: 60vh;
  color: gray;
  background-color: pink;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
`;

export const Title = styled.div`
  font-size: 30px;
  width: 50%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% 5%;
  // align-items: center;
  justify-content: space-evenly
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Name = styled.div`
  width: 20%;
  font-size: 20px;
  margin-left: 5%;
  text-align: center;
`;

export const Input = styled.input`
border: none;
width: 70%;
margin-left: 10%;
font-size: 18px;
`;

export const SubmitBtn = styled.button`
  margin: 25%;
  width: 50%;
  border: none;
`;
