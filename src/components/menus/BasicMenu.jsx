import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { app } from '../../firebaseApp';
import AuthContext from '../../context/AuthContext';

const BasicMenu = () => {
  const { user } = useContext(AuthContext);

  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
    } catch (error) {
      console.error('BasicMenu.jsx - error: ', error);
    }
  };

  const onClickSocialLogin = async () => {
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log('result: ', result);
      })
      .catch((error) => {
        console.error('error: ', error);
      });
  };

  return (
    <NavComponent>
      <h1>
        <Link to={'/'}>디즈니</Link>
      </h1>
      {user && <InputComponent />}
      {user ? (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <img
            src={user.photoURL}
            alt="profile"
            style={{ borderRadius: '50%', width: '30px', height: '30px' }}
          />
          <span onClick={onSignOut} className="pointer">
            로그아웃
          </span>
        </div>
      ) : (
        <span onClick={onClickSocialLogin} className="pointer">
          로그인
        </span>
      )}
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
  /* fixed 방식: navbar의 높이를 잃어버려 다음 형제 노드가 navbar의 시작 부분에 위치 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  position: sticky;
  top: 0;
  background-color: black;
  padding: 1rem;
  color: white;
  & a {
    color: white;
  }
  & .pointer {
    cursor: pointer;
  }
`;
const InputComponent = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [searchQuery, setSearchQuery] = useState(q || '');
  const inputElement = useRef();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    navigate(`/search?q=${q}`);
    // inputElement.current.focus(); // wrong. not work.
  };

  useEffect(() => {
    if (pathname === '/search') {
      // document.getElementById('q').focus();
      inputElement.current.focus();
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
        ref={inputElement}
      />
    </label>
  );
};

export default BasicMenu;
