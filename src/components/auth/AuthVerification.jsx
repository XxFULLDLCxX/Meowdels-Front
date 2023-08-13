import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { publicPaths } from '../../utils/core';

export default function AuthVerification({ isAuthenticated, children }) {
  const verificationCount = useRef(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isAuthenticated && !publicPaths.includes(pathname)) {
      if (++verificationCount.current === 1) {
        setTimeout(() => {
          navigate('/sign-in');
          alert('Usuário não logado!');
        }, 10);
      }
    }
  }, [pathname]);
  verificationCount.current = 0;

  return <>{!isAuthenticated && !publicPaths.includes(pathname) ? <Log>Verificando...</Log> : children}</>;
}

const Log = styled.h1`
  font-size: 18px;

  height: 60px;
  padding: 20px 40px;
  background-color: #aaaaaa;
  color: #000;
`;
