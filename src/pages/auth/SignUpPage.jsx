import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignUp from '../../components/auth/SignUp';

export default function SignUpPage() {
  return (
    <SingUpContainer>
      <SignUp />
      <Link to="/sign-in">Já Cadastrado? Faça Login!</Link>
    </SingUpContainer>
  );
}

const SingUpContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 0px 20px;

  max-width: 448px;
  max-height: 500px;

  background-color: #efefef;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
`;
