import FeatureComponent from "./FeatureComponent"
import { ImageSlider } from "./ImageSlider"
import { Reveal } from "./Reveal"

const ProjectsComponent = ()=>{
    return(<>
        <div className=" py-10 md:pt-32 flex justify-center items-center">
            <Reveal>
            <p className="mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-5xl">
                My projects
                </p>
            </Reveal>
        </div>
        <section className="w-full  relative bg-blue-50 border-t-[1px] border-t-zinc-400 ">
            <div className="absolute w-full h-full top-[-1em] left-0 z-50 pointer-events-none">
                <div className="absolute w-full bottom-[-1em] bg-gradient-to-t h-[7em] from-gray-50 to-transparent"></div>
                <div className="absolute h-[calc(100%+2em)] left-0 bg-gradient-to-r w-[20em] from-gray-50 to-transparent"></div>
                <div className="absolute h-[calc(100%+2em)] right-0 bg-gradient-to-l w-[20em] from-gray-50 to-transparent"></div>
                <div className="absolute w-full bottom-[-1em] bg-gradient-to-t h-[7em] from-gray-50 to-transparent"></div>
            </div>
            <ImageSlider/>
        </section>
    </>)
   }
   
   export default ProjectsComponent