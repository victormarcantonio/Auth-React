import React from "react";
import AuthService from '../services/authService';
import {useHistory} from 'react-router-dom';

const Profile = () => {

  const history = useHistory();

  const currentUser = AuthService.getCurrentUser();

  if(currentUser){

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.jwttoken.substring(0, 20)} ...{" "}
        {currentUser.jwttoken.substr(currentUser.jwttoken.length - 20)}
      </p>
    </div>
  )} else {
    history.push('/login');
    return null;
  };
};

export default Profile;