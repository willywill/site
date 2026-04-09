import styled from "styled-components";
import { breakpoints } from "../../../utils/theme";
import { Flex } from "../../ui";

const OverviewContainer = styled(Flex)`
  position: relative;
  max-width: 2400px;
  z-index: 1;

  @media (max-width: ${breakpoints.desktopSmall}) {
    flex-direction: column;
  }
`;

export default OverviewContainer;
