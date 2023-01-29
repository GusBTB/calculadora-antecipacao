import styled from "styled-components";

export const Container = styled.form`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: fit-content;
`;

export const InputField = styled.input`
  /* width: 100%; */
  height: 50%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  padding-left: 15px;
  :focus {
    background-color: white;
    outline: none;
  }
`;

export const RealDiv = styled.div`
  height: 100%;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputFField = styled.input`
  height: 100%;
  width: max-content;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  :focus {
    background-color: white;
    outline: none;
  }
`;
export const FakeInputField = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  padding-left: 15px;
  gap: 10px;
`;
export const Title = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid blue;
  color: blue;
  border-radius: 15px;
  cursor: pointer;
  width: 80%;
  height: 40px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
`;
