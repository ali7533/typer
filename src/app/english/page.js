'use client'

import React, { useState, useEffect } from 'react';
import './style.css'
import Time from '../components/comman/Time/Time';
import TextBox from '../components/comman/TextBox/TextBox';
import Keyboard from '../components/comman/keyBoard/KeyBoard';
import data from './data';

export default function TypingBox() {
    const [currentDataN, setCurrentDataN] = useState(Math.floor(data.data.length*Math.random()));
    const [initialDataN, setInitialDataN] = useState(data.data[currentDataN]);
    const [typedValue, setTypedValue] = useState([]);
    const [currentIndexOfTyping, setCurrentIndexOfTyping] = useState(0);
    const [isTyping, setIsTyping] = useState('notStarted');
    const [mistake,setMistake]=useState(0)
    const [time,setTime]=useState(Date.now())
    const [accuracy,setAccuracy]=useState(0)
    const [LetterPerMinute,setLetterPerMinute]=useState(0)
    const [rest,setRest]=useState(true)
    const [isBackSpace, setIsBackSpace]=useState(false)
    const [englishKeyBoard, setEnglishKeyboard] = useState([
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-first' }, key: ['`', '~'], value: ['`', '~'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-one' }, key: ['1', '!'], value: ['1', '!'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-two' }, key: ['2', '@'], value: ['2', '@'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-three' }, key: ['3', '#'], value: ['3', '#'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-four' }, key: ['4', '$'], value: ['4', '$'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-five' }, key: ['5', '%'], value: ['5', '%'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-six' }, key: ['6', '^'], value: ['6', '^'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-seven' }, key: ['7', '&'], value: ['7', '&'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-eight' }, key: ['8', '*'], value: ['8', '*'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-nine' }, key: ['9', '('], value: ['9', '('] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-zero' }, key: ['0', ')'], value: ['0', ')'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-minus' }, key: ['-', '_'], value: ['-', '_'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-equalto' }, key: ['=', '+'], value: ['=', '+'] },
        { className: 'keyCommon-g keyOneLetter-g backspace', style: { gridArea: 'ff-backspace' }, key: ['Backspace', ''], value: ['', ''] },
      
        { className: 'keyCommon-g keyOneLetter-g tab', style: { gridArea: 'ff-tab' }, key: ['tab', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-q' }, key: ['q', 'Q'], value: ['q', 'Q'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-w' }, key: ['w', 'W'], value: ['w', 'W'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-e' }, key: ['e', 'E'], value: ['e', 'E'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-r' }, key: ['r', 'R'], value: ['r', 'R'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-t' }, key: ['t', 'T'], value: ['t', 'T'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-y' }, key: ['y', 'Y'], value: ['y', 'Y'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-u' }, key: ['u', 'U'], value: ['u', 'U'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-i' }, key: ['i', 'I'], value: ['i', 'I'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-o' }, key: ['o', 'O'], value: ['o', 'O'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-p' }, key: ['p', 'P'], value: ['p', 'P'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketOpen' }, key: ['[', '{'], value: ['[', '{'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketClose' }, key: [']', '}'], value: [']', '}'] },
        { className: 'keyCommon-g key backslash', style: { gridArea: 'ff-backslash' }, key: ["\\", '|'], value: ["\\", '|'] },
      
        { className: 'keyCommon-g keyOneLetter-g capslock', style: { gridArea: 'ff-caps' }, key: ['caps', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-a' }, key: ['a', 'A'], value: ['a', 'A'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-s' }, key: ['s', 'S'], value: ['s', 'S'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-d' }, key: ['d', 'D'], value: ['d', 'D'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-f' }, key: ['f', 'F'], value: ['f', 'F'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-g' }, key: ['g', 'G'], value: ['g', 'G'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-h' }, key: ['h', 'H'], value: ['h', 'H'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-j' }, key: ['j', 'J'], value: ['j', 'J'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-k' }, key: ['k', 'K'], value: ['k', 'K'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-l' }, key: ['l', 'L'], value: ['l', 'L'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-semiColon' }, key: [';', ':'], value: [';', ':'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-quote' }, key: ["'", '"'], value: ["'", '"'] },
        { className: 'keyCommon-g keyOneLetter-g enter1', style: { gridArea: 'ff-enter' }, key: ['enter', ''], value: ['', ''] },
      
        { className: 'keyCommon-g shift-g leftshift', style: { gridArea: 'ff-leftShift' }, key: ['shift', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-z' }, key: ['z', 'Z'], value: ['z', 'Z'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-x' }, key: ['x', 'X'], value: ['x', 'X'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-c' }, key: ['c', 'C'], value: ['c', 'C'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-v' }, key: ['v', 'V'], value: ['v', 'V'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-b' }, key: ['b', 'B'], value: ['b', 'B'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-n' }, key: ['n', 'N'], value: ['n', 'N'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-m' }, key: ['m', 'M'], value: ['m', 'M'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-coma' }, key: [',', '<'], value: [',', '<'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-dot' }, key: ['.', '>'], value: ['.', '>'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-slesh' }, key:['/', '?'], value:['/', '?'] },
        {className:'keyCommon-g shift-g rightshift', style:{gridArea:'ff-rightShift'}, key: ['shift', ''], value:['', ''] },
    
        {className:'keyCommon-g keyOneLetter-g leftctrl', style:{gridArea:'ff-ctrl'}, key: ['ctrl', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt'}, key: ['alt', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command'}, key: ['command', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetter-g space', style:{gridArea:'ff-space'}, key: ['space', ''], value:[' ', ''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command-2'}, key: ['command', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt-2'}, key: ['alt', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-ctrl-2'}, key: ['ctrl', ''], value:['', ''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-fn'}, key: ['', ''], value:['', ''] },

    ])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Backspace') {
                setIsBackSpace(true)
                setTypedValue(prev => prev.slice(0, currentIndexOfTyping - 1));
                setCurrentIndexOfTyping((prev) =>{
                    if(prev > 0) return prev - 1
                    else return 0
                });
            } else if (e.key === 'Delete') {
                setTypedValue((prev) => prev.filter((_, index) => index !== currentIndexOfTyping));
            } else if (/[a-zA-Z0-9 ,.'-]/g.test(e.key)&& e.key.length === 1) {
                setTypedValue((prev) => [...prev, e.key]);
                setCurrentIndexOfTyping((prev) => prev + 1);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    useEffect(() => {
        if(isTyping!=='done'){
            const totalNumberOfLetters = initialDataN.data.length
            const totalNumberOfTypedLetters = typedValue.length
            let mistakeAtNow=0
            const timeTaken=( Date.now()-time)/60000
            let letterPerMinute=Math.round(totalNumberOfTypedLetters/timeTaken)
            typedValue.forEach((v, i) => {
                if(v!== initialDataN.data[i]){
                    mistakeAtNow++
                }
            })
            let cvAccuracy=Math.round((totalNumberOfTypedLetters-mistakeAtNow)/totalNumberOfTypedLetters*100)
            setAccuracy(cvAccuracy)
            setLetterPerMinute(letterPerMinute)
        }
        if(typedValue.length==initialDataN.data.length){
            setIsTyping('done')
        }
        if(typedValue[typedValue.length-1]!==initialDataN.data[typedValue.length-1]&& isBackSpace===false){

            setMistake(prev=>prev+1)
        }
        if(isBackSpace===true){
            setIsBackSpace(false)
        }
        if(isTyping==='notStarted'&& typedValue.length>0){setIsTyping('started');console.log('started')}

    },[typedValue])

    useEffect(() => {
        if(rest){
            setCurrentDataN(Math.floor(data.data.length*Math.random()));
            setInitialDataN(data.data[currentDataN]);
            setTypedValue([]);
            setCurrentIndexOfTyping(0);
            setIsTyping('notStarted');
            setMistake(0)
            setTime(Date.now())
            setAccuracy(0)
            setLetterPerMinute(0)
            setRest(false)
        }
    },[rest])

    return (
        <div className='grid grid-cols-12 gap-4 '>
            <div id='textArea' className='col-span-12 bg-slate-200 p-5 shadow-xl rounded-md'>
                <TextBox initialDataN={initialDataN} currentIndexOfTyping={currentIndexOfTyping} typedValue={typedValue} />
            </div>
            <hr style={{height:'2px',borderWidth:0,color:'gray',backgroundColor:'gray'}} className='col-span-12'/>
            <Keyboard keyboard={englishKeyBoard} className='col-span-12' keyboardType='english' initialDataN={initialDataN} typedValue={typedValue}
                currentIndexOfTyping={currentIndexOfTyping}
            />

            <div className='col-span-6 grid grid-cols-2 justify-stretch bg-[rgba(156,196,253,0.8)] p-5 shadow-xl rounded-md'>
                <h1 className='text-center col-span-2 text-2xl font-bold '>Result</h1>
                <div className='grid grid-cols-2'>
                    <div>accuracy: </div>
                    <div>{accuracy?accuracy:0}%</div>
                    <div>WPM: </div>
                    <div>{Math.round(LetterPerMinute/4.7)}</div>
                    <div>time: </div>
                    <Time isTyping={isTyping}/>
                    <div>mistake:</div>
                    <div>{mistake}</div>
                </div>

            </div>
            <div onClick={()=>{setRest(true)}} className=' col-span-6 p-5 shadow-xl rounded-md bg-blue-800 justify-center justify-items-center text-6xl content-center'>
                <div>try again</div>
            </div>
        </div>
    );
}
//last