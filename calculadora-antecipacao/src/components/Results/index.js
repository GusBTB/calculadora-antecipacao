import {
  BottomDiv,
  ContentDiv,
  RightSubContainer,
  TitleWidth,
  UpperDiv,
  TitleNotWidth,
} from "./styles";

const Results = ({ tomorrow, ft, td, nt }) => {
  return (
    <RightSubContainer>
      <UpperDiv>
        <TitleWidth fontSize="20px">VOCÊ RECEBERÁ:</TitleWidth>
      </UpperDiv>
      <BottomDiv>
        <ContentDiv>
          <TitleNotWidth>Amanhã: </TitleNotWidth>
          <TitleWidth>
            {tomorrow.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </TitleWidth>
        </ContentDiv>
        <ContentDiv>
          <TitleNotWidth>Em 15 dias: </TitleNotWidth>
          <TitleWidth>
            {ft.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </TitleWidth>
        </ContentDiv>
        <ContentDiv>
          <TitleNotWidth>Em 30 dias: </TitleNotWidth>
          <TitleWidth>
            {td.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </TitleWidth>
        </ContentDiv>
        <ContentDiv>
          <TitleNotWidth>Em 90 dias: </TitleNotWidth>
          <TitleWidth>
            {nt.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </TitleWidth>
        </ContentDiv>
      </BottomDiv>
    </RightSubContainer>
  );
};

export default Results;
