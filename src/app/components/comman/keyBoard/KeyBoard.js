import React, { useCallback, useEffect, useRef, useState } from 'react'
import './style.css'
function KeyBoard({keyboard,keyboardType,initialDataN,currentIndexOfTyping}) {
    let [isenglishKeyBoard,setIsEnglishKeyBoard]=useState(keyboardType=='english'?'englishValue':'')
    
    let [widthOfScreen,setWidthOfScreen]=useState(window.innerWidth)
    useEffect(()=>{
        addEventListener('keydown',(e)=>{
            e.preventDefault()
        })
        addEventListener('keyup',(e)=>{
            e.preventDefault()
        })
        addEventListener('keypress',(e)=>{
            e.preventDefault()
        })
    },[])
    return (<>
        {widthOfScreen>1000?
            <div className=' w-full  p-5 col-span-12'>
            <div className='keyboardContainer w-full  rounded-lg bg-slate-700 '>
                {keyboard.map((v,i)=>{
                    
                    if(v.key[0]==='shift'&&initialDataN.isShiftRequired[currentIndexOfTyping]){
                        return(<>
                            <div style={{}} className={`grid shiftActive-g grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md text m-2 `} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className='text-sm '>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className='text-sm '>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                        </>)
                    }else if(v.key[0]==='shift'){
                        return(<>
                            <div style={{}} className={`grid keyOneLetter-g grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                        </>)
                    }else if(' '===initialDataN.data[currentIndexOfTyping]&&v.value===' '){
                        return(
                            <div style={{}} className={`active-without-shift grid grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md p text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                    )
                    }else if(v.value[0]===' '&&initialDataN.data[currentIndexOfTyping]!==' '){
                        return(
                            <div style={{}} className={`grid grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md p text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{initialDataN.data[currentIndexOfTyping]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                    )
                    }else if(v.value[0]===initialDataN.data[currentIndexOfTyping]){
                        return(
                            <div style={{}} className={`active-without-shift grid grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md p text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                    )
                    }else if(v.value[1]===initialDataN.data[currentIndexOfTyping]){
                        return(
                            <div style={{}} className={`active-without-shift grid grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md p text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                        )
                    }else{
                        return(
                            <div style={{}} className={` grid grid-cols-2 text grid-rows-2 shadow-[2px_2px_5px_rgba(0,0,0,.7)] rounded-md p bg-slate-600 text m-2 ${v.className}`} key={i} >
                                <div style={{textTransform:'uppercase'}} className='row-span-2 flex justify-center content-center justify-self-stretch content-center text-sm '>{v.key[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[0]}</div>
                                <div style={{textTransform:'uppercase'}} className={`text-sm ${isenglishKeyBoard}`}>{v.value[1]==='none'?'':v.value[1]}</div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
        :''}

    </>)
}

export default KeyBoard