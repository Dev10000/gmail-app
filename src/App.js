import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Login from './components/Login';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import { selectSendMessageIsOpen } from "./features/mailSlice"
import { login, selectUser } from "./features/userSlice"
import { auth } from './utils/firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        console.log("Testiiiiii!!!", user)
        dispatch(
          login({
            displayName: user.displayName,
            email:user.email,
            photoUrl: user.photoURL,
          })
        )
      }
    })
  }, [dispatch])

  return (
    <Router>
      {!user ? (
        <Login />
        ) : ( 
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />}>
              </Route>

              <Route path="/" element={<EmailList />}>
              </Route>
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
