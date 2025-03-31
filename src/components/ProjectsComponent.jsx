import FeatureComponent from './FeatureComponent'
import {motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ImageSlider } from "./ImageSlider"
import { Reveal } from "../utils/Reveal"

const ProjectsComponent=()=>{
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start','end end']
    })

    const bgColor = useTransform(scrollYProgress,[0,1],["rgb(240, 249, 255)", "rgba(0,0,0,0)"])
    const textColor = useTransform(scrollYProgress,[0,0.5,1],['rgb(39, 39, 42)', 'rgb(255, 165, 0)', 'rgb(244, 244, 245)'])
    const descriptionColor = useTransform(scrollYProgress,[0,0.5,1],['rgb(74, 85, 101)', 'rgb(0, 255, 255)', 'rgb(243, 244, 246)'])
    

    return( 
        <motion.div ref={ref} className='' style={{background:bgColor}}>
            <section className="w-full min-h-[150vh] relative  border-t-[1px] border-t-zinc-400 ">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1900px] px-10 pt-10 md:pt-20 md:px-20">
            <div className="w-full flex items-start justify-center flex-col z-50 pe-10 relative">
                <div className="max-w-[35em] w-full mb-10 md:mb-20">
                    <Reveal>
                        <motion.p className="text-balance text-4xl font-semibold mb-10" style={{color:textColor}}>Fullstack | React, Vue, Node.js, Laravel</motion.p>
                    </Reveal>
                    <Reveal>
                        <motion.p className="text-sm sm:text-base lg:text-lg font-medium" style={{color:descriptionColor}}>Front-End & UI Development: Proficient in HTML, CSS, and JavaScript, with expertise in styling using Tailwind CSS and Bootstrap. Experienced in building dynamic web applications using the React framework and have a foundational understanding of Vue.js. 
                        Back-End Development: Skilled in Node.js, utilizing EJS as a templating engine. Also familiar with Laravel, allowing for flexible backend development across different ecosystems.</motion.p>
                    </Reveal>
                </div>
            </div>
            <div className="relative">
                <ImageSlider/>
            </div>
            </div>
            <FeatureComponent scroll={scrollYProgress}/>
            </section>
        </motion.div>
        )
}

export default ProjectsComponent