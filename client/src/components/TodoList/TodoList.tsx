import { useState } from "react";
import { AddBtn, Btns, Context, DeleteBtn, EditBtn, InputWapper, List, ListBox, ListItem, LogOutBtn, Title, TitleWrapper, TodoInput, Wrapper } from "./style";

const TodoList = () => {
  const [login, setLogin] = useState<string>("");

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>TodoList</Title>
        <LogOutBtn>Logout</LogOutBtn>
      </TitleWrapper>
      <Context>
        <InputWapper>
          <TodoInput />
          <AddBtn>추가</AddBtn>
        </InputWapper>
        <List>
          <ListBox>
            <ListItem>memo</ListItem>
            <Btns>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
            </Btns>
          </ListBox>
          <ListBox>
            <ListItem>memo</ListItem>
            <Btns>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
            </Btns>
          </ListBox>
          <ListBox>
            <ListItem>memo</ListItem>
            <Btns>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
            </Btns>
          </ListBox>
        </List>
      </Context>
    </Wrapper>
  );
};

export default TodoList;