import {
  Container,
  InputDiv,
  InputField,
  Title,
  FakeInputField,
  InputFField,
  Button,
  TitleDiv,
  RealDiv,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

const Form = ({ setTomorrow, setFt, setTd, setNt }) => {
  const formSchema = yup.object().shape({
    amount: yup.number().required("Campo obrigatório"),
    installments: yup.number().required("Campo obrigatório"),
    mdr: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/", data)
      .then((res) => {
        setTomorrow(res.data["1"]);
        setFt(res.data["15"]);
        setTd(res.data["30"]);
        setNt(res.data["90"]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <TitleDiv>
        <Title fontSize="22px" color="black" style={{ fontWeight: "600" }}>
          Simule sua Antecipação
        </Title>
      </TitleDiv>
      <InputDiv>
        <Title fontSize="15px" color="black">
          Informe o valor da venda *
        </Title>
        <FakeInputField>
          <RealDiv>
            <Title fontSize="15px" color="black">
              R$
            </Title>
          </RealDiv>
          <InputFField {...register("amount")} />
        </FakeInputField>
      </InputDiv>
      <InputDiv>
        <Title fontSize="15px" color="black">
          Em quantas parcelas *
        </Title>
        <InputField {...register("installments")} />
        <Title fontSize="11px" color="gray">
          Máximo de 12 parcelas
        </Title>
      </InputDiv>
      <InputDiv>
        <Title fontSize="15px" color="black">
          Informe o percentual do MDR *
        </Title>
        <InputField {...register("mdr")} />
      </InputDiv>
      <Button type="submit">Simular</Button>
    </Container>
  );
};

export default Form;
