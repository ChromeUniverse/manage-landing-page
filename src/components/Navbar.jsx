import React, { useState } from 'react'
import Button from './Button'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState();

  function handleClick() {
    setMenuOpen(oldMenuOpen => !oldMenuOpen);
  }

  return (
    <nav className="relative container mx-auto p-6">
      {/* <!-- Flex container --> */}
      <div className="flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div className="pt-2">
          <img src="/images/logo.svg" alt="" />
        </div>

        {/* <!-- Menu items --> */}
        <div className="hidden md:flex md:space-x-2 lg:space-x-6 xl:space-x-16">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/* <!-- Button --> */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          onClick={handleClick}
          className={`
            block hamburger md:hidden focus:outline-none
            ${menuOpen ? 'open' : ''}
          `}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}

      <div className="md:hidden">
        <div
          id="menu"
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            absolute flex-col items-center self-end py-8 mt-10 space-y-6
            font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md
          `}
        >
          <a href="">Pricing</a>
          <a href="">Product</a>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar