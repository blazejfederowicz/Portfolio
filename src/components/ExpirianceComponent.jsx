import { Reveal } from "../utils/Reveal";

const ExpirianceComponent = ()=>{
    return(
        <>
            <section id="expiriance" className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-32">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-lg lg:max-w-5xl mx-auto">
                    <div className="space-y-6">
                        
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl lg:text-4xl text-gray-200"><span className="font-bold">Professional</span> Expiriance</h2>
                                <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px] bg-blue-300/30"></div>
                                <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] mb-6 lg:mb-10 w-full mt-2 max-w-[50px] bg-blue-300/30"></div>
                            </Reveal>
                            <Reveal>
                                <div className="rounded-lg border border-zinc-800/80 border-r-4 bg-indigo-900/15 text-gray-200 shadow-sm relative overflow-hidden">
                                    <div className="p-6">
                                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                            <h4 className="font-medium text-lg">Computer Technician Intern</h4>
                                            <span className="text-sm text-indigo-100/60">May 2022 - June 2022</span>
                                        </div>
                                        <p className="text-indigo-100/60 mb-4">Compus, Kościerzyna</p>
                                        <ul className="space-y-2 relative list-disc ml-5 text-sm">
                                            <div className="absolute top-5 scale-y-110 left-0 bottom-0 bg-indigo-100/60 w-[1px] -translate-x-[13.9px] z-10"></div>
                                            <li className="opacity-80">Diagnosing and replacing damaged or malfunctioning LCD/LED panels in monitors.</li>
                                            <li className="opacity-80">Installing, configuring, and troubleshooting printers, including both wired and wireless models.</li>
                                            <li className="opacity-80">Servicing, Repair, and Operational Management of Computer Hardware and Peripherals</li>
                                            <li className="opacity-80">Documentation & Reporting.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                                    <div className="p-6">
                                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                            <h4 className="font-medium text-lg">Game Dev Intern</h4>
                                            <span className="text-sm text-indigo-100/60">Oct 2023 - Dec 2023</span>
                                        </div>
                                        <p className="text-indigo-100/60 mb-4">Art of Code</p>
                                        <ul className="space-y-2 relative list-disc ml-5 text-sm">
                                            <div className="absolute top-4 scale-y-110 left-0 bottom-0 bg-indigo-100/60 w-[1px] -translate-x-[13.9px] z-10"></div>
                                            <li className="opacity-80">Creating game mechanics, designing levels, implementing character controls, adding animations, and optimizing performance. </li>
                                            <li className="opacity-80">Developing realistic physics interactions using Godot’s built-in physics engine, with GDScript.</li>
                                            <li className="opacity-80">Crafting Graphic Design from Scratch</li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                    </div>
                    <div className="space-y-6">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-200">Education</h2>
                            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px] bg-blue-300/30"></div>
                            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-2 mb-6 lg:mb-10 max-w-[50px] bg-blue-300/30"></div>
                        </Reveal>
                        <Reveal custom="overflow-hidden">
                            <div className="rounded-lg border border-zinc-800/80 border-r-4 bg-indigo-900/15 text-gray-200 shadow-sm relative overflow-hidden">
                                <div className="p-6">
                                    <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                        <h4 className="font-medium text-lg">IT Technician</h4>
                                        <span className="text-sm text-indigo-100/60">Sep 2019 - May 2024</span>
                                    </div>
                                    <p className="text-indigo-100/60 ">PZS 2 in Kościerzyna</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal custom="overflow-hidden">
                            <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                            <div className="p-6">
                                <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                    <h4 className="font-medium text-lg">Certifications</h4>
                                    <span className="text-sm text-indigo-100/60">Aug 2023 - Oct 2023</span>
                                </div>
                                <p className="text-indigo-100/60 mb-4">FreeCodeCamp.com</p>
                                <ul className="space-y-2 relative list-disc ml-5 text-sm">
                                    <div className="absolute top-3 scale-y-110 left-0 bottom-0 bg-indigo-100/60 w-[1px] -translate-x-[13.9px] z-10"></div>
                                    <li className="opacity-80 hover:opacity-100 active:opacity-100 transition-opacity">
                                        <a href="https://www.freecodecamp.org/certification/Fabiio/responsive-web-design" target="_blank" rel="noopener noreferrer" className="me-2">Responsive Web Design Certificate</a>
                                        <i className="bi bi-box-arrow-up-right"></i>
                                        </li>
                                    <li className="opacity-80 hover:opacity-100 active:opacity-100 transition-opacity">
                                        <a href="https://www.freecodecamp.org/certification/Fabiio/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className="me-2">Javascript Algorithms And Data Structures Certificate</a>
                                        <i className="bi bi-box-arrow-up-right"></i>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </Reveal>
                        <Reveal custom="overflow-hidden">
                            <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                                <div className="p-6">
                                    <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                        <h4 className="font-medium text-lg">Full Stack BootCamp</h4>
                                        <span className="text-sm text-indigo-100/60">Feb 2025 - Current</span>
                                    </div>
                                    <p className="text-indigo-100/60">AppBrewery Web</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ExpirianceComponent;