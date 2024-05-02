import styled from 'styled-components';
import BasicMenu from '../components/menus/BasicMenu';

const BasicLayout = ({ children }) => {
  return (
    <>
      <BasicMenu />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  margin: 1rem;
`;
export default BasicLayout;
