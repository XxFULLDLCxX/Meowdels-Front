import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { center } from '../assets/styles/GlobalStyle.js';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { Infos } from '../utils/context.jsx';
import { server } from '../utils/core.js';

export default function ManageModels() {
  const { user, models, setInfo, ...info } = useContext(Infos);

  useEffect(() => {
    server.get('models', {
      headers: { Authorization: `Bearer ${user?.token}` },
    }).then(({ data }) => {
      setInfo({ ...info, user, models: data });
      console.log(data);
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
            {models?.map((m) => (
              <Item key={m.id} id={m.id} name={m.name} picture={m.picture} description={m.description} />
            ))}
          </ul>
          {models && (
            <h3> Ainda não há Models Disponíveis! Adicione seu Meow!</h3>
          )}
        </ItemsMain>
        <Footer />
      </ManageModelsContainer>
    </>
  );
}

function Item({ id, name, picture }) {
  const { user, models, setInfo, ...info } = useContext(Infos);

  useEffect(() => {
    server.get(`models`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <ItemLi>
        <Link to="/models/details" state={{ id }}>
          <div className="banner">
            <img src={picture} alt="Meow Photo" />
            <h3>{name}</h3>
          </div>
        </Link>
      </ItemLi>
    </>
  );
}

const ManageModelsContainer = styled.section`
  gap: 20px;
  padding: 20px 20px;
  height: 100%;
  padding-bottom: 60px;
`;

const ItemsMain = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  margin: 80px auto 0px;
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
      width: 225px;
      @media (max-width: 527px) {
        width: 80%;
      }
      background-color: #ffffff;
      border-radius: 10px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
  }
  a {
    text-decoration: none;
  }
  a, h3 {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    bottom: 23px;
    right: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #aaaaaa99;
    color: inherit;
    margin-bottom: 10px;
  }
`;
