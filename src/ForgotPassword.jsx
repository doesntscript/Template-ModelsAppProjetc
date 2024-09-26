
import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar um email de recuperação de senha
    console.log('Email:', email);
  };

  return (
    <>
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold mb-4">Forgot Password?</h1>
      <p className="text-gray-400 text-lg mb-8">No worries, we'll send you reset instructions.</p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-transparent  border-0 border-b border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl"
        >
          Reset Password
        </button>

        <Link to="/" className="text-gray-300 py-2 px-4 rounded flex items-center justify-center focus:outline-none ">
        <IoArrowBackSharp size={18} /> 
        Back to log in
        </Link>
      </form>
    </div>
    
    </>
  );
}

export default ForgotPassword;