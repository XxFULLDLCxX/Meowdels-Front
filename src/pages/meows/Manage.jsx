import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { center } from '../../assets/styles/GlobalStyle.js';
import Footer from '../../components/Footer.jsx';
import Header from '../../components/Header.jsx';
import { Infos } from '../../utils/context.jsx';
import { server } from '../../utils/core.js';

export default function ManageModels() {
  const { user, models, setInfo, ...info } = useContext(Infos);

  useEffect(() => {
    server.get('models/manage', {
      headers: { Authorization: `Bearer ${user?.token}` }
    }).then(({ data }) => {
      setInfo({ ...info, user, models: data });
      console.log(data)
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <ManageModelsContainer>
        <Header />
        <ItemsMain>
          <ul>
            {models?.map(m => <Item key={m.id} id={m.id} name={m.name} picture={m.picture} available={m.available} />)}
          </ul>
          {Object.entries(!models ? {} : models).length === 0 && (
            <h3>Você ainda não adicionou um Model! Adicione seu Meow!</h3>
          )}
        </ItemsMain>
        <Footer />
      </ManageModelsContainer>
    </>
  );
}

function Item({ name, picture, id, available }) {
  const { user, models, setInfo, ...info } = useContext(Infos);
  const [isChecked, setIsChecked] = useState(available);

  useEffect(() => {
    server.post(`models/${id}/${isChecked}`, {}, {
      headers: { Authorization: `Bearer ${user?.token}` }
    }).catch((err) => {
      console.log(err);
    });
  }, [isChecked]);

  return (
    <>
      <ItemLi>
        <div className="banner">
          <img src={picture} alt="Meow Photo" />
          <div className="label">
            <h3>{name}</h3>
            <label htmlFor={`available${id}`}>Is Available</label>
            <input
              type="checkbox"
              id={`available${id}`}
              name="available"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)} />
          </div>
        </div>
      </ItemLi>
    </>
  );
}

const ManageModelsContainer = styled.section`
  gap: 20px;
  padding: 20px 20px;
  height: 100%;
`;

const ItemsMain = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  margin: 80px auto 0px;
  padding-bottom: 30px;
  width: 100%;
  .log {
    margin-top: 5px;
  }
  ul {
    ${center}
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > button {
    position: fixed;
    bottom: 10px;
    margin: 5px 7px;
    font-size: 18px;
    padding: 10px;
    width: 85%;
    cursor: pointer;
    border-radius: 5px;
    background-color: #aaaaaa77;
    font-weight: 500;
  }
`;

const ItemLi = styled.li`
  ${center}

  position: relative;
  gap: 10px;
  .banner {
    ${center}
    flex-direction: column;
    img {
      width: 250px;
      height: 250px;
      background-color: #ffffff;
      border-radius: 10px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

  }
  label {
      text-align: center;
      width: 325px;
      font-family: 'Open Sans', sans-serif;
      margin: 20px 10px 10px;
    }
  h3 {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    bottom: 23px;
    right: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #aaaaaa99;
    margin-bottom: 10px;
    width: 100%;
  }
  .label {
    max-width: 250px;
    width: 100%;
  }
  button {
    position: absolute;
    top: 48px;
    left: 15px;
    border-radius: 5px;
    background-color: #aaaaaa77;
  }

  @media (max-width: 689px) {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
