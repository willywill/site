import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/theme';

const MainViewContainer = styled.div`
  width: 800px;
  height: 500px;
  background-color: ${PRIMARY_COLOR};
  opacity: 0.15;
`;

const MainView = () => (
  <MainViewContainer />
);

MainView.displayName = 'MainView';

MainView.propTypes = {

};

MainView.defaultProps = {

};

export default MainView;
