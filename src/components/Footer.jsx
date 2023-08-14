import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { center } from '../assets/styles/GlobalStyle.js';

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/" className="logo">
        Home
      </Link>
      <Link to="/models/manage" className="logo">
        Manage
      </Link>
      <Link to="/models/add" className="logo">
        Add
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  ${center}
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  background-color: #8a88ac;
  z-index: 1;
  width: 100%;

  .logo {
    width: 100%;
    text-align: center;
    font-size: 18px;
    text-decoration: underline;
    color: #000;
  }
`;
