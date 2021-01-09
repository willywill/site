import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../utils/theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${PRIMARY_COLOR};
  font-size: 72px;
`;

const HomePage = () => <Container>{"It's working!"}</Container>;

export default HomePage;
