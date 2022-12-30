import { useState } from 'react';
import { logo } from '../assets';
import { BsNewspaper } from 'react-icons/bs';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menus = [
    { title: '分類1', src: './page1' },
    { title: '分類2', src: './page2' },
    { title: '分類3', src: './page3', gap: true },
    { title: '分類4 ', src: './page4' },
    { title: '分類5', src: './page5' },
  ];

  return (
    <div className='flex'>
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-primary h-screen p-5  pt-8 relative duration-300`}
      >
        <MdNavigateBefore
          size='24'
          className={`absolute cursor-pointer -right-5 top-9 w-7 
         ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex justify-start items-center'>
          <img src={logo} className='cursor-pointer' />
        </div>
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <BsNewspaper />
              <span
                className={`${!open && 'hidden'} origin-left duration-200`}
                onClick={() => navigate(`./${Menu.src}`)}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
