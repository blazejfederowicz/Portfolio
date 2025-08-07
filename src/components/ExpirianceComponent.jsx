import { Reveal } from "../utils/Reveal";

const ExpirianceComponent = ()=>{
    return(
        <>
            <section id="expiriance" className="container mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-lg lg:max-w-5xl mx-auto">
                    <div className="space-y-6 mb-10 lg:mb-0">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl lg:text-4xl text-gray-200"><span className="font-bold">Professional</span> Expiriance</h2>
                                <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px] bg-blue-300/30"></div>
                                <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] mb-6 lg:mb-10 w-full mt-2 max-w-[50px] bg-blue-300/30"></div>
                            </Reveal>
                            <Reveal>
                                <div className="rounded-lg border border-zinc-800/80 border-r-4 bg-indigo-900/15 text-gray-200 shadow-sm relative overflow-hidden">
                                    <div className="p-6">
                                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                            <h4 className="font-medium text-base sm:text-lg">Outlier (Freelance via RLFH)</h4>
                                            <span className="text-xs sm:text-sm text-indigo-100/60">May 2025 - Present</span>
                                        </div>
                                        <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">AI Training & Specialist
                                        </p>
                                        <ul className="space-y-2 pl-5 text-xs sm:text-sm list-disc  ">
                                            <li className="opacity-80">
                                                Reviewed and corrected AI-generated JavaScript code outputs.
                                            </li>
                                            <li className="opacity-80">
                                                Contributed to LLM fine-tuning through technical feedback and
                                                training data generation.
                                            </li>
                                            <li className="opacity-80">
                                                Ensured a 95%+ accuracy rate in evaluated outputs across
                                                various difficulty levels.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                                    <div className="p-6">
                                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                            <h4 className="font-medium text-base sm:text-lg">Computer Technician Intern</h4>
                                            <span className="text-xs sm:text-sm text-indigo-100/60">May 2022 - June 2022</span>
                                        </div>
                                        <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">Compus, Kościerzyna</p>
                                        <ul className="space-y-2 pl-5 text-xs sm:text-sm list-disc  ">
                                            <li className="opacity-80">
                                                Diagnosing and replacing damaged or malfunctioning LCD/LED panels in monitors.</li>
                                            <li className="opacity-80">
                                                Installing, configuring, and troubleshooting printers, including both wired and wireless models.</li>
                                            <li className="opacity-80">
                                                Servicing, Repair, and Operational Management of Computer Hardware and Peripherals</li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                                    <div className="p-6">
                                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                            <h4 className="font-medium text-base sm:text-lg">Game Dev Intern</h4>
                                            <span className="text-xs sm:text-sm text-indigo-100/60">Nov 2022 - Dec 2022</span>
                                        </div>
                                        <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">Art of Code</p>
                                        <ul className="space-y-2 relative list-disc ml-5 text-xs sm:text-sm">
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
                        <Reveal>
                            <div className="rounded-lg border border-zinc-800/80 border-r-4 bg-indigo-900/15 text-gray-200 shadow-sm relative overflow-hidden">
                                <div className="p-6">
                                    <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                        <h4 className="font-medium text-base sm:text-lg">Epam</h4>
                                        <span className="text-xs sm:text-sm text-indigo-100/60">Jun 2025 - Present</span>
                                    </div>
                                    <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">Trainee Front-End Developer
                                    </p>
                                    <ul className="space-y-2 pl-5 text-xs sm:text-sm list-disc  ">
                                        <li className="opacity-80">
                                            Built a scalable web application using React, TypeScript, Redux,
                                            and Axios, reducing load time by 35%.
                                        </li>
                                        <li className="opacity-80">
                                            Applied modular coding practices, improving code reuse by 40%
                                            across the app.
                                        </li>
                                        <li className="opacity-80">
                                            Participated in code reviews and version control with Git.
                                        </li>
                                        <li className="opacity-80">
                                            Practiced unit testing with Jest and React Testing Library.
                                        </li>
                                        <li className="opacity-80">
                                            Learned corporate-grade workflows through hands-on mentorship
                                            and real cycles
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal custom="overflow-hidden">
                            <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                                <div className="p-6">
                                    <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                        <h4 className="font-medium text-base sm:text-lg">IT Technician</h4>
                                        <span className="text-xs sm:text-sm text-indigo-100/60">Sep 2019 - May 2024</span>
                                    </div>
                                    <p className="text-indigo-100/60 text-xs sm:text-sm">PZS 2 in Kościerzyna</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal custom="overflow-hidden">
                            <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                            <div className="p-6">
                                <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                                    <h4 className="font-medium text-base sm:text-lg">Certifications</h4>
                                </div>
                                <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">FreeCodeCamp.com</p>
                                <ul className="space-y-2 relative list-disc ml-5 text-xs sm:text-sm">
                                    <li className="opacity-80 hover:opacity-100 active:opacity-100 transition-opacity">
                                        <a href="https://certificates.epam.com/certificates/1c7f0121-d4e7-4287-a1b9-7d73d9c4c559" target="_blank" rel="noopener noreferrer" className="me-2">JavaScript Specialization Certificate</a>
                                        <i className="bi bi-box-arrow-up-right"></i>
                                    </li>
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
                                        <h4 className="font-medium text-base sm:text-lg">Full Stack BootCamp</h4>
                                        <span className="text-xs sm:text-sm text-indigo-100/60">Feb 2025 - Current</span>
                                    </div>
                                    <p className="text-indigo-100/60 text-xs sm:text-sm">AppBrewery Web</p>
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