import { useState, useEffect, useRef, useCallback } from "react";

export default function PercentageAnimation({first, second, duration,rerender}){
    const [percentage, setPercentage] = useState(second)
    const [target, setTarget] = useState(second)
    const intervalId = useRef(null);
    const hasMounted = useRef(false)
    let calcDuration = Math.max(duration/Math.abs(first-second),1)


    const handleProcentageAnim = useCallback((firstNum, secondNum) => {
      if (intervalId.current) clearInterval(intervalId.current);
    
      let min = Math.min(secondNum,firstNum)
      let max = Math.max(secondNum,firstNum)
      const newTarget = target ===second?first:second;
      const shouldIncrement = target < newTarget;
      if (target !== newTarget) {
        setTarget(newTarget);
      }

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
    },[first, second, calcDuration, ...rerender]);


    useEffect(() => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }
    
      handleProcentageAnim(first, second);
    
      return () => clearInterval(intervalId.current);
    }, [handleProcentageAnim, first, second]);

    return (
        <>
            {`${percentage}%`}
        </>
    )
}