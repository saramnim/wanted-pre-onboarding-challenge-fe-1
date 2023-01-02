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
  margin-left: 30%;
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

export const LogOutBtn = styled.button`
  border: none;
  cursor: pointer;
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;
//   width: 100%;
  height: 100%;
//   padiing: auto;
`;

export const InputWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
//   height: 5vh;
`;

export const TodoInput = styled.input`
    font-size: 20px;
    border: none;
`;

export const AddBtn = styled.button`
  border: none;
  cursor: pointer;
`;

export const List = styled.div`
//   background-color: yellow;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const ListItem = styled.div`
//   background-color: yellow;
  margin-left: 3vh;
  font-size: 20px;
  `;

export const Btns = styled.div``;

export const EditBtn = styled.button`
  border: none;
  margin-right: 0.5vh;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  border: none;
  margin-right: 1vh;
  cursor: pointer;
`;
