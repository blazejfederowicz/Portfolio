import NavbarComponent from "./NavbarComponent"
import {motion} from 'motion/react'
import { Reveal } from "../utils/Reveal"
import { useRef, useState } from "react"

const HeaderComponent = ()=>{
    const downloadLink = useRef(null)
    const buttonRef = useRef(null)
    const [isBlurred, setIsBlurred] = useState(false);

    const handleDonwload = ()=>{
        if(downloadLink.current){
            if(buttonRef.current){
                setIsBlurred(true)
                setTimeout(()=>setIsBlurred(false),[400])
            }
            return downloadLink.current.click()
        }
        return;
    }

    return(<>
    <section id="home" className=" custom-container bg-neutral-800 w-full 2xl:h-lvh relative">
       <NavbarComponent/>
       <div className="gradient hidden sm:block absolute w-[75em] h-[39em] -top-[25em] -right-[35em]"></div>
        <div className="flex w-full flex-col h-full">
            <div className="h-[64px]"></div>
            <div className="container py-10 px-5 sm:p-10 md:pt-20 sm:grow mx-auto">
                <div className="grid lg:grid-cols-2 h-full w-full content-stretch xl:translate-y-16">
                    <div className="order-1 mt-4 lg:mt-0 lg:order-0 text-gray-100 flex h-full sm:justify-center items-center flex-col mb-10 sm:mb-8">
                        <div className="lg:w-full ">
                            <Reveal>
                                <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-base bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent text-animate">Web Developer</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-7xl xl:text-8xl sm:text-6xl text-4xl font-bold sm:mb-3 lg:mb-6 tracking-tighter">FEDEROWICZ</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-7xl xl:text-8xl sm:text-6xl text-4xl sm:mb-3 lg:mb-6 tracking-tighter">BŁAŻEJ</h1>
                            </Reveal>
                            <div className="w-full mt-4 lg:mt-0">
                                <motion.div
                                    className="inline-block"
                                    style={{transition:"filter 0.3s ease"}}
                                    animate={{
                                        filter: isBlurred? "blur(30px)": "blur(0px)"
                                    }}
                                >
                                    <button 
                                    ref={buttonRef} 
                                    onClick={handleDonwload} 
                                    className="md:p-4 sm:p-3 p-2 text-xs sm:text-base  leading-none cursor-pointer relative box-border bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 size-fit text-animate rounded-4xl transition-all duration-300 hover:brightness-125 active:brightness-125 ease-in-out">
                                        <span>Download resume</span>
                                        <div className="pointer-events-none absolute inset-px duration-150  rounded-4xl ring-1 shadow-sm ring-white/20"></div>
                                    </button>
                                </motion.div>
                                <a ref={downloadLink} href="/src/assets/en-CV-Blazej-Federowicz.pdf" download="CV_Blazej_Federowicz.pdf" className="hidden"></a>
                                <a href="#projects" className="relative group ms-1 sm:ms-2 md:p-4 sm:p-3 p-2 text-xs sm:text-base text-gray-100/70 transition-colors duration-150 ease-in-out hover:text-gray-100 active:text-gray-100 bg-black/50 rounded-4xl">
                                    <span className="me-2">View projects</span>
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    <div className="pointer-events-none absolute inset-px duration-150 ease-in-out rounded-4xl ring-1 group-hover:ring-white/40 group-active:ring-white/40 shadow-sm ring-white/20"></div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" hidden sm:flex items-center justify-center lg:justify-end">
                        <Reveal>
                            <div className="bg-[url(/src/assets/profile.jpg)] relative transition-shadow duration-200 ease-in hover:shadow-[-10px_20px_20px_rgba(249,116,22,0.3)] bg-cover rounded-2xl lg:rounded-full border-2 border-amber-600 bg-no-repea bg-[50%_20%] lg:bg-center w-[404px] md:w-[485px] h-[10em] md:h-[15em] lg:w-[18em] lg:h-[18em] xl:h-[25em] xl:w-[25em]">
                                <div className=" xl:scale-100 sm:scale-75 md:scale-100 lg:scale-75 md:-translate-11 lg:-translate-y-5 xl:-translate-7 sm:-translate-11 text-xl -rotate-10 flex justify-center items-center absolute px-4 py-3 shadow-[0px_0px_5px_#c084fc] shadow-green-400 border-2 rounded-4xl border-purple-400 text-purple-300 ">
                                    <div className="w-2 h-2 shadow-[0px_0px_5px_#c084fc] rounded-full bg-purple-400 me-2"> </div>
                                    <span>Avalible</span>
                                    </div>
                            </div>
                        </Reveal>
                    </div>
                    
                </div>
             </div>
             <img src="src\assets\wave.svg" className="block w-full -mb-1 "/>
        </div>
    </section>
    </>)
   }
   
   export default HeaderComponent