import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Title } from '../../assets/styles/GlobalStyle';
import { Infos } from '../../utils/context';
import { formatCPF, server } from '../../utils/core';
import Header from '../Header';
import { AuthContainer } from './AuthContainer';

export default function SignIn() {
  const { info, setInfo, ...rest } = useContext(Infos);
  const [user, setUser] = useState({ CPF: '', phone: '' });
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    console.log(e.target.password.value, e.target.confirmPassword.value);
    if (e.target.password.value !== e.target.confirmPassword.value) {
      return alert('"Senha" e "Confirme a Senha" devem ser iguais.');
    }
    setInfo({ ...rest, loading: true });

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      ...user,
    };

    server.post(`/auth/sign-up`, info)
      .then(() => {
        navigate('/sign-in');
        setInfo({ ...rest, loading: false });
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      }); // prettier-ignore
  };

  return (
    <>
      <Header />
      <AuthContainer>
        <Title>Register</Title>
        <Form onSubmit={signup}>
          <Input placeholder="Name" type="name" name="name" />
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" autoComplete="new-password" name="password" />
          <Input placeholder="Confirm password" type="password" autoComplete="new-password" name="confirmPassword" />
          <Input
            placeholder="Phone"
            value={user.phone}
            onChange={({ target: { value } }) => setUser({ ...user, phone: value.replace(/\D/g, '') })}
            minLength="10"
            maxLength="11"
            pattern="\d+\"
            name="phone"
          />
          <Input
            placeholder="CPF"
            value={formatCPF(user.CPF)}
            onChange={({ target: { value } }) => setUser({ ...user, CPF: value.replace(/\D/g, '') })}
            maxLength="14"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            name="CPF"
          />
          <Input type="submit" />
        </Form>
      </AuthContainer>
    </>
  );
}
