import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';
import AuthService from './services/authService';
import Register from './components/Register';




function App() {

  const [currentUser, setCurrentUser] = useState(undefined);


  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <Link to={"/"} className="navbar-brand">
      JWT
    </Link>
    <div className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={"/home"} className="nav-link">
          Home
        </Link>
      </li>

      {currentUser && (
        <li className="nav-item">
          <Link to={"/user"} className="nav-link">
            User
          </Link>
        </li>
      )}
    </div>

    {currentUser ? (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/profile"} className="nav-link">
            {currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={logOut}>
            LogOut
          </a>
        </li>
      </div>
    ) : (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
            Sign Up
          </Link>
        </li>
      </div>
    )}
  </nav>
    <div className="container mt-3">
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component = {Profile}/>
        <Route exact path="/register" component={Register} />
      <Login/>
      </Switch>
    </div>
    </>
  );
}

export default App;
