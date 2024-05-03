import { Navigate, Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import DetailPage from '../pages/DetailPage';

const Router = ({ isAuthenticated }) => {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="main" element={<MainPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path="/" element={<Navigate replace to="/main" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
