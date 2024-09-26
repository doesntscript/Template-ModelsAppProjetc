import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,
 setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar os dados para o servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold">Create Account</h1>

      <h2 className="text-gray-400 mb-3">Sign up and manage by your point of view!</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl"
        >
          Submit
        </button>
      </form>

      <p className="text-center text-gray-400 mt-4">
        Already have an account? <Link to="/" className="text-blue-500 hover:text-blue-700"> Sign in</Link>
      </p>
    </div>
  );
}


export default SignUp;