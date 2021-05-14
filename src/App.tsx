import './App.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import Header from './components/header/Header';
import InfoTabs from './components/infoTabs/InfoTabs';

const StyledAppFrame = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  color: #f0f0f0;

  * {
    font-family: 'Tomorrow', sans-serif !important;
    letter-spacing: 1px;
  }

  background: radial-gradient(circle at center top, #021d00, #000700);
  /* background: radial-gradient(circle at center top, rgb(31, 55, 86), rgb(20, 21, 57)); */
`;

const App = () => {

  return (
    <StyledAppFrame>
      <ToastContainer closeOnClick autoClose={2500} />
      <Header />
      <InfoTabs />
    </StyledAppFrame>
  );
}

export default App;
