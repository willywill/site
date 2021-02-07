import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../utils/theme';

const SubViewContainer = styled.div`
  width: 260px;
  height: 150px;
  background-color: ${PRIMARY_COLOR};
  opacity: 0.10;
`;

const SubView = () => (
  <SubViewContainer />
);

SubView.displayName = 'SubView';

SubView.propTypes = {

};

SubView.defaultProps = {

};

export default SubView;
