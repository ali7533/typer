import React, { useState, useEffect } from 'react';
import './style.css'
import Time from '../comman/Time/Time';
import TextBox from '../comman/TextBox/TextBox';
import Keyboard from '../comman/keyBoard/KeyBoard';

export default function TypingBox(props) {
    const [currentDataN, setCurrentDataN] = useState([Math.floor(props.dataN.data.length*Math.random())]);
    const [initialDataN, setInitialDataN] = useState(props.dataN.data[currentDataN]);
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
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-first' }, key: ['`', '~'], value: ['़', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-one' }, key: ['1', '!'], value: ['१', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-two' }, key: ['2', '@'], value: ['२', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-three' }, key: ['3', '#'], value: ['३', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-four' }, key: ['4', '$'], value: ['४', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-five' }, key: ['5', '%'], value: ['५', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-six' }, key: ['6', '^'], value: ['६', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-seven' }, key: ['7', '&'], value: ['७', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-eight' }, key: ['8', '*'], value: ['८', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-nine' }, key: ['9', '('], value: ['९', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-zero' }, key: ['0', ')'], value: ['०', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-minus' }, key: ['-', '_'], value: ['-', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-equalto' }, key: ['=', '+'], value: ['ृ', 'ऋ'] },
        { className: 'keyCommon-g keyOneLetter-g backspace', style: { gridArea: 'ff-backspace' }, key: ['Backspace', ''], value: ['', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g tab', style: { gridArea: 'ff-tab' }, key: ['tab', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-q' }, key: ['q', 'Q'], value: ['ौ', 'औ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-w' }, key: ['w', 'W'], value: ['ै', 'ऐ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-e' }, key: ['e', 'E'], value: ['ा', 'आ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-r' }, key: ['r', 'R'], value: ['ी', 'ई'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-t' }, key: ['t', 'T'], value: ['ू', 'ऊ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-y' }, key: ['y', 'Y'], value: ['ब', 'भ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-u' }, key: ['u', 'U'], value: ['ह', 'ङ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-i' }, key: ['i', 'I'], value: ['ग', 'घ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-o' }, key: ['o', 'O'], value: ['द', 'ध'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-p' }, key: ['p', 'P'], value: ['ज', 'झ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketOpen' }, key: ['[', '{'], value: ['ड', 'ढ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-squreBracketClose' }, key: [']', '}'], value: ['', 'ञ'] },
        { className: 'keyCommon-g key backslash', style: { gridArea: 'ff-backslash' }, key: ["\\", '|'], value: ['।', ''] },
    
        { className: 'keyCommon-g keyOneLetter-g capslock', style: { gridArea: 'ff-caps' }, key: ['caps', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-a' }, key: ['a', 'A'], value: ['ो', 'ओ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-s' }, key: ['s', 'S'], value: ['े', 'ए'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-d' }, key: ['d', 'D'], value: ['्', 'अ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-f' }, key: ['f', 'F'], value: ['ि', 'इ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-g' }, key: ['g', 'G'], value: ['ु', 'उ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-h' }, key: ['h', 'H'], value: ['प', 'फ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-j' }, key: ['j', 'J'], value: ['र', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-k' }, key: ['k', 'K'], value: ['क', 'ख'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-l' }, key: ['l', 'L'], value: ['त', 'थ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-semiColon' }, key: [';', ':'], value: ['च', 'छ'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-quote' }, key: ["'", '"'], value: ['ट', 'ठ'] },
        { className: 'keyCommon-g keyOneLetter-g enter1', style: { gridArea: 'ff-enter' }, key: ['enter', ''], value: ['', ''] },
    
        { className: 'keyCommon-g shift-g leftshift', style: { gridArea: 'ff-leftShift' }, key: ['shift', ''], value: ['', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-z' }, key: ['z', 'Z'], value: ['े', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-x' }, key: ['x', 'X'], value: ['ं', 'ण'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-c' }, key: ['c', 'C'], value: ['म', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-v' }, key: ['v', 'V'], value: ['न', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-b' }, key: ['b', 'B'], value: ['व', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-n' }, key: ['n', 'N'], value: ['ल', ''] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-m' }, key: ['m', 'M'], value: ['स', 'श'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-coma' }, key: ['', '<'], value: [',', 'ष'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-dot' }, key: ['', '>'], value: ['.', '।'] },
        { className: 'keyCommon-g key ', style: { gridArea: 'ff-slesh' }, key: ['/', '?'], value: ['य', ''] },
        { className: 'keyCommon-g shift-g rightshift', style:{gridArea:'ff-rightShift'}, key: ['shift', ''], value: ['',''] },
    
        {className:'keyCommon-g keyOneLetter-g leftctrl', style:{gridArea:'ff-ctrl'}, key: ['ctrl', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt'}, key: ['alt', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command'}, key: ['command', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetter-g space', style:{gridArea:'ff-space'}, key: ['space', ''], value: [' ',''] },
        {className:'keyCommon-g keyOneLetter-g command', style:{gridArea:'ff-command-2'}, key: ['command', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g', style:{gridArea:'ff-alt-2'}, key: ['alt', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-ctrl-2'}, key: ['ctrl', ''], value: ['',''] },
        {className:'keyCommon-g keyOneLetterSmall-g ', style:{gridArea:'ff-fn'}, key: ['', ''], value: ['',''] },

    ])
    useEffect(() => {
        const handleKeyDown = (e) => {
            let currentKey
            let shift
            switch (e.key) {
                case 'Backspace': currentKey = 'Backspace'; break;
                case 'Delete': currentKey = 'Delete'; break;
            
                case ' ': shift = false; currentKey = ' '; break;
            
                case '`': shift = false; currentKey = 'ॊ'; break;
                case '1': shift = false; currentKey = '१'; break;
                case '2': shift = false; currentKey = '२'; break;
                case '3': shift = false; currentKey = '३'; break;
                case '4': shift = false; currentKey = '४'; break;
                case '5': shift = false; currentKey = '५'; break;
                case '6': shift = false; currentKey = '६'; break;
                case '7': shift = false; currentKey = '७'; break;
                case '8': shift = false; currentKey = '८'; break;
                case '9': shift = false; currentKey = '९'; break;
                case '0': shift = false; currentKey = '०'; break;
                case '-': shift = false; currentKey = 'none'; break;
                case '=': shift = false; currentKey = 'ृ'; break;
            
                case '~': shift = true; currentKey = 'ओ'; break;
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
                case '_': shift = true; currentKey = 'ः'; break;
                case '+': shift = true; currentKey = 'ऋ'; break;
            
                case 'q': shift = false; currentKey = 'ौ'; break;
                case 'w': shift = false; currentKey = 'ै'; break;
                case 'e': shift = false; currentKey = 'ा'; break;
                case 'r': shift = false; currentKey = 'ी'; break;
                case 't': shift = false; currentKey = 'ू'; break;
                case 'y': shift = false; currentKey = 'ब'; break;
                case 'u': shift = false; currentKey = 'ह'; break;
                case 'i': shift = false; currentKey = 'ग'; break;
                case 'o': shift = false; currentKey = 'द'; break;
                case 'p': shift = false; currentKey = 'ज'; break;
                case '[': shift = false; currentKey = 'ड'; break;
                case ']': shift = false; currentKey = 'none'; break;
                case '\\': shift = false; currentKey = 'none'; break;
            
                case 'Q': shift = true; currentKey = 'औ'; break;
                case 'W': shift = true; currentKey = 'ऐ'; break;
                case 'E': shift = true; currentKey = 'आ'; break;
                case 'R': shift = true; currentKey = 'ई'; break;
                case 'T': shift = true; currentKey = 'ऊ'; break;
                case 'Y': shift = true; currentKey = 'भ'; break;
                case 'U': shift = true; currentKey = 'ङ'; break;
                case 'I': shift = true; currentKey = 'घ'; break;
                case 'O': shift = true; currentKey = 'ध'; break;
                case 'P': shift = true; currentKey = 'झ'; break;
                case '{': shift = true; currentKey = 'ढ'; break;
                case '}': shift = true; currentKey = 'ञ'; break;
                case '|': shift = true; currentKey = 'none'; break;
            
                case 'a': shift = false; currentKey = 'ो'; break;
                case 's': shift = false; currentKey = 'े'; break;
                case 'd': shift = false; currentKey = '्'; break;
                case 'f': shift = false; currentKey = 'ि'; break;
                case 'g': shift = false; currentKey = 'ु'; break;
                case 'h': shift = false; currentKey = 'प'; break;
                case 'j': shift = false; currentKey = 'र'; break;
                case 'k': shift = false; currentKey = 'क'; break;
                case 'l': shift = false; currentKey = 'त'; break;
                case ';': shift = false; currentKey = 'च'; break;
                case "'": shift = false; currentKey = 'ट'; break;
            
                case 'A': shift = true; currentKey = 'ओ'; break;
                case 'S': shift = true; currentKey = 'ए'; break;
                case 'D': shift = true; currentKey = 'अ'; break;
                case 'F': shift = true; currentKey = 'इ'; break;
                case 'G': shift = true; currentKey = 'उ'; break;
                case 'H': shift = true; currentKey = 'फ'; break;
                case 'J': shift = true; currentKey = 'ऱ'; break;
                case 'K': shift = true; currentKey = 'ख'; break;
                case 'L': shift = true; currentKey = 'थ'; break;
                case ':': shift = true; currentKey = 'छ'; break;
                case '"': shift = true; currentKey = 'ठ'; break;
            
                case 'z': shift = false; currentKey = 'े'; break;
                case 'x': shift = false; currentKey = 'ं'; break;
                case 'c': shift = false; currentKey = 'म'; break;
                case 'v': shift = false; currentKey = 'न'; break;
                case 'b': shift = false; currentKey = 'व'; break;
                case 'n': shift = false; currentKey = 'ल'; break;
                case 'm': shift = false; currentKey = 'स'; break;
                case ',': shift = false; currentKey = ','; break;
                case '.': shift = false; currentKey = '.'; break;
                case '/': shift = false; currentKey = 'य'; break;
            
                case 'Z': shift = true; currentKey = 'ए'; break;
                case 'X': shift = true; currentKey = 'ण'; break;
                case 'C': shift = true; currentKey = 'ञ'; break;
                case 'V': shift = true; currentKey = 'न'; break;
                case 'B': shift = true; currentKey = 'ळ'; break;
                case 'N': shift = true; currentKey = 'ण'; break;
                case 'M': shift = true; currentKey = 'श'; break;
                case '<': shift = true; currentKey = 'ष'; break;
                case '>': shift = true; currentKey = 'ल'; break;
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
            let temI=Math.floor(props.dataN.data.length*Math.random())
            setCurrentDataN(temI);
            setInitialDataN(props.dataN.data[currentDataN]);
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
