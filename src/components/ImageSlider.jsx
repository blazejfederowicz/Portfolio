import React,{ useEffect, useRef, useState } from "react";
import {motion, useMotionValue} from 'motion/react';
import image1 from '../assets/the_calm_corner.png'
import image2 from '../assets/the_calm_corner.png'
import image3 from '../assets/fireworks.jpg'
import { delay } from "motion";
import { Reveal } from "./Reveal";

const DRAG_BUFFER = 80

export const ImageSlider =()=>{
    const [positionIndexes, setPositionIndexes]= useState(0);
    const [position, setPosition] = useState([])
    const [dragging, setDragging] = useState(false);
    const [translateX, setTranslateX] = useState('0px')
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [delay, setDelay] = useState(false)
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
        {
            img:image1, 
            href:'https://the-calm-corner.onrender.com/',
            title:"The Calm Corner",
            stack:"Bootstrap Node.Js Express.Js JavaScript EJS",
            desc:"Showcase your creativity by creating and sharing blogs. Choose from a variety of designs, preview before publishing, and easily edit or delete your posts as needed."
        },
        {
            img:image2,
            href:'#',
            title:'',
            stack:'',
            desc:""
        },
        {
            img:image3,
            href:'#',
            title:'',
            stack:'',
            desc:""
        }
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
            : `${positionIndexes===1?(carouselWidth / 2) - (imageWidth / 2):positionIndexes===0?0:(carouselWidth ) - (imageWidth)}px`;

            setTranslateX(newTranslateX);

    },[windowSize, positionIndexes])

    const variants = {
        center: {x:0,scale:1, zIndex:  1000, cursor:'pointer', filter:'none'},
        right: {x:"98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
        right1: {x:"186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left1: {x:"-186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left: {x:"-98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
    }

    return(
        <div ref={carouselRef} className=" w-full flex flex-col items-center relative overflow-hidden min-[1630px]:overflow-visible">
            <motion.div 
                className="relative w-full h-[20em] md:h-[30em] cursor-grab active:cursor-grabbing flex items-start justify-start mb-10 md:mb-20"
                drag="x"
                dragConstraints={{left:0,right:0}}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    x:dragX
                }}
                animate={{translateX:translateX}}
                transition={{
                    type:'spring',
                    mass:"3",
                    stiffness:"400",
                    damping:"50",
                }}
            >
           { images.map((e,i)=>(
                <motion.div
                    key={i}
                    ref={i === positionIndexes?imageRef:null}
                    onClick={()=>handleClick(i)}
                    style={{background:`url(${e.img})`,backgroundPosition:'center',backgroundSize:"cover"}}
                    variants={windowSize>639&&variants}
                    initial="center"
                    animate={windowSize<640?{scale:0.90}:position[i]}
                    onMouseEnter={()=>setDelay(true)}
                    onMouseLeave={()=>setDelay(false)}
                    className="rounded-xl group sm:absolute aspect-video sm:aspect-auto shrink-0 sm:shrink w-full sm:w-[15em] md:w-[20em] h-[20em] md:h-[30em] active:cursor-grabbing"
                    transition={{duration:0.5}}
                >
                <a href={e.href} className={`w-full h-full overflow-hidden duration-500 ease-in-out bg-gradient-to-t rounded-xl from-transparent to-70% to-black scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 justify-center flex-col p-10 ${position[i]==='center'?'flex':'hidden'}`}>
                    <span className={`group-hover:text-white group-active:text-white text-transparent ${delay?'delay-0 duration-200':'delay-300 duration-500'}  font-bold mb-1 text-lg`}>{e.title}</span>
                    <span className={`group-hover:opacity-100 group-active:opacity-100 opacity-0 bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text text-sm tracking-tight text-transparent mb-2 transition-opacity ${delay?'delay-0 duration-200':'delay-500 duration-500'}`}>{e.stack}</span>
                    <span className={`group-hover:text-blue-200 group-active:text-blue-200 text-transparent ${!delay?'delay-400 duration-500':'delay-0 duration-200'} text-base`}>{e.desc}</span>
                </a>
                <div className="pointer-events-none absolute inset-px rounded-xl ring-1 shadow-sm ring-black/5"></div>
                </motion.div>
           ))}
           </motion.div>
           <Reveal>
           <div className="mx-auto flex gap-2 p-1">
            {
                images.map((e,i)=>(
                    
                        <div key={i} className="w-4 h-4 bg-neutral-500 rounded-full">
                            <div onClick={()=> handleClick(i)} className={`h-full w-full rounded-full ${positionIndexes===i?' bg-indigo-500  scale-105':'cursor-pointer'}`}></div>
                        </div>
                    
                ))
            }
           </div>
           </Reveal>
        </div>
    )
}
