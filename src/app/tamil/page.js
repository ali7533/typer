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
    const [hindiKeyBoard, setHindiKeyboard] = useState([
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-first' }, key: ['`', '~'], value: ['்', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-one' }, key: ['1', '!'], value: ['௧', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-two' }, key: ['2', '@'], value: ['௨', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-three' }, key: ['3', '#'], value: ['௩', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-four' }, key: ['4', '$'], value: ['௪', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-five' }, key: ['5', '%'], value: ['௫', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-six' }, key: ['6', '^'], value: ['௬', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-seven' }, key: ['7', '&'], value: ['௭', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-eight' }, key: ['8', '*'], value: ['௮', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-nine' }, key: ['9', '('], value: ['௯', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-zero' }, key: ['0', ')'], value: ['௦', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-minus' }, key: ['-', '_'], value: ['-', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-equalto' }, key: ['=', '+'], value: ['ௌ', ''] },
        { className: 'keyCommon-g keyOneLetter-g backspace', style: { gridArea: 'ff-backspace' }, key: ['Backspace', ''], value: ['', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g tab', style: { gridArea: 'ff-tab' }, key: ['tab', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-q' }, key: ['q', 'Q'], value: ['ஃ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-w' }, key: ['w', 'W'], value: ['ஒ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-e' }, key: ['e', 'E'], value: ['ஓ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-r' }, key: ['r', 'R'], value: ['அ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-t' }, key: ['t', 'T'], value: ['இ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-y' }, key: ['y', 'Y'], value: ['ஈ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-u' }, key: ['u', 'U'], value: ['ஊ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-i' }, key: ['i', 'I'], value: ['ஐ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-o' }, key: ['o', 'O'], value: ['ஔ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-p' }, key: ['p', 'P'], value: ['ங', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketOpen' }, key: ['[', '{'], value: ['ஞ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketClose' }, key: [']', '}'], value: ['ண', ''] },
        { className: 'keyCommon-g key backslash', style: { gridArea: 'ff-backslash' }, key: ["\\", '|'], value: ['ழ', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g capslock', style: { gridArea: 'ff-caps' }, key: ['caps', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-a' }, key: ['a', 'A'], value: ['ஆ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-s' }, key: ['s', 'S'], value: ['ஏ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-d' }, key: ['d', 'D'], value: ['எ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-f' }, key: ['f', 'F'], value: ['உ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-g' }, key: ['g', 'G'], value: ['எ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-h' }, key: ['h', 'H'], value: ['ப', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-j' }, key: ['j', 'J'], value: ['ர', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-k' }, key: ['k', 'K'], value: ['க', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-l' }, key: ['l', 'L'], value: ['த', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-semiColon' }, key: [';', ':'], value: ['ச', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-quote' }, key: ["'", '"'], value: ['ட', ''] },
        { className: 'keyCommon-g keyOneLetter-g enter1', style: { gridArea: 'ff-enter' }, key: ['enter', ''], value: ['', ''] },
    
        { className: 'keyCommon-g shift-g leftshift', style: { gridArea: 'ff-leftShift' }, key: ['shift', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-z' }, key: ['z', 'Z'], value: ['ஸ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-x' }, key: ['x', 'X'], value: ['ஷ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-c' }, key: ['c', 'C'], value: ['ம', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-v' }, key: ['v', 'V'], value: ['ன', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-b' }, key: ['b', 'B'], value: ['வ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-n' }, key: ['n', 'N'], value: ['ள', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-m' }, key: ['m', 'M'], value: ['ந', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-coma' }, key: ['', '<'], value: [',', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-dot' }, key: ['', '>'], value: ['.', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-slesh' }, key: ['/', '?'], value: ['ய', ''] },
        { className: 'keyCommon-g shift-g rightshift', style:{gridArea:'ff-rightShift'}, key: ['shift', ''], value: ['',''] },
    
        {className:'keyCommon-g keyOneLetter-g leftctrl', style:{gridArea:'ff-ctrl'}, key: ['ctrl', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt'}, key: ['alt', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command'}, key: ['command', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetter-g space', style:{gridArea:'ff-space'}, key: ['space', ''], value: [' ',''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command-2'}, key: ['command', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt-2'}, key: ['alt', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-ctrl-2'}, key: ['ctrl', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-fn'}, key: ['', ''], value: ['',''] },
    ]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            let currentKey
            let shift
            switch (e.key) {
                case 'Backspace': currentKey = 'Backspace'; break;
                case 'Delete': currentKey = 'Delete'; break;
            
                case ' ': shift = false; currentKey = ' '; break;
            
                case '`': shift = false; currentKey = 'ொ'; break;
                case '1': shift = false; currentKey = '௧'; break;
                case '2': shift = false; currentKey = '௨'; break;
                case '3': shift = false; currentKey = '௩'; break;
                case '4': shift = false; currentKey = '௪'; break;
                case '5': shift = false; currentKey = '௫'; break;
                case '6': shift = false; currentKey = '௬'; break;
                case '7': shift = false; currentKey = '௭'; break;
                case '8': shift = false; currentKey = '௮'; break;
                case '9': shift = false; currentKey = '௯'; break;
                case '0': shift = false; currentKey = '௦'; break;
                case '-': shift = false; currentKey = 'none'; break;
                case '=': shift = false; currentKey = '்ரீ'; break;
            
                case '~': shift = true; currentKey = 'ஓ'; break;
                case '!': shift = true; currentKey = 'none'; break;
                case '@': shift = true; currentKey = 'none'; break;
                case '#': shift = true; currentKey = 'none'; break;
                case '$': shift = true; currentKey = 'none'; break;
                case '%': shift = true; currentKey = 'none'; break;
                case '^': shift = true; currentKey = 'none'; break;
                case '&': shift = true; currentKey = 'none'; break;
                case '*': shift = true; currentKey = 'none'; break;
                case '(': shift = true; currentKey = 'none'; break;
                case ')': shift = true; currentKey = 'none'; break;
                case '_': shift = true; currentKey = 'ஃ'; break;
                case '+': shift = true; currentKey = '௰'; break;
            
                case 'q': shift = false; currentKey = 'ௌ'; break;
                case 'w': shift = false; currentKey = 'ை'; break;
                case 'e': shift = false; currentKey = 'ா'; break;
                case 'r': shift = false; currentKey = 'ீ'; break;
                case 't': shift = false; currentKey = 'ூ'; break;
                case 'y': shift = false; currentKey = 'ப'; break;
                case 'u': shift = false; currentKey = 'ஹ'; break;
                case 'i': shift = false; currentKey = 'க'; break;
                case 'o': shift = false; currentKey = 'த'; break;
                case 'p': shift = false; currentKey = 'ஞ'; break;
                case '[': shift = false; currentKey = 'ட'; break;
                case ']': shift = false; currentKey = 'none'; break;
                case '\\': shift = false; currentKey = 'none'; break;
            
                case 'Q': shift = true; currentKey = 'ஔ'; break;
                case 'W': shift = true; currentKey = 'ஐ'; break;
                case 'E': shift = true; currentKey = 'ஆ'; break;
                case 'R': shift = true; currentKey = 'ஈ'; break;
                case 'T': shift = true; currentKey = 'ஊ'; break;
                case 'Y': shift = true; currentKey = 'ஶ'; break;
                case 'U': shift = true; currentKey = 'ங'; break;
                case 'I': shift = true; currentKey = 'க'; break;
                case 'O': shift = true; currentKey = 'த'; break;
                case 'P': shift = true; currentKey = 'ஞ'; break;
                case '{': shift = true; currentKey = 'ண'; break;
                case '}': shift = true; currentKey = 'ன'; break;
                case '|': shift = true; currentKey = 'none'; break;
            
                case 'a': shift = false; currentKey = 'ோ'; break;
                case 's': shift = false; currentKey = 'ே'; break;
                case 'd': shift = false; currentKey = '்'; break;
                case 'f': shift = false; currentKey = 'ி'; break;
                case 'g': shift = false; currentKey = 'ு'; break;
                case 'h': shift = false; currentKey = 'ட'; break;
                case 'j': shift = false; currentKey = 'ர'; break;
                case 'k': shift = false; currentKey = 'க'; break;
                case 'l': shift = false; currentKey = 'த'; break;
                case ';': shift = false; currentKey = 'ச'; break;
                case "'": shift = false; currentKey = 'ட'; break;
            
                case 'A': shift = true; currentKey = 'ஓ'; break;
                case 'S': shift = true; currentKey = 'ஏ'; break;
                case 'D': shift = true; currentKey = 'அ'; break;
                case 'F': shift = true; currentKey = 'இ'; break;
                case 'G': shift = true; currentKey = 'உ'; break;
                case 'H': shift = true; currentKey = 'த'; break;
                case 'J': shift = true; currentKey = 'ற'; break;
                case 'K': shift = true; currentKey = 'க'; break;
                case 'L': shift = true; currentKey = 'த'; break;
                case ':': shift = true; currentKey = 'ச'; break;
                case '"': shift = true; currentKey = 'ட'; break;
            
                case 'z': shift = false; currentKey = 'ெ'; break;
                case 'x': shift = false; currentKey = 'ம்'; break;
                case 'c': shift = false; currentKey = 'ம'; break;
                case 'v': shift = false; currentKey = 'ந'; break;
                case 'b': shift = false; currentKey = 'வ'; break;
                case 'n': shift = false; currentKey = 'ல'; break;
                case 'm': shift = false; currentKey = 'ச'; break;
                case ',': shift = false; currentKey = ','; break;
                case '.': shift = false; currentKey = '.'; break;
                case '/': shift = false; currentKey = 'ய'; break;
            }
            

            if (currentKey === 'Backspace') {
                setIsBackSpace(true)
                setTypedValue(prev => prev.slice(0, currentIndexOfTyping - 1));
                setCurrentIndexOfTyping((prev) =>{
                    if(prev > 0) return prev - 1
                    else return 0
                });
            }else if (/[\u0B80-\u0BFF\u0BE6-\u0BEFa-zA-Z0-9 ,.'-]/g.test(currentKey)&& currentKey.length === 1) {
                setTypedValue((prev) => [...prev,currentKey]);
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
                if(v!== initialDataN[i]){
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
        if(isTyping==='notStarted'&& typedValue.length>0){
            setIsTyping('started');
        }
        console.log(typedValue)
    },[typedValue])
    useEffect(() => {
        if(rest){
            let temI=Math.floor(data.data.length*Math.random())
            setCurrentDataN(temI);
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
        <div className='grid grid-cols-12 gap-4 w-auto'>
            <div id='textArea' className='col-span-12 bg-slate-200 p-5 shadow-xl rounded-md'>
                <TextBox initialDataN={initialDataN} currentIndexOfTyping={currentIndexOfTyping} typedValue={typedValue} />
            </div>
            <hr style={{height:'2px',borderWidth:0,color:'gray'}} className='col-span-12'/>
            <Keyboard keyboard={hindiKeyBoard} className='col-span-12' keyboardType='hindi' initialDataN={initialDataN} typedValue={typedValue}
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
