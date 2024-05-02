import styled from 'styled-components';

const IndexComponent = () => {
  return (
    <Wrapper>
      <Button>지금 가입</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
