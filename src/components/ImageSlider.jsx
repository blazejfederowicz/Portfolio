import React,{ useState } from "react";
import {motion} from 'framer-motion';
import image1 from '../assets/laptop.jpg'
import image2 from '../assets/fireworks.jpg'
import image3 from '../assets/fireworks.jpg'

export const ImageSlider =()=>{
    const [positionIndexes, setPositionIndexes]= useState([0,1,2])

    const images=[
        image1,
        image2,
        image3
    ]

    const positions = [
        "center",
        "right",
        "right1"
    ]

    const variants = {
        center: {x:0,scale:1, zIndex:  5},
        right: {x:"98%",scale:0.9, zIndex:  3},
        right1: {x:"186%",scale:0.8, zIndex:  1},
    }

    return(
        <div className="relative w-full flex items-center justify-center h-[800px]">
           { images.map((e,i)=>(
             <motion.img
                key={i}
                variants={variants}
                src={e}
                alt={`Slide ${i}`}
                initial="center"
                animate={positions[positionIndexes[i]]}
                className="rounded-2xl absolute w-[20em]"
                transition={{duration:0.5}}
            />
           ))}
        </div>
    )
}