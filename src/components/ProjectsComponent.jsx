import FeatureComponent from "./FeatureComponent"
import { ImageSlider } from "./ImageSlider"
import { Reveal } from "./Reveal"

const ProjectsComponent = ()=>{
    return(<>
        {/* <div className="  flex justify-center items-center">
            <Reveal>
            <p className="mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-5xl">
                My projects
                </p>
            </Reveal>
        </div> */}
        <section className="w-full mt-10 md:mt-32 relative bg-blue-50 border-t-[1px] border-t-zinc-400 ">
            <div className="absolute w-full h-full top-[-1em] left-0 md:z-20 pointer-events-none">
                <div className="absolute w-full bottom-[-1em] bg-gradient-to-t h-[7em] from-gray-50 to-transparent"></div>
                <div className="absolute h-[calc(100%+2em)] left-0 bg-gradient-to-r w-[20em] from-gray-50 to-transparent"></div>
                <div className="absolute h-[calc(100%+2em)] right-0 bg-gradient-to-l w-[20em] from-gray-50 to-transparent"></div>
                <div className="absolute w-full bottom-[-1em] bg-gradient-to-t h-[7em] from-gray-50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full p-10 md:p-20">
            <div className="w-full flex items-start justify-center flex-col z-50 relative">
                <div className="max-w-[35em] w-full mb-10 md:mb-20">
                    <Reveal>
                        <p className="text-balance text-4xl text-zinc-800 font-semibold mb-10">Fullstack | React, Vue, Node.js, Laravel</p>
                    </Reveal>
                    <Reveal>
                        <p className="text-sm sm:text-base text-gray-600 lg:text-lg font-medium">Front-End & UI Development: Proficient in HTML, CSS, and JavaScript, with expertise in styling using Tailwind CSS and Bootstrap. Experienced in building dynamic web applications using the React framework and have a foundational understanding of Vue.js. 
                        Back-End Development: Skilled in Node.js, utilizing EJS as a templating engine. Also familiar with Laravel, allowing for flexible backend development across different ecosystems.</p>
                    </Reveal>
                </div>
            </div>
            <ImageSlider/>

            </div>
        </section>
    </>)
   }
   
   export default ProjectsComponent