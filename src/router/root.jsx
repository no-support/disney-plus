import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Loading = <div>Loading....</div>;
const IndexPage = lazy(() => import('../pages/IndexPage'));
const Main = lazy(() => import('../pages/MainPage'));
const Search = lazy(() => import('../pages/SearchPage'));
const Detail = lazy(() => import('../pages/DetailPage'));

const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <IndexPage />
      </Suspense>
    ),
  },
  {
    path: 'main',
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: 'search',
    element: (
      <Suspense fallback={Loading}>
        <Search />
      </Suspense>
    ),
  },
  {
    path: '/:id',
    element: (
      <Suspense fallback={Loading}>
        <Detail />
      </Suspense>
    ),
  },
]);

export default root;
