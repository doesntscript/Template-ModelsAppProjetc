

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar os dados para o servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center">

        <h1 className="text-2xl font-bold text-center text-white mb-2">Log in</h1>
        <p className="text-gray-400 text-center mb-6">
          Welcome back! Please enter your details
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
            <input
              id="username"
              type="email"
              placeholder="Username"
              className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"  

            >
             
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-sm mb-3 text-center">
            <p className="text-gray-400 text-base">
              Forgot Password?{' '}
              <Link to="/ForgotPassword" className="hover:underline ">
                Reset now
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl"
          >
             Submit
          </button>
          <p className="mt-6 text-center text-gray-400">
            Don't have an account yet?{' '}
            <Link to="/SignUp" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
  
  );
}

export default LoginForm;