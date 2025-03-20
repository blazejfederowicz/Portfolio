
const AboutComponent = ()=>{
 return(<>
    <section className="pt-1 projects-gradient" id="about">
        <div className="container xl:px-10 mx-auto">
            <div className="flex flex-1 sm:block md:flex flex-col-reverse sm:flex-row-reverse md:justify-end md:items-center">
              <div className="overflow-hidden w-full sm:w-auto md:w-full sm:float-end md:float-none sm:-ms-64 md:-ms-0 sm:mt-32 md:mt-0 " style={{ shapeOutside: `inset(10px 0px 10px 0px)` }}>
                <div className="grid grid-cols-3 w-[500px] gap-10 grid-rows-1 mt-10 sm:mt-0 lg:ms-5 px-5 justify-self-end md:justify-self-start">
                  <div className="lg:pt-64 lg:order-none sm:pt-64 pt-32 sm:order-none md:order-1 md:pt-32">
                    <img src="src/assets/guitar.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="guitar"/>
                  </div>
                  <div className="sm:pt-32 md:pb-3">
                    <img src="src/assets/laptop.jpg" className="mb-[2.5em] rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="laptop"/>
                    <img src="src/assets/plane.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="plane"/>
                  </div>
                  <div className="pt-32 sm:pt-0 md:pt-3">
                    <img src="src/assets/man.jpg" className="mb-[2.5em] rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="man"/>
                    <img src="src/assets/fireworks.jpg" className="rounded-xl transition-transform duration-200 ease-in-out hover:md:scale-110" alt="fireworks"/>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[2em] sm:mt-0">
                <div className="wraper max-w-[30em] px-5 md:ms-auto md:me-auto lg:me-10 ">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl text-zinc-800 font-bold mb-10">About Me</h1>
                  <p className="text-sm sm:text-base text-gray-600 lg:text-lg font-medium">I finished secondary school with IT specialist degree. I am pationate about building web applications that users can feel comfortable interacting with. I love playing guitar and to release stress I work out at the gym.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
 </>)
}

export default AboutComponent