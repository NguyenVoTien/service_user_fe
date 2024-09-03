import Img from '@/components/Img';
import Input from '@/components/Input';
import Text from '@/components/Text';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [searchInput, setSearchInput] = React.useState("");

  const handlesetSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-6 py-4 bg-gray-50">
        <div className="container max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 flex-wrap md:flex-col">
            <NavLink to="/">
            <Text className="text-2xl font-bold text-gray-800">Exclusive</Text>
            </NavLink>
           
            <div className="flex items-center justify-between w-3/4 gap-8 md:w-full md:flex-col">
              <ul className="flex gap-10 md:gap-6 text-lg">
                <li>
                  <NavLink
                    to="/"
                    
                    className={({ isActive }) =>
                      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900 transition-colors'
                    }
                  >
                    <Text as="p">Home</Text>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900 transition-colors'
                    }
                  >
                    <Text as="p">Contact</Text>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900 transition-colors'
                    }
                  >
                    <Text as="p">About</Text>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900 transition-colors'
                    }
                  >
                    <Text as="p">Sign up</Text>
                  </NavLink>
                </li>
              </ul>
              <div className="flex items-center justify-center w-1/2 md:w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    name="search"
                    placeholder="What are you looking for?"
                    value={searchInput}
                    onChange={handlesetSearchInput}
                    className="text-sm h-[38px] w-full flex items-center justify-between bg-gray-100 rounded-full pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-[20px] h-[20px]"
                  />
                </div>
                <NavLink to="/favorites" className="ml-4">
                  <div className="icon-container text-gray-700 hover:text-gray-900 transition-colors">
                    <FontAwesomeIcon icon={faHeart} className="w-[24px] h-[24px]" />
                  </div>
                </NavLink>
                <NavLink to="/cart" className="ml-4">
                  <div className="icon-container text-gray-700 hover:text-gray-900 transition-colors">
                    <FontAwesomeIcon icon={faCartShopping} className="h-[32px] w-[32px]" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-px bg-gray-300" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
