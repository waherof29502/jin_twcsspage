import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='flex flex-1 justify-between items-center w-[92%]'>
      <div>
        <img
          src='https://cdn-icons-png.flaticon.com/512/5968/5968204.png'
          alt='logo'
          className='w-16'
        />
      </div>
      <div
        className={`md:static absolute md:min-h-fit min-h-[40vh] bg-white left-0 ${
          open ? 'top-20' : 'top-[-100%]'
        } md:w-auto w-full flex items-center justify-center px-5`}
      >
        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-semibold font-xl '>
          <li>
            <a href='#' className='hover:text-gray-500'>
              Products
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-500'>
              Solution
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-500'>
              Resource
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-500'>
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
          Sign in
        </button>
        {!open ? (
          <FiMenu
            className='font-3xl cursor-pointer md:hidden'
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FiX
            className='font-3xl cursor-pointer md:hidden'
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </nav>
  );
};

export default SearchBar;
