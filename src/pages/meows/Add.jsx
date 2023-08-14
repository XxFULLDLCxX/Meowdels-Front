import { useContext } from 'react';
import styled from 'styled-components';
import { Form, Input, TextArea, Title } from '../../assets/styles/GlobalStyle.js';
import Footer from '../../components/Footer.jsx';
import Header from '../../components/Header.jsx';
import { Infos } from '../../utils/context.jsx';
import { server } from '../../utils/core.js';

export default function AddModel() {
  const { user } = useContext(Infos);
  const add = (e) => {
    e.preventDefault();
    const info = {
      name: e.target.name.value,
      picture: e.target.picture.value,
      description: e.target.description.value,
    };

    console.log(user?.token);

    server.post('/models', info, {
      headers: { Authorization: `Bearer ${user?.token}` }
    }).then(({ data }) => {
      console.log(data)
      alert("Meow Adicionado!")
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <AddModelContainer>
        <Header />
        <Main>
          <Title>Add a Meow</Title>
          <Form onSubmit={add}>
            <Input placeholder="Name" type="text" name="name" />
            <Input placeholder="Picture" type="text" name="picture" />
            <TextArea placeholder="Description" name="description"></TextArea>
            <Input type="submit" />
          </Form>
        </Main>
        <Footer />
      </AddModelContainer>
    </>
  );
}

const AddModelContainer = styled.section`
  gap: 20px;
  padding: 20px 20px;
  height: 100%;
`;

const Main = styled.main`
  position: relative;
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
  height: 100%;
  h2 {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 20px auto;
    text-align: center;
    }
  form {
    margin: 10px;
    padding: 40px 20px 0px;
    width: 100%;
  }

`;
