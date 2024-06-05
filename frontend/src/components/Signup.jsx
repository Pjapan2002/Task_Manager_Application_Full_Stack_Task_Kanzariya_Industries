import React, { useState } from 'react';

import axios from 'axios';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSignupPost = async(e) => {

    e.preventDefault();
    const user = await axios({
      method: 'post',
      url: 'api/v1/user/signup',
      data: {
        "fullname": fullName,
        "email": email,
        "password": password
      }
    })

    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container mx-auto max-w-sm px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
      <form onSubmit={ handleSignupPost }> {/* Prevent default form submission */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={ handleChange }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={ handleChange }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={ handleChange }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <input
          type="button"
          value="Sign Up"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleSignupPost}
        />
      </form>
    </div>
  );
};

export default Signup;
