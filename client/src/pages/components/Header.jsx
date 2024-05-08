import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultProfileImg from "../../assets/images/profile.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="bg-slate-400 p-4 flex justify-between items-center">
      
      <img src="https://www.leopardcatamaransbrokerage.com/sites/leopard/files/images/travelopia-logo.jpg" alt="Logo" className="h-16 w-auto mr-2" />



        <ul className="flex flex-wrap items-center justify-end gap-2 text-white font-semibold list-none">
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/search`}>Packages</Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/about`}>About</Link>
          </li>
          <li className="w-10 h-10 flex items-center justify-center">
            {currentUser ? (
              <Link
                to={`/profile/${
                  currentUser.user_role === 1 ? "admin" : "user"
                }`}
              >
                <img
                  src={currentUser.avatar || defaultProfileImg}
                  alt={currentUser.username}
                  className="border w-10 h-10 border-black rounded-[50%]"
                />
              </Link>
            ) : (
              <Link to={`/login`}>Login</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
