import { useState, useEffect, useRef } from "react";

export default function PercentageAnimation({first, second, duration,rerender}){
    const [percentage, setPercentage] = useState(first)
    const intervalId = useRef(null);
    const hasMounted = useRef(false)
    let calcDuration = Math.max(duration/Math.abs(first-second),1)

    useEffect(()=>{
        const handleProcentageAnim = (firstNum,secondNum)=>{
            let min = Math.min(firstNum, secondNum)
            let max = Math.max(firstNum, secondNum)
            
            if( secondNum > percentage ){
                let i = min;
                intervalId.current=setInterval(()=>{
                    i++;
                    if(i>max){
                        clearInterval(intervalId.current)
                    }else{
                        setPercentage(i)
                    }
                },calcDuration);
            } else{
                let i = max;
                intervalId.current=setInterval(()=>{
                    i--;
                    if(i<min){
                        clearInterval(intervalId.current)
                    }else{
                        setPercentage(i)
                    }
                },calcDuration);
            }
            
           
        }

        if(hasMounted.current){
            handleProcentageAnim(first,second);
        }else{
            hasMounted.current= true
        }

        return()=> clearInterval(intervalId.current)
    },[first, second, duration, ...rerender])

    return (
        <>
            {`${percentage}%`}
        </>
    )
}