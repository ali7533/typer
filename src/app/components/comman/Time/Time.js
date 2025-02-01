import React, { useEffect,useState } from 'react'

function Time({isTyping}) {
  let interval;
  const [TimeSeconds,setTimeSeconds]=useState(0)
  useEffect(() => { let interval; // Declare interval here
    switch(isTyping) {
      case 'done': clearInterval(interval);
        break;
      case 'started': interval = setInterval(() => { setTimeSeconds(prev => prev + 1); }, 1000); 
        break; 
      case 'notStarted': setTimeSeconds(0); 
        break; 
      default:
        break;
      }
      // Cleanup function to clear interval 
      return () => clearInterval(interval);
  }, [isTyping]);
    
  return (
    <div>{Math.floor(TimeSeconds/60)}{TimeSeconds%60?":"+TimeSeconds%60:''}</div>
  )
}

export default Time