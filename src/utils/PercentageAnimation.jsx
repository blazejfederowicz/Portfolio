import { useState, useEffect, useRef } from "react";

export default function PercentageAnimation({first, second, duration,rerender}){
    const [percentage, setPercentage] = useState(second)
    const [target, setTarget] = useState(first)
    const intervalId = useRef(null);
    const hasMounted = useRef(false)
    let calcDuration = Math.max(duration/Math.abs(first-second),1)

    useEffect(()=>{
        const handleProcentageAnim = (firstNum, secondNum) => {
            if (intervalId.current) clearInterval(intervalId.current);
          
            let min = Math.min(secondNum,firstNum)
            let max = Math.max(secondNum,firstNum)
            const newTarget = target ===second?first:second;
            const shouldIncrement = target < newTarget;
            setTarget(newTarget)

            if(min-max===0) return
          
            if (shouldIncrement) {
              let i = min;
              intervalId.current = setInterval(() => {
                i++;
                if (i > max) {
                  clearInterval(intervalId.current);
                } else {
                  setPercentage(i);
                }
              }, calcDuration);
            } else {
              let i = max;
              intervalId.current = setInterval(() => {
                i--;
                if (i < min) {
                  clearInterval(intervalId.current);
                } else {
                  setPercentage(i);
                }
              }, calcDuration);
            }
          };

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