import styled from 'styled-components';

const Loader = () => {
  return <Circle />;
};

const Circle = styled.div`
  width: 50px;
  height: 50px;
  /* border-radius: 50%;
  border: 3px solid #f3f3f3;
  border-top: 3px solid blue;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 5px solid blue;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 1000;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loader;
