// import { RouterProvider } from 'react-router-dom';
import './App.css';
// import root from './router/root';
import { app } from './firebaseApp';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Router from './components/Router';
import Loader from './components/shared/Loader';
function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  // return <RouterProvider router={root} />;
  return (
    <>{init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}</>
  );
}

export default App;
