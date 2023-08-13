import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { center } from '../assets/styles/GlobalStyle.js';
import Header from '../components/Header.jsx';
import { Infos } from '../utils/context.jsx';
import { server } from '../utils/core.js';

export default function Home() {
  const { user, setInfo, ...info } = useContext(Infos);
  useEffect(() => {
    /* 
    server.get('', {
      headers: { Authorization: `Bearer ${user?.token}` }
    }).then(({ data }) => {
      setInfo({ ...info, user });
      console.log(data)
    }).catch((err) => {
      console.log(err);
    }); 
    */
  }, []);

  return (
    <>
      <HomeContainer>
        <Header />
        <ItemsMain>
        </ItemsMain>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.section`
  margin-top: 60px;
  height: 100%;
  gap: 20px;
  padding: 20px 20px;
  background-color: #dedede;
  footer {
    width: max-content;
    height: 30px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ItemsMain = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  height: 100%;
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
