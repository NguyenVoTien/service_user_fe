import React, { useState } from 'react';

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive(!isActive);

  return (
    <div className={`flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-blue-300`}>
      <div className={`relative w-full max-w-md min-h-[480px] bg-white rounded-[150px] shadow-lg overflow-hidden ${isActive ? 'active' : ''}`}>
        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full flex items-center justify-center transition-transform duration-600 ${isActive ? 'translate-x-full z-10 opacity-0' : 'translate-x-0 z-10 opacity-100'}`}>
          <form className="w-full p-10 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-6">Create Account</h1>
            <div className="flex mb-4">
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span className="text-sm mb-4">or use email for registration</span>
            <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-200 rounded-md border-none outline-none text-sm" />
            <input type="text" placeholder="Email" className="w-full p-2 mb-4 bg-gray-200 rounded-md border-none outline-none text-sm" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-200 rounded-md border-none outline-none text-sm" />
            <button type="submit" className="bg-red-600 text-white py-2 px-8 rounded-md font-semibold uppercase">Sign Up</button>
          </form>
        </div>
        {/* Sign In Form */}
        <div className={`absolute top-0 h-full flex items-center justify-center transition-transform duration-600 ${isActive ? 'translate-x-0 z-10 opacity-100' : '-translate-x-full z-10 opacity-0'}`}>
          <form className="w-full p-10 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-6">Sign In</h1>
            <div className="flex mb-4">
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="mx-1 p-2 border border-gray-300 rounded-full flex items-center justify-center w-10 h-10">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span className="text-sm mb-4">or use email password</span>
            <input type="text" placeholder="Email" className="w-full p-2 mb-4 bg-gray-200 rounded-md border-none outline-none text-sm" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-200 rounded-md border-none outline-none text-sm" />
            <a href="#" className="text-blue-600 mb-4">Forgot password</a>
            <button type="submit" className="bg-red-600 text-white py-2 px-8 rounded-md font-semibold uppercase">Sign In</button>
          </form>
        </div>
        {/* Toggle Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-full transition-transform duration-600 ${isActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className={`absolute w-2/4 h-full bg-gradient-to-r from-red-500 to-red-700 transition-transform duration-600 ${isActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col text-center transition-transform duration-600 ${isActive ? 'translate-x-0' : '-translate-x-full'}`}>
              <h1 className="text-2xl font-bold">Welcome User!</h1>
              <p>If you already have an account</p>
              <button onClick={handleToggle} className="bg-transparent border border-white text-white py-2 px-8 rounded-md font-semibold uppercase mt-4">Sign In</button>
            </div>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col text-center transition-transform duration-600 ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
              <h1 className="text-2xl font-bold">Hello, User!</h1>
              <p>If you don't have an account</p>
              <button onClick={handleToggle} className="bg-transparent border border-white text-white py-2 px-8 rounded-md font-semibold uppercase mt-4">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
