import NavbarComponent from "./NavbarComponent"
import { Reveal } from "./Reveal"

const HeaderComponent = ()=>{
    return(<>
    <section id="home" className=" custom-container bg-neutral-800 w-full 2xl:h-lvh relative">
       <NavbarComponent/>
       <div className="gradient hidden sm:block absolute w-[75em] h-[39em] -top-[25em] -right-[35em]"></div>
        <div className="flex w-full flex-col h-full">
            <div className="h-[64px]"></div>
            <div className="container p-10 md:pt-20 sm:grow mx-auto">
                <div className="grid  xl:grid-cols-2 h-full content-stretch xl:translate-y-16">
                    <div className="text-white flex h-full sm:justify-center items-center flex-col mb-10 sm:mb-8">
                        <div className="xl:w-full">
                            <Reveal>
                                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-base bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent text-animate">Full-stack Dev</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-8xl lg:text-9xl sm:text-7xl text-5xl font-bold md:mb-6">Federowicz</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-8xl lg:text-9xl sm:text-7xl text-5xl font-bold md:mb-6">Błażej</h1>
                            </Reveal>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center xl:justify-end">
                        <Reveal>
                            <div className="bg-[url(/src/assets/man.jpg)] bg-cover rounded-full border-2 border-amber-600 bg-no-repeat bg-center w-[8em] h-[8em] sm:w-[13em] sm:h-[13em] md:w-[18em] md:h-[18em] lg:h-[25em] lg:w-[25em]">
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