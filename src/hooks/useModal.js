import { useState } from 'react';

const useModal = ({ customCloseHandler } = {}) => {
  const [opened, setOpened] = useState(false);

  const openModal = () => {
    setOpened(true);
  };

  const closeModal = () => {
    customCloseHandler ? customCloseHandler() : setOpened(!opened);
  };

  return { opened, setOpened, openModal, closeModal };
};

// customCloseHandler example
// const _ = {
//   customCloseHandler: () => {
//     const confirm = window.confirm('Are you sure?');
//     if (confirm) setOpened(!opened);
//     return;
//   },
// };
// const { opened, setOpened, openModal, closeModal } = useModal(_);
export default useModal;
