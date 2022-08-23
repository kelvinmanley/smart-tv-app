import styled from "styled-components";
import { Colors } from "../ui";

const MenuItem = styled.div`
  border-left: none;
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 3px;
  padding: 12px 20px;

  :hover {
    border-left: 5px solid ${Colors.Orange};
  }
`;

export default MenuItem;
