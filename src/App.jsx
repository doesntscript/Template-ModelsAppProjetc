import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/SignUp" element={ <SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes> 

    </Router>
  );
}

export default App;