import React,{ useEffect, useRef, useState } from "react";
import {motion, useMotionValue} from 'motion/react';
import image1 from '../assets/laptop.jpg'
import image2 from '../assets/fireworks.jpg'
import image3 from '../assets/fireworks.jpg'

const DRAG_BUFFER = 80

export const ImageSlider =()=>{
    const [positionIndexes, setPositionIndexes]= useState(0);
    const [position, setPosition] = useState([])
    const [dragging, setDragging] = useState(false);
    const [translateX, setTranslateX] = useState('0px')
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const carouselRef = useRef(null);
    const imageRef = useRef(null);
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

    useEffect(()=>{
        const handleResize = ()=>{
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)

        return()=>{
         window.removeEventListener('resize', handleResize)
        }
    },[])

    useEffect(()=>{
        const carouselWidth = carouselRef.current?.offsetWidth || windowSize;
        const imageWidth = imageRef.current?.offsetWidth || carouselWidth / images.length;

        const newTranslateX =
            windowSize < 640
            ? `-${positionIndexes}00%`
            : `${(carouselWidth / 2) - (imageWidth / 2) - (positionIndexes * imageWidth)}px`;

            setTranslateX(newTranslateX);

    },[windowSize])
    

    const variants = {
        center: {x:0,scale:1, zIndex:  1000, cursor:'pointer', filter:'none'},
        right: {x:"98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
        right1: {x:"186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left1: {x:"-186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left: {x:"-98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
    }

    return(
        <div ref={carouselRef} className=" w-full flex items-center relative overflow-hidden">
            <motion.div 
                className="relative w-full h-[20em] md:h-[30em] cursor-grab active:cursor-grabbing flex items-start justify-start mb-20"
                drag="x"
                dragConstraints={{left:0,right:0}}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    x:dragX
                }}
                animate={{translateX:translateX}}
            >
           { images.map((e,i)=>(
                <motion.div
                    key={i}
                    ref={i === positionIndexes?imageRef:null}
                    onClick={()=>handleClick(i)}
                    style={{background:`url(${e.img})`,backgroundPosition:'center',backgroundSize:"cover"}}
                    variants={windowSize>639&&variants}
                    initial="center"
                    animate={windowSize<640?{scale:0.9}:position[i]}
                    className="rounded-2xl sm:absolute aspect-video sm:aspect-auto shrink-0 sm:shrink w-full sm:w-[15em] md:w-[20em] h-[20em] md:h-[30em] active:cursor-grabbing"
                    transition={{duration:0.5}}
                >
                <a href={e.href} className={`w-full h-full ${position[i]==='center'?'block':''}`}></a>
                </motion.div>
           ))}
           </motion.div>
        </div>
    )
}