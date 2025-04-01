import { useState, useEffect, useRef } from "react";
import { Reveal } from "../utils/Reveal";

const NavbarComponent = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [animation, setAnimation] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const navRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
      if (menuOpen) {
        setShowMenu(true);
      } else {
        setTimeout(() => setShowMenu(false), 300);
      }

    }, [menuOpen]);

    useEffect(()=>{
      const handleClickOutside=(e,ref,func)=>{
        if(ref.current && !ref.current.contains(e.target)){
          func(false)
        }
      }

      document.addEventListener("mousedown",(e)=> handleClickOutside(e, navRef, setMenuOpen));
      document.addEventListener("mousedown",(e)=> handleClickOutside(e, popupRef, setUserMenuOpen));  
      
      return()=>{
        document.removeEventListener("mousedown",(e)=> handleClickOutside(e, navRef, setMenuOpen));
        document.removeEventListener("mousedown",(e)=> handleClickOutside(e, popupRef, setUserMenuOpen));  
      }
    },[])

    const handleAnimation= ()=>{
      setAnimation(true);

      setTimeout(()=>setAnimation(false),[1000])
    }

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(<>
    <nav ref={navRef} className={`fixed top-0 inset-x-0 z-[1000] duration-300 ${
        isScrolled || menuOpen ? "bg-neutral-800/35 backdrop-blur-xs shadow-lg " : "bg-transparent "
      } ${isScrolled?"py-4":"py-6"} ${menuOpen ? "max-h-[400px]" : "max-h-[80px]"} ${showMenu && 'overflow-hidden'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
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
            <div className="flex shrink-0 items-center text-4xl text-white/90 hover:text-white active:text-white cursor-pointer">
              <a href="#home" onClick={handleAnimation} className={` duration-200 ease-in ${animation?'scale-110 animate-spin text-white':'scale-100'}`}>
              <Reveal>
                <i className="bi bi-cup-hot-fill"></i>
              </Reveal>
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block me-4">
                <div className="flex space-x-4">
                <a href="#home" className="px-0 py-2 text-balance font-extralight duration-100 ease-in text-white hover:md:translate-y-1 hover:md:font-normal active:font-normal">
                  <Reveal>
                    Home
                  </Reveal>
                  </a>
                <a href="#about" className="hover:md:translate-y-1 duration-100 ease-in px-0 py-2 text-balance font-extralight text-white hover:md:font-normal active:font-normal">
                  <Reveal>
                    About
                  </Reveal>
                </a>
                <a href="#projects" className="hover:md:translate-y-1 duration-100 ease-in px-0 py-2 text-balance font-extralight text-white hover:md:font-normal active:font-normal">
                  <Reveal>
                    Projects
                  </Reveal>
                </a>
                <a href="#expiriance" className="hover:md:translate-y-1 duration-100 ease-in px-0 py-2 text-balance font-extralight text-white hover:md:font-normal active:font-normal">
                  <Reveal>
                    Expertise
                  </Reveal>
                </a>
                <a href="#contact" className="hover:md:translate-y-1 duration-100 ease-in px-0 py-2 text-balance font-extralight text-white hover:md:font-normal active:font-normal">
                  <Reveal>
                    Contact
                  </Reveal>
                </a>
                </div>
            </div>
            <div ref={popupRef} className="relative ml-3">
                <div className="ms-2">
                    <button className="relative rounded-full cursor-pointer p-1 text-gray-300 active:text-white hover:text-white duration-100 ease-in-out focus:outline-hidden " onClick={() => setUserMenuOpen(!userMenuOpen)}>
                        <Reveal>
                          <span className="sr-only">Open user menu</span>
                          <i className="bi bi-three-dots text-lg"></i>
                        </Reveal>
                    </button>
                </div>
                <div  className={`transition-opacity duration-200 ease-in ${userMenuOpen?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white pt-1 pb-2 ring-1 shadow-lg ring-black/5 focus:outline-hidden`}role="menu" aria-orientation="vertical" id="user-menu" aria-labelledby="user-menu-button" tabIndex="-1">
                    <a href="https://github.com/blazejfederowicz" target="_blank" className="flex justify-between relative group mx-4 py-1 my-1 text-sm  text-gray-700 hover:text-blue-950 active:text-blue-900" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                      <span className="absolute -z-10"><i className="bi bi-github"></i> Blazej</span>
                      <span className="group-hover:ms-16 group-active:ms-16 ms-4 me-2 duration-150 ease-in-out bg-white">
                        <span className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity delay-75 duration-300 ease-out">/</span> Github
                      </span>
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/błażej-federowicz-6a25b0320/" target="_blank" className="flex relative justify-between group mx-4 py-1 text-sm text-gray-700 hover:text-blue-950 active:text-blue-900" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                      <span className="absolute -z-10"><i className="bi bi-linkedin"></i> Blazej</span>
                      <span className="group-hover:ms-16 group-active:ms-16 duration-150 ease-in-out ms-4 me-2 bg-white">
                        <span className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity delay-75 duration-300 ease-out">/</span> Linkedin
                      </span>
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="space-y-1 sm:hidden px-2 pt-2 pb-3">
          <a href="#home" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
            <Reveal>
              Home
            </Reveal>
          </a>
          <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
            <Reveal>
              About
            </Reveal>
          </a>
          <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
            <Reveal>
              Projects
            </Reveal>
          </a>
          <a href="#expiriance" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
            <Reveal>
              Expertise
            </Reveal>
          </a>
          <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
            <Reveal>
              Contact
            </Reveal>
          </a>
        </div>
      )}
    </nav>
    </>)
   }
   
   export default NavbarComponent