import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import styled from 'styled-components';
import { app } from '../../firebaseApp';

const IndexComponent = () => {
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
    <Wrapper>
      <Button onClick={onClickSocialLogin}>지금 가입</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* 100vh방식: navbar height로 인해 스크롤바 생성됨 */
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const Button = styled.button`
  background-color: blue;
  border: none;
  width: 15rem;
  height: 3rem;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export default IndexComponent;
