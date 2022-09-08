import Card from "./components/Card";
import styled from "styled-components";
import mainBg from "./img/main-bg.png";

export default function App() {
  return (
    <AppWrapper>
      <Card />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBg});
`;
