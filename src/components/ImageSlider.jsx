import React,{ useEffect, useState } from "react";
import {motion, useMotionValue} from 'framer-motion';
import image1 from '../assets/laptop.jpg'
import image2 from '../assets/fireworks.jpg'
import image3 from '../assets/fireworks.jpg'
import { filter } from "framer-motion/client";

const DRAG_BUFFER = 50

export const ImageSlider =()=>{
    const [positionIndexes, setPositionIndexes]= useState(0);
    const [position, setPosition] = useState([])
    const [dragging, setDragging] = useState(false);
    const dragX = useMotionValue(0);

    const handleClick = (i)=>{
        setPositionIndexes(i)
    }
    
    const handleDragStart= ()=>{
        setDragging(true)
    }

    const handleDragEnd= ()=>{
        setDragging(false)
        const x = dragX.get()

        if(x <= -DRAG_BUFFER && positionIndexes< images.length-1){
            setPositionIndexes(prev=> prev+1)
        }else if(x>=DRAG_BUFFER && positionIndexes>0){
            setPositionIndexes(prev=> prev-1)
        }
    }

    const images=[
        {img:image1, href:'https://the-calm-corner.onrender.com/'},
        {img:image2,href:'#'},
        {img:image3,href:'#'}
    ]

    const positions = ()=>{
        if(positionIndexes===1){
            setPosition(['left','center','right'])
        } else if(positionIndexes ===2){
            setPosition(['left1','left','center'])
        } else{
            setPosition(['center','right','right1'])
        }
    }

    useEffect(()=>{
        positions()
    },[positionIndexes])
    

    const variants = {
        center: {x:0,scale:1, zIndex:  1000, cursor:'pointer', filter:'none'},
        right: {x:"98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
        right1: {x:"186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left1: {x:"-186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left: {x:"-98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
    }

    return(
        <div className=" w-full flex items-center relative overflow-hidden h-[800px]">
            <motion.div 
                className="relative w-full h-[30em] cursor-grab active:cursor-grabbing flex items-start justify-start mb-20"
                drag="x"
                dragConstraints={{left:0,right:0}}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    x:dragX
                }}
                animate={{translateX:`${positionIndexes*23}%`}}
            >
           { images.map((e,i)=>(
                <motion.div
                    key={i}
                    variants={variants}
                    onClick={()=>handleClick(i)}
                    style={{background:`url(${e.img})`,backgroundPosition:'center',backgroundSize:"cover"}}
                    initial="center"
                    animate={position[i]}
                    className="rounded-2xl absolute w-[20em] h-[30em] active:cursor-grabbing"
                    transition={{duration:0.5}}
                >
                <a href={e.href} className={`w-full h-full ${position[i]==='center'?'block':''}`}></a>
                </motion.div>
           ))}
           </motion.div>
        </div>
    )
}