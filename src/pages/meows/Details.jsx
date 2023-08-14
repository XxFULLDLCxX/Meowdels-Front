import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { center } from '../../assets/styles/GlobalStyle.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Infos } from '../../utils/context';
import { server } from '../../utils/core';

export default function ModelsDetails() {
  const { user, setInfo, ...info } = useContext(Infos);
  const {
    state: { id },
  } = useLocation();
  const [details, setDetails] = useState({});
  useEffect(() => {
    server.get(`models/${id}/details`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    }).then(({ data }) => {
      console.log(data);
      setDetails(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <ManageModelsContainer>
        <Header />
        <Main>
          <Item id={id} details={details} tutor={details?.tutor} />
        </Main>
        <Footer />
      </ManageModelsContainer>
    </>
  );
}

function Item({ details, tutor }) {
  return (
    <>
      <ItemDiv>
        <div className="model">
          <h3>{details?.name}</h3>
          <img src={details?.picture} alt="Meow Photo" />
        </div>
        <div className="details">
          <fieldset>
            <legend>Descrição:</legend>
            <textarea readOnly value={details.description} />
          </fieldset>
          <fieldset>
            <legend>Tutor: </legend>
            <p>{tutor?.name}</p>
          </fieldset>
          <fieldset>
            <legend>Email: </legend>
            <p>{tutor?.email}</p>
          </fieldset>
          <fieldset>
            <legend>Phone: </legend>
            <p>{tutor?.phone}</p>
          </fieldset>
        </div>
      </ItemDiv>
    </>
  );
}

const ManageModelsContainer = styled.section`
  gap: 20px;
  padding: 20px 20px;
  height: 100%;
`;

const Main = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  margin: 80px auto 0px;
  padding-bottom: 60px;

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

const ItemDiv = styled.div`
  ${center}
  flex-wrap: wrap;
  position: relative;
  gap: 10px;
  .model {
    ${center}
    flex-direction: column;
    img {
      width: 75%;
      max-width: 500px;
      background-color: #ffffff;
      border-radius: 10px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
    h3 {
      display: inline-block;
      font-size: 32px;
      font-weight: 500;
      bottom: 23px;
      right: 15px;
      padding: 5px 7px;
      border-radius: 5px;
      background-color: #aaaaaa99;
      color: inherit;
      margin-bottom: 10px;
    }
  }

  .details {
    ${center}
    flex-direction: column;
    gap: 10px;
    fieldset {
      ${center}
      width: 250px;
      height: max-content;
      min-height: 50px;
      justify-content: end;
    }
    legend {
      margin-bottom: 10px;
      background-color: #000;
      color: #fff;
      padding: 3px 6px;
      min-width: 88px;
    }

    textarea {
      font-size: 16px;
      border: none;
      outline: none;
      resize: none;
      background-color: inherit;
      overflow: none;
      width: 100%;
      min-height: 100px;
      text-align: end;
    }

    p {
      font-size: 18px;

    }  

    input {
      margin: 0.4rem;
    }
  }

  @media (max-width: 799px) {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
