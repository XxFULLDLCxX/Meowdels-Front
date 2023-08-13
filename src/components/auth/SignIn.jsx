import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Title } from '../../assets/styles/GlobalStyle';
import { Infos } from '../../utils/context';
import { server } from '../../utils/core';
import Header from '../Header';
import { AuthContainer } from './AuthContainer';

export default function SignIn() {
  const { setInfo } = useContext(Infos);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    server.post(`/auth/sign-in`, user)
      .then(({ data }) => {
        const { date, token, name } = data;
        localStorage.setItem('user', JSON.stringify(data));
        setInfo({ user: { token, name }, date })
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };
  return (
    <>
      <Header />
      <AuthContainer>
        <Title>Login</Title>
        <Form onSubmit={login}>
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" autoComplete="new-password" name="password" />
          <Input type="submit" />
        </Form>
      </AuthContainer>
    </>
  );
}
