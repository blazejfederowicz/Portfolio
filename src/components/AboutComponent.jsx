import { useRef, useState, useEffect } from "react"
import PercentageAnimation from "../utils/PercentageAnimation";
import { Reveal } from "../utils/Reveal";

const AboutComponent = ()=>{
    const [frontend, setFrontend] = useState(true);
    const [backend, setBackend] = useState(false);
    const backendRef = useRef(null)
    const frontendRef = useRef(null)

    const handleFrontend = ()=>{
        return setBackend(false),setFrontend(true)
    }
    const handleBackend = ()=>{
        return setBackend(true),setFrontend(false)
    } 

    

 return(<>
    <section className="pt-1 projects-gradient" id="about">
        <div className="container xl:px-10 mx-auto">
            <div className="flex flex-1 sm:block md:flex flex-col-reverse sm:flex-row-reverse md:justify-end md:items-center">
              <div className="overflow-hidden w-full sm:w-auto md:w-full sm:float-end md:float-none sm:-ms-64 md:-ms-0 sm:mt-32 md:mt-0 " style={{ shapeOutside: `inset(10px 0px 10px 0px)` }}>
                <div className="grid grid-cols-3 w-[500px] gap-10 grid-rows-1 mt-10 sm:mt-0 lg:ms-5 px-5 justify-self-end md:justify-self-start">
                  <div className="lg:pt-64 lg:order-none sm:pt-64 pt-32 sm:order-none md:order-1 md:pt-32">
                  <Reveal>
                    <img src="src/assets/guitar.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="guitar"/>
                  </Reveal>
                  </div>
                  <div className="sm:pt-32 md:pb-3">
                    <Reveal>
                        <img src="src/assets/laptop.jpg" className="mb-[2.5em] rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="laptop"/>
                    </Reveal>
                    <Reveal>
                        <img src="src/assets/plane.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="plane"/>
                    </Reveal>
                  </div>
                  <div className="pt-32 sm:pt-0 md:pt-3">
                  <Reveal>
                    <img src="src/assets/man.jpg" className="mb-[2.5em] rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="man"/>
                  </Reveal>
                  <Reveal>
                    <img src="src/assets/fireworks.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="fireworks"/>
                  </Reveal>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[2em] sm:mt-0">
                <div className="wraper max-w-[30em] px-5 md:ms-auto md:me-auto lg:me-10 ">
                  <Reveal>
                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl text-zinc-800 tracking-tight"><span className="font-bold">About</span> Me</h1>
                        <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px]  bg-blue-800/60"></div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-2 max-w-[50px] bg-blue-800/60"></div>
                    </div>
                  </Reveal>
                  <Reveal>
                     <p className="text-sm sm:text-base text-gray-600 lg:text-lg font-medium">I completed secondary school with a vocational qualification as an Information Technology Technician. I am passionate about building web applications that offer smooth and intuitive user experiences. Outside of coding, I enjoy playing guitar, and to unwind, I hit the gym.</p>
                  </Reveal>
                </div>
              </div>
            </div>
        </div>
    </section>
    <section className="container px-6 xl:max-w-5xl lg:px-0 mt-[5em] sm:mt-[35em] mx-auto md:mt-20 min-h-[400px]">
        <div className="grid md:grid-cols-2">
            <div className=" order-3 md:order-1">
                <div className="flex justify-between content-center mb-5">
                    <Reveal>
                    <div ref={frontendRef} className={frontend?'':'cursor-pointer group'} onClick={handleFrontend}>
                        <h1 className={`font-semibold duration-150 ease-in-out ${frontend?'text-gray-900':'text-gray-700 hover:md:text-gray-800 active:text-gray-900'} text-2xl`}>Front-end</h1>
                        <div className={`h-2 bg-amber-600 duration-250 ease-out ${frontend? 'mx-auto w-[5em]':' w-0 group-hover:md:w-[100%] group-active::w-[100%]'} rounded-tl-4xl rounded-br-4xl`}></div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div ref={backendRef} className={backend?'':'cursor-pointer group'} onClick={handleBackend}>
                        <h1 className={`font-semibold text-2xl duration-150 ease-in-out ${backend?'text-gray-900':'text-gray-700 hover:md:text-gray-800 active:text-gray-900'} `}>Back-end</h1>
                        <div className={`h-2 bg-amber-600 duration-250 ease-out ${backend? 'mx-auto w-[5em]':' w-0 group-hover:md:w-[100%] group-active::w-[100%]'} rounded-tl-4xl rounded-br-4xl`}></div>
                    </div>
                    </Reveal>
                </div>
            </div>
            <div className="col-start-1 w-full order-5 mb-10 md:mb-0 md:order-1">
                <div className="mb-5">
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">{backend? 'Node.JS': 'HTML'}</h4>
                        </Reveal>
                        <h4 className="font-bold">
                            <Reveal>
                            <PercentageAnimation first={52} second={96} duration={600} rerender={[frontend,backend]} />
                            </Reveal>
                        </h4>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                        <div className={`bg-blue-600 duration-600 ease-out ${backend?'w-[52%]':'w-[96%]'} h-[100%] rounded-2xl`}></div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">{backend? 'Laravel': 'CSS'}</h4>
                        </Reveal>
                        <h4 className="font-bold">
                            <Reveal>
                            <PercentageAnimation first={31} second={89} duration={600} rerender={[frontend,backend]} />
                            </Reveal>
                        </h4>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                        <div className={`bg-blue-600 duration-600 ease-out ${backend?'w-[31%]':'w-[89%]'} h-[100%] rounded-2xl`}></div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">{backend? 'MySQL': 'JS / JQuery'}</h4>
                        </Reveal>
                        <h4 className="font-bold">
                            <Reveal>
                            <PercentageAnimation first={49} second={75} duration={600} rerender={[frontend,backend]} />
                            </Reveal>
                        </h4>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                        <div className={`bg-blue-600 duration-600 ease-out ${backend?'w-[49%]':'w-[75%]'} h-[100%] rounded-2xl`}></div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">{backend? 'EJS': 'React.JS'}</h4>
                        </Reveal>
                        <h4 className="font-bold">
                            <Reveal>
                            <PercentageAnimation first={84} second={67} duration={400} rerender={[frontend,backend]} />
                            </Reveal>
                        </h4>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                        <div className={`bg-blue-600 duration-600 ease-out ${backend?'w-[84%]':'w-[67%]'} h-[100%] rounded-2xl`}></div>
                    </div>
                </div>
                <div className={`duration-500 relative ${backend?'ease-out':'ease-in'}  ${frontend?'max-h-40':'max-h-0'} overflow-hidden`}>
                    <div className="mb-5">
                        <div className="flex justify-between content-center px-1">
                            <Reveal>
                            <h4 className="font-bold">Vue.JS</h4>
                            </Reveal>
                            <Reveal>
                            <h4 className="font-bold">49%</h4>
                            </Reveal>
                        </div>
                        <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                            <div className={`bg-blue-600 duration-600 ease-out w-[49%] h-[100%] rounded-2xl`}></div>
                        </div>
                    </div>
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">Bootstrap</h4>
                        </Reveal>
                        <Reveal>
                        <h4 className="font-bold">Tailwind</h4>
                        </Reveal>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-cyan-500">
                        <div className="bg-purple-700 w-[60%] h-[100%] rounded-2xl"></div>
                    </div>
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">60%</h4>
                        </Reveal>
                        <Reveal>
                        <h4 className="font-bold">40%</h4>
                        </Reveal>
                    </div>
                <div className={`absolute bottom-0 w-full transition-transform ${frontend?'translate-y-[5em] delay-[430ms] ease-in':'translate-y-[0em] duration-500 ease-out'} left-0 bg-gradient-to-t h-[5em] from-gray-50 to-transparent `}></div>

                </div>
            </div>
            <div className="flex flex-col ms-auto me-auto md:me-0 w-full sm:w-[20em] mt-0 mb-20 md:my-0 order-2 md:order-1">
                <div className=" border-b-1 border-b-gray-300 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Birthday :</span> 25th January 2004</p>
                    </Reveal>
                </div>
                
                <div className=" border-b-1 border-b-gray-300 mt-3 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Age : </span> 
                        {
                            new Date().getMonth()<1 && new Date().getDay()<25?(new Date().getFullYear()-2004)-1:new Date().getFullYear()-2004
                        }
                    </p>
                    </Reveal>
                </div>
                <div className=" border-b-1 border-b-gray-300 mt-3 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Email : </span><a href="mailto:blazejfederowicz@gmail.com" className="hover:md:ms-4 hover:md:text-blue-950 active:text-blue-950 ease-out duration-150 ">blazejfederowicz@gmail.com</a></p>
                    </Reveal>
                </div>
                <div className=" border-b-1 border-b-gray-300 mt-3 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Location : </span>Poland</p>
                    </Reveal>
                </div>
                <div className=" border-b-1 border-b-gray-300 mt-3 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Languages : </span>Polish, English</p>
                    </Reveal>
                </div>
                <div className=" border-b-1 border-b-gray-300 mt-3 pb-3">
                    <Reveal>
                    <p className=" text-gray-700"><span className="font-bold">Freelance : </span>Available</p>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
 </>)
}

export default AboutComponent