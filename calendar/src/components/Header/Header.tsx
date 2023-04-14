import styled from "styled-components";
import {Add} from "../ui/Add";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>Interview Calender</HeaderTitle>
            <HeaderButton>
                <Add />
            </HeaderButton>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px;
  
`

const HeaderTitle = styled.h2`
  font-size: 36px;
  margin: 0;
  font-weight: normal;
`

const HeaderButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`