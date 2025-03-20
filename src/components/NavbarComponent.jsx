import { useState } from "react";

const NavbarComponent = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return(<>
    <nav className="bg-black/25 sm:bg-transparent sm:absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:ring-2 active:text-white focus:ring-white focus:outline-hidden focus:ring-inset"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-4xl text-white">
            <i className="bi bi-cup-hot-fill"></i>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block me-4">
                <div className="flex space-x-4">
                <a href="#home" className="px-3 py-2 text-balance font-light duration-100 ease-in text-white hover:md:translate-y-1">Home</a>
                <a href="#about" className="hover:md:translate-y-1 duration-100 ease-in px-3 py-2 text-balance font-light text-white">About</a>
                <a href="#contact" className="hover:md:translate-y-1 duration-100 ease-in px-3 py-2 text-balance font-light text-white">Contact</a>
                </div>
            </div>
            <button type="button" className="relative rounded-full cursor-pointer p-1 text-gray-300 active:text-white hover:text-white duration-100 ease-in-out focus:outline-hidden ">
                <span className="sr-only">Search</span>
                <i className="bi bi-search text-xl"></i>
            </button>
            <div className="relative ml-3">
                <div>
                    <button className="relative rounded-full cursor-pointer p-1 text-gray-300 active:text-white hover:text-white duration-100 ease-in-out focus:outline-hidden " onClick={() => setUserMenuOpen(!userMenuOpen)}>
                        <span className="sr-only">Open user menu</span>
                        <i className="bi bi-chat-dots-fill text-xl"></i>
                    </button>
                </div>
                {userMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" id="user-menu" aria-labelledby="user-menu-button" tabIndex="-1">
                    <a href="#" className="block px-4 py-2 text-sm  text-gray-700 hover:underline underline-offset-4 active:underline" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-4 active:underline" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-4 active:underline" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="space-y-1 sm:hidden px-2 pt-2 pb-3">
          <a href="#home" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:text-white">Home</a>
          <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:text-white">About</a>
          <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:text-white">Contact</a>
        </div>
      )}
    </nav>
    </>)
   }
   
   export default NavbarComponent