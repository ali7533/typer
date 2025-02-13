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
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-first' }, key: ['`', '~'], value: ['్', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-one' }, key: ['1', '!'], value: ['౧', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-two' }, key: ['2', '@'], value: ['౨', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-three' }, key: ['3', '#'], value: ['౩', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-four' }, key: ['4', '$'], value: ['౪', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-five' }, key: ['5', '%'], value: ['౫', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-six' }, key: ['6', '^'], value: ['౬', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-seven' }, key: ['7', '&'], value: ['౭', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-eight' }, key: ['8', '*'], value: ['౮', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-nine' }, key: ['9', '('], value: ['౯', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-zero' }, key: ['0', ')'], value: ['౦', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-minus' }, key: ['-', '_'], value: ['-', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-equalto' }, key: ['=', '+'], value: ['ృ', 'ౠ'] },
        { className: 'keyCommon-g keyOneLetter-g backspace', style: { gridArea: 'ff-backspace' }, key: ['Backspace', ''], value: ['', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g tab', style: { gridArea: 'ff-tab' }, key: ['tab', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-q' }, key: ['q', 'Q'], value: ['ఔ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-w' }, key: ['w', 'W'], value: ['ఐ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-e' }, key: ['e', 'E'], value: ['ఆ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-r' }, key: ['r', 'R'], value: ['ఈ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-t' }, key: ['t', 'T'], value: ['ఊ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-y' }, key: ['y', 'Y'], value: ['బ', 'భ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-u' }, key: ['u', 'U'], value: ['హ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-i' }, key: ['i', 'I'], value: ['గ', 'ఘ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-o' }, key: ['o', 'O'], value: ['ద', 'ధ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-p' }, key: ['p', 'P'], value: ['జ', 'ఝ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketOpen' }, key: ['[', '{'], value: ['డ', 'ఢ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketClose' }, key: [']', '}'], value: ['ఞ', ''] },
        { className: 'keyCommon-g key backslash', style: { gridArea: 'ff-backslash' }, key: ["\\", '|'], value: ['।', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g capslock', style: { gridArea: 'ff-caps' }, key: ['caps', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-a' }, key: ['a', 'A'], value: ['ఓ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-s' }, key: ['s', 'S'], value: ['ఏ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-d' }, key: ['d', 'D'], value: ['అ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-f' }, key: ['f', 'F'], value: ['ఇ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-g' }, key: ['g', 'G'], value: ['ఉ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-h' }, key: ['h', 'H'], value: ['ప', 'ఫ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-j' }, key: ['j', 'J'], value: ['ర', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-k' }, key: ['k', 'K'], value: ['క', 'ఖ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-l' }, key: ['l', 'L'], value: ['త', 'థ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-semiColon' }, key: [';', ':'], value: ['చ', 'ఛ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-quote' }, key: ["'", '"'], value: ['ట', 'ఠ'] },
        { className: 'keyCommon-g keyOneLetter-g enter1', style: { gridArea: 'ff-enter' }, key: ['enter', ''], value: ['', ''] },
    
        { className: 'keyCommon-g shift-g leftshift', style: { gridArea: 'ff-leftShift' }, key: ['shift', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-z' }, key: ['z', 'Z'], value: ['ఎ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-x' }, key: ['x', 'X'], value: ['ం', 'ణ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-c' }, key: ['c', 'C'], value: ['మ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-v' }, key: ['v', 'V'], value: ['న', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-b' }, key: ['b', 'B'], value: ['వ', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-n' }, key: ['n', 'N'], value: ['ల', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-m' }, key: ['m', 'M'], value: ['స', 'శ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-coma' }, key: ['', '<'], value: [',', 'ష'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-dot' }, key: ['', '>'], value: ['.', '।'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-slesh' }, key: ['/', '?'], value: ['య', ''] },
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
                
                case '`': shift = false; currentKey = 'ొ'; break;
                case '1': shift = false; currentKey = '౧'; break;
                case '2': shift = false; currentKey = '౨'; break;
                case '3': shift = false; currentKey = '౩'; break;
                case '4': shift = false; currentKey = '౪'; break;
                case '5': shift = false; currentKey = '౫'; break;
                case '6': shift = false; currentKey = '౬'; break;
                case '7': shift = false; currentKey = '౭'; break;
                case '8': shift = false; currentKey = '౮'; break;
                case '9': shift = false; currentKey = '౯'; break;
                case '0': shift = false; currentKey = '౦'; break;
                case '-': shift = false; currentKey = 'none'; break;
                case '=': shift = false; currentKey = 'ౄ'; break;
                
                case '~': shift = true; currentKey = 'ఓ'; break;
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
                case '_': shift = true; currentKey = 'ః'; break;
                case '+': shift = true; currentKey = '౸'; break;
                
                case 'q': shift = false; currentKey = 'ౌ'; break;
                case 'w': shift = false; currentKey = 'ై'; break;
                case 'e': shift = false; currentKey = 'ా'; break;
                case 'r': shift = false; currentKey = 'ీ'; break;
                case 't': shift = false; currentKey = 'ూ'; break;
                case 'y': shift = false; currentKey = 'బ'; break;
                case 'u': shift = false; currentKey = 'హ'; break;
                case 'i': shift = false; currentKey = 'గ'; break;
                case 'o': shift = false; currentKey = 'ద'; break;
                case 'p': shift = false; currentKey = 'జ'; break;
                case '[': shift = false; currentKey = 'డ'; break;
                case ']': shift = false; currentKey = 'none'; break;
                case '\\': shift = false; currentKey = 'none'; break;
                
                case 'Q': shift = true; currentKey = 'ఔ'; break;
                case 'W': shift = true; currentKey = 'ఐ'; break;
                case 'E': shift = true; currentKey = 'ఆ'; break;
                case 'R': shift = true; currentKey = 'ఈ'; break;
                case 'T': shift = true; currentKey = 'ఊ'; break;
                case 'Y': shift = true; currentKey = 'భ'; break;
                case 'U': shift = true; currentKey = 'ఙ'; break;
                case 'I': shift = true; currentKey = 'ఘ'; break;
                case 'O': shift = true; currentKey = 'ధ'; break;
                case 'P': shift = true; currentKey = 'ఝ'; break;
                case '{': shift = true; currentKey = 'ఢ'; break;
                case '}': shift = true; currentKey = 'ఞ'; break;
                case '|': shift = true; currentKey = 'none'; break;
                
                case 'a': shift = false; currentKey = 'ో'; break;
                case 's': shift = false; currentKey = 'ే'; break;
                case 'd': shift = false; currentKey = '్'; break;
                case 'f': shift = false; currentKey = 'ి'; break;
                case 'g': shift = false; currentKey = 'ు'; break;
                case 'h': shift = false; currentKey = 'ప'; break;
                case 'j': shift = false; currentKey = 'ర'; break;
                case 'k': shift = false; currentKey = 'క'; break;
                case 'l': shift = false; currentKey = 'త'; break;
                case ';': shift = false; currentKey = 'చ'; break;
                case "'": shift = false; currentKey = 'ట'; break;
                
                case 'A': shift = true; currentKey = 'ఓ'; break;
                case 'S': shift = true; currentKey = 'ఏ'; break;
                case 'D': shift = true; currentKey = 'అ'; break;
                case 'F': shift = true; currentKey = 'ఇ'; break;
                case 'G': shift = true; currentKey = 'ఉ'; break;
                case 'H': shift = true; currentKey = 'ఫ'; break;
                case 'J': shift = true; currentKey = 'ఱ'; break;
                case 'K': shift = true; currentKey = 'ఖ'; break;
                case 'L': shift = true; currentKey = 'థ'; break;
                case ':': shift = true; currentKey = 'ఛ'; break;
                case '"': shift = true; currentKey = 'ఠ'; break;
                
                case 'z': shift = false; currentKey = 'ె'; break;
                case 'x': shift = false; currentKey = 'ం'; break;
                case 'c': shift = false; currentKey = 'మ'; break;
                case 'v': shift = false; currentKey = 'న'; break;
                case 'b': shift = false; currentKey = 'వ'; break;
                case 'n': shift = false; currentKey = 'ల'; break;
                case 'm': shift = false; currentKey = 'స'; break;
                case ',': shift = false; currentKey = ','; break;
                case '.': shift = false; currentKey = '.'; break;
                case '/': shift = false; currentKey = 'య'; break;
                
                case 'Z': shift = true; currentKey = 'ఏ'; break;
                case 'X': shift = true; currentKey = 'ణ'; break;
                case 'C': shift = true; currentKey = 'ఞ'; break;
                case 'V': shift = true; currentKey = 'న'; break;
                case 'B': shift = true; currentKey = 'ళ'; break;
                case 'N': shift = true; currentKey = 'ణ'; break;
                case 'M': shift = true; currentKey = 'శ'; break;
                case '<': shift = true; currentKey = 'ష'; break;
                case '>': shift = true; currentKey = 'ల'; break;
                case '?': shift = true; currentKey = 'none'; break;
                
            }
            

            if (currentKey === 'Backspace') {
                setIsBackSpace(true)
                setTypedValue(prev => prev.slice(0, currentIndexOfTyping - 1));
                setCurrentIndexOfTyping((prev) =>{
                    if(prev > 0) return prev - 1
                    else return 0
                });
            }else if (/[\u0900-\u097Fa-zA-Z0-9 ,.'-]/g.test(currentKey)&& currentKey.length === 1) {
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
