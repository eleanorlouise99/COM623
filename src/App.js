import React, { useState, useEffect } from 'react';
import Fire from './Fire';
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Hero from "./Hero";
import Event from "./Event";
import Society from "./Society";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    Fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
            case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
                case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
        }
      })
  };

  const handleSignup = () => {
    clearErrors();
    Fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
            case "auth/invalid-email":
                setEmailError(err.message);
                break;
                case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
        }
      })
  };

  const handleLogout = () => {
    Fire.auth().signOut();
  };

  const authListener = () => {
    Fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <Router>
        {user ? (
          <Hero handleLogout={handleLogout}/>
        ) : (
          <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        )} 

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event" component={Event} />
          <Route path="/society" component={Society} />
          
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
