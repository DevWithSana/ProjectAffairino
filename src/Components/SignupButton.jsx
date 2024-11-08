// SignupButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupButton() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/login'); // Redirige vers la page de connexion
  };

  return (
    <button
      className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"
      onClick={handleSignUp}
    >
      Sign up
    </button>
  );
}

export default SignupButton;
