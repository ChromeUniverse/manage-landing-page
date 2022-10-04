import React, { useState } from 'react'
import validator from 'validator';
import Button from './Button';

// social media link icon component
function LinkIcon({ platform }) {
  return (
    <a href="#">
      <img
        src={`images/icon-${platform}.svg`}
        className="h-8 link-icon"
        alt=""
      />
    </a>
  );
}

// Main Footer component
function Footer() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [prompt, setPrompt] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (email && validator.isEmail(email)) {
      console.log('Success! Please check your inbox.');
      setError('')
      setPrompt('Success! Please check your inbox.');
    } else {      
      console.log('Please insert a valid email.');
      setError('Please insert a valid email.')
      setPrompt('');
    }
  }

  return (
    <footer className="bg-veryDarkBlue">
      {/* <!-- Flex container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">

        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* <!-- Copyright --> */}
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Right Reserved.
          </div>

          {/* <!-- Logo --> */}
          <div>
            <img src="images/logo-white.svg" alt="" />
          </div>
          {/* <!-- Social links container --> */}
          <div className="flex justify-center space-x-4">
            <LinkIcon platform="facebook" />
            <LinkIcon platform="youtube" />
            <LinkIcon platform="twitter" />
            <LinkIcon platform="pinterest" />
            <LinkIcon platform="instagram" />
          </div>
        </div>

        {/* <!-- List container --> */}
        <div className="flex justify-between md:space-x-0 lg:space-x-16 xl:space-x-64">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- Input container --> */}
        <div className="flex flex-col justify-between">
          <form onSubmit={submitHandler}>
            <div className="flex space-x-3">
              <input
                value={email}
                onChange={handleChange}
                type="email"
                className={`
                  flex-1 px-4 rounded-full focus:outline-none border-2 border-solid
                  ${!validator.isEmail(email) && email ? 'text-brightRed border-brightRed' : ''}
                `}
                placeholder="Updates in your inbox"                
              />
              <Button text="Go"/>
            </div>
          </form>

          {/* Error message */}
          {error && (
            <p className='text-brightRed'>{error}</p>
          )}

          {/* Prompt message */}
          {prompt && (
            <p className='text-green-600'>{prompt}</p>
          )}

          {/* <!-- Copyright --> */}
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer