import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUp from '../../components/auth/SignUp';

export default function SignUpPage() {
  return (
    <SignUpContainer>
      <SignUp />
      <Link to="/sign-in">Já Cadastrado? Faça Login!</Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  padding: 10px 0px 20px;

  margin: 80px auto 0px;

  max-width: 448px;

  background-color: #efefef;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
`;
