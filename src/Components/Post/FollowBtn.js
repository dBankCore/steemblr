import styled from "styled-components";

const FollowBtn = styled.button`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  top: 25%;
  right: 0;
  background: transparent;
  border: 0;
  outline: 0;
  font-weight: 300;
  margin-right: 10px;
  &:active {
    background-color: rgba(200, 200, 200, 0.5);
  }
  @media (max-width: 425px) {
  }
`;
export default FollowBtn;
