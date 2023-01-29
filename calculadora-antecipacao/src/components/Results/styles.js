import styled from "styled-components";

export const RightSubContainer = styled.div`
  height: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TitleWidth = styled.p`
  font-size: ${(props) => props.fontSize};
  color: #006fff;
  font-weight: 700;
`;

export const UpperDiv = styled.div`
  background-color: transparent;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid gray;
`;
export const BottomDiv = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ContentDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  gap: 10px;
`;

export const TitleNotWidth = styled.p`
  font-size: 15px;
  color: #308aff;
`;
