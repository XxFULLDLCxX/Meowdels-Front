import { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Title } from '../../assets/styles/GlobalStyle';
import { Infos } from '../../utils/context';
import { formatCPF, server } from '../../utils/core';
import Header from '../Header';
import { AuthContainer } from './AuthContainer';

export default function SignUp() {
  const { info, setInfo, ...rest } = useContext(Infos);
  const [user, setUser] = useState({ phone: '', CPF: '' });
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    if (e.target.password[0].value !== e.target.password[1].value) {
      return alert('"Password" and "Confirm Password" must match.');
    }
    setInfo({ ...rest, loading: true });

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password[0].value,
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
          <Input placeholder="Name" type="name" name="username" />
          <Input placeholder="Email" type="email" name="email" />
          <Input placeholder="Password" type="password" autoComplete="new-password" name="password" />
          <Input placeholder="Confirm Password" type="password" autoComplete="new-password" name="password" />
          <PhoneInput
            country={"br"}
            value={user.phone}
            onChange={(value) => setUser({ ...user, phone: value })}
            inputProps={{
              name: 'phone',
              required: true
            }}
          />
          <Input
            placeholder="CPF"
            type="text"
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
