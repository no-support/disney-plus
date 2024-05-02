import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const BasicMenu = () => {
  return (
    <NavComponent>
      <h1>
        <a href="/" style={{ color: 'white' }}>
          디즈니
        </a>
      </h1>
      <InputComponent />
      <a href="/login" style={{ color: 'white' }}>
        로그인
      </a>
    </NavComponent>
  );
};

const NavComponent = ({ children }) => {
  return <NavWrapper>{children}</NavWrapper>;
};
const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  position: sticky;
  top: 0;
  background-color: black;
  padding: 1rem;
`;
const InputComponent = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [searchQuery, setSearchQuery] = useState(q || '');

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    navigate(`/search?q=${q}`);
  };

  useEffect(() => {
    if (pathname === '/search') {
      document.getElementById('q').focus();
    }
  }, [pathname]);

  return (
    <label htmlFor="q">
      <input
        type="search"
        name="q"
        id="q"
        value={searchQuery}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default BasicMenu;
