import React, { useEffect } from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './reducers/routes';
import Header from './components/Header';
import Loader from './components/Loader';
import Alert from './components/Alert';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import PrivateWrapper from './components/PrivateWrapper';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ height: 60 }}></div>
        <Loader />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={
                route.private ? (
                  <PrivateWrapper alter="404 error not accessible">
                    <route.component />
                  </PrivateWrapper>
                ) : (
                  <route.component />
                )
              }
              // render={(props) => <route.component {...props} />}
            ></Route>
          ))}

          <Route path="/auth/login" exact element={<Login />}></Route>
          <Route path="/auth/signup" exact element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Alert />
    </div>
  );
}
