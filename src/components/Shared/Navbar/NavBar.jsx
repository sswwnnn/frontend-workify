import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, userLogout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <nav className={`w-full fixed z-50 top-0 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-sm bg-black/50 shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 text-white font-bold text-lg"
        >
          <img src={Logo} alt="Company Logo" className="h-12 w-12 rounded" />
          <span className="text-white font-bold text-xl">workify</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium transition-all duration-300"
                : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full transition-all duration-300"
            }
          >
            Contact Us
          </NavLink>
          
          {/* Dashboard link only visible when user is logged in */}
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium transition-all duration-300"
                  : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full transition-all duration-300"
              }
            >
              Dashboard
            </NavLink>
          )}
          
          {/* Conditional User Actions */}
          {!user ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium transition-all duration-300"
                  : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full transition-all duration-300"
              }
            >
              Login
            </NavLink>
          ) : (
           
           <Menu>
  <MenuHandler>
    {user.photoURL ? (
      <Avatar
        src={user.photoURL}
        alt="User"
        className="cursor-pointer"
        referrerPolicy="no-referrer"
      />
    ) : (
      <UserCircleIcon
        className="h-10 w-10 text-white cursor-pointer"
      />
    )}
  </MenuHandler>
  <MenuList className="bg-white rounded-md shadow-lg">
    <MenuItem
      onClick={handleLogout}
      className="text-primary text-center hover:bg-red-50"
    >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Menu>
            <MenuHandler>
              <button className="flex items-center p-2 rounded focus:outline-none">
                <Bars3Icon className="h-8 w-8 text-white" />
              </button>
            </MenuHandler>
            <MenuList className="lg:hidden flex flex-col p-4 gap-3 bg-[#334854] shadow-md">
              {/* Mobile menu items */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium mx-2 text-center transition-all duration-300"
                    : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full mx-2 transition-all duration-300"
                }
              >
                Contact Us
              </NavLink>

              {/* Dashboard link only visible when user is logged in */}
              {user && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium mx-2 text-center transition-all duration-300"
                      : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full mx-2 transition-all duration-300"
                  }
                >
                  Dashboard
                </NavLink>
              )}

              {/* Conditional User Actions */}
              {!user ? (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF5003] text-white px-4 py-2 rounded-full font-medium mx-2 text-center transition-all duration-300"
                      : "text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full mx-2 transition-all duration-300"
                  }
                >
                  Login
                </NavLink>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white font-medium hover:bg-[#FF5003] hover:text-white px-4 py-2 rounded-full mx-2 transition-all duration-300"
                >
                  Logout
                </button>
              )}
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;