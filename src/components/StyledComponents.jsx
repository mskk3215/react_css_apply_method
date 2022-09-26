import styled from "styled-components";

//StyledComponentsはcss in jsxの中でも人気
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled components -</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

//styleを当てたコンポーネントとわかるように頭文字にSをつけている。我流。
//サスと同じ技法が使える
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: poinetr;
  }
`;
