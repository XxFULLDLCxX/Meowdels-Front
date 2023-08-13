import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Infos } from '../../utils/context';
import styled from 'styled-components';
import { useState } from 'react';
import { MdPerson } from 'react-icons/md';

export default function Account() {
  const { user } = useContext(Infos);
  const navigate = useNavigate();

  return (
    <AccountContainer>
      <button onClick={() => (!user ? navigate('/sign-in') : navigate('/'))}>
        <MdPerson size="1.5em" />
        {!user ? 'Entrar' : user.name}
      </button>
    </AccountContainer>
  );
}

const AccountContainer = styled.div`
  button {
    width: max-content;
    display: flex;
    height: 20px;
    svg {
      margin-right: 10px;
    }
    background-color: inherit;
    text-align: center;
    line-height: 20px;
  }
  ul {
    position: absolute;
    background-color: #dedede;
    width: 200px;
    height: 200px;
    top: 0px;
    right: 0px;
    z-index: -1;
  }
`;
