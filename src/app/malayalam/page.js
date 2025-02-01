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
    const [malayalamKeyBoard,setMalayalamKeyboard]=useState([
        {className:'keyCommon-g key ', style:{gridArea:'ff-first'}, key: ['`', '~'], value: ['ൊ', 'ഒ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-one'}, key: ['1', '!'], value: ['൧', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-two'}, key: ['2', '@'], value: ['൨', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-three'}, key: ['3', '#'], value: ['൩', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-four'}, key: ['4', '$'], value: ['൪', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-five'}, key: ['5', '%'], value: ['൫', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-six'}, key: ['6', '^'], value: ['൬', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-seven'}, key: ['7', '&'], value: ['൭', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-eight'}, key: ['8', '*'], value: ['൮', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-nine'}, key: ['9', '('], value: ['൯', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-zero'}, key: ['0', ')'], value: ['൦', ''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-minus'}, key: ['-', '_'], value: ['', 'ഃ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-equalto'}, key: ['=', '+'], value: ['ൃ', 'ഋ'] },
        {className:'keyCommon-g keyOneLetter-g backspace', style:{gridArea:'ff-backspace'}, key: ['Backspace',''], value: ['',''] },
    
        {className:'keyCommon-g keyOneLetter-g tab', style:{gridArea:'ff-tab'}, key: ['tab', ''], value: ['',''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-q'}, key: ['q', 'Q'], value: ['ൗ', 'ഔ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-w'}, key: ['w', 'W'], value: ['ൈ', 'ഐ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-e'}, key: ['e', 'E'], value: ['ാ', 'ആ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-r'}, key: ['r', 'R'], value: ['ീ', 'ഈ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-t'}, key: ['t', 'T'], value: ['ൂ', 'ഊ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-y'}, key: ['y', 'Y'], value: ['ബ', 'ഭ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-u'}, key: ['u', 'U'], value: ['ഹ', 'ങ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-i'}, key: ['i', 'I'], value: ['ഗ', 'ഘ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-o'}, key: ['o', 'O'], value: ['ദ', 'ധ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-p'}, key: ['p', 'P'], value: ['ജ', 'ഝ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-squreBracketOpen'}, key: ['[', '{'], value: ['ഡ', 'ഢ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-squreBracketClose'}, key: [']', '}'], value: ['', 'ഞ'] },
        {className:'keyCommon-g key backslash', style:{gridArea:'ff-backslash'}, key: ["\\",'|'],value:['ർ','']},
    
        {className:'keyCommon-g keyOneLetter-g capslock', style:{gridArea:'ff-caps'}, key: ['caps', ''], value: ['',''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-a'}, key: ['a', 'A'], value: ['ോ', 'ഓ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-s'}, key: ['s', 'S'], value: ['േ', 'ഏ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-d'}, key: ['d', 'D'], value: ['്', 'അ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-f'}, key: ['f', 'F'], value: ['ി', 'ഇ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-g'}, key: ['g', 'G'], value: ['ു', 'ഉ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-h'}, key: ['h', 'H'], value: ['പ', 'ഫ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-j'}, key: ['j', 'J'], value: ['ര', 'റ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-k'}, key: ['k', 'K'], value: ['ക', 'ഖ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-l'}, key: ['l', 'L'], value: ['ത', 'ഥ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-semiColon'}, key: [';', ':'], value: ['ച', 'ഛ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-quote'}, key: ["'", '"'], value: ['ട', 'ഠ'] },
        {className:'keyCommon-g keyOneLetter-g enter1', style:{gridArea:'ff-enter'}, key: ['enter', ''], value: ['',''] },
    
        {className:'keyCommon-g shift-g leftshift', style:{gridArea:'ff-leftShift'}, key: ['shift', ''], value: ['',''] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-z'}, key: ['z', 'Z'], value: ['െ', 'എ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-x'}, key: ['x', 'X'], value: ['ം', 'ൺ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-c'}, key: ['c', 'C'], value: ['മ', 'ണ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-v'}, key: ['v', 'V'], value: ['ന', 'ൻ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-b'}, key: ['b', 'B'], value: ['വ', 'ഴ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-n'}, key: ['n', 'N'], value: ['ല', 'ള'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-m'}, key: ['m', 'M'], value: ['സ', 'ശ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-coma'}, key: [' ', '<'], value: [',', 'ഷ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-dot'}, key: [' ', '>'], value: ['.', 'ൽ'] },
        {className:'keyCommon-g key ', style:{gridArea:'ff-slesh'}, key: ['/', '?'], value: ['യ', ''] },
        {className:'keyCommon-g shift-g rightshift', style:{gridArea:'ff-rightShift'}, key: ['shift', ''], value: ['',''] },
    
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
        console.log(initialDataN)
        const handleKeyDown = (e) => {
            let currentKey
            let shift
            switch(e.key){
                case 'Backspace': currentKey='Backspace'; break;
                case 'Delete': currentKey='Delete'; break;

                case ' ':shift=false; currentKey=' '; break;
                
                case '`':shift=false; currentKey='ൊ'; break;
                case '1':shift=false; currentKey='൧'; break;
                case '2':shift=false; currentKey='൨'; break;
                case '3':shift=false; currentKey='൩'; break;
                case '4':shift=false; currentKey='൪'; break;
                case '5':shift=false; currentKey='൫'; break;
                case '6':shift=false; currentKey='൬'; break;
                case '7':shift=false; currentKey='൭'; break;
                case '8':shift=false; currentKey='൮'; break;
                case '9':shift=false; currentKey='൯'; break;
                case '0':shift=false; currentKey='൦'; break;
                case '-':shift=false; currentKey='none'; break;
                case '=':shift=false; currentKey='ൃ'; break;

                case '~':shift=true; currentKey='ഒ';break;
                case '!':shift=true; currentKey='none';break;
                case '@':shift=true; currentKey='none';break;
                case '#':shift=true; currentKey='none';break;
                case '$':shift=true; currentKey='none';break;
                case '%':shift=true; currentKey='none';break;
                case '^':shift=true; currentKey='none';break;
                case '&':shift=true; currentKey='none';break;
                case '*':shift=true; currentKey='none';break;
                case '(':shift=true; currentKey='none';break;
                case ')':shift=true; currentKey='none';break;
                case '_':shift=true; currentKey='ഃ';break;
                case '+':shift=true; currentKey='ഋ';break;

                case 'q':shift=false; currentKey='ൌ'; break;
                case 'w':shift=false; currentKey='ൈ'; break;
                case 'e':shift=false; currentKey='ാ'; break;
                case 'r':shift=false; currentKey='ീ'; break;
                case 't':shift=false; currentKey='ൂ'; break;
                case 'y':shift=false; currentKey='ബ'; break;
                case 'u':shift=false; currentKey='ഹ'; break;
                case 'i':shift=false; currentKey='ഗ'; break;
                case 'o':shift=false; currentKey='ദ'; break;
                case 'p':shift=false; currentKey='ജ'; break;
                case '[':shift=false; currentKey='ഡ'; break;
                case ']':shift=false; currentKey='none'; break;
                case '\\':shift=false; currentKey='none'; break;

                case 'Q':shift=true; currentKey='ഔ';break;
                case 'W':shift=true; currentKey='ഐ';break;
                case 'E':shift=true; currentKey='ആ';break;
                case 'R':shift=true; currentKey='ഈ';break;
                case 'T':shift=true; currentKey='ഊ';break;
                case 'Y':shift=true; currentKey='ഭ';break;
                case 'U':shift=true; currentKey='ങ';break;
                case 'I':shift=true; currentKey='ഘ';break;
                case 'O':shift=true; currentKey='ധ';break;
                case 'P':shift=true; currentKey='ഝ';break;
                case '{':shift=true; currentKey='ഢ';break;
                case '}':shift=true; currentKey='ഞ';break;
                case '|':shift=true; currentKey='none';break;

                case 'a':shift=false; currentKey='ോ'; break;
                case 's':shift=false; currentKey='േ'; break;
                case 'd':shift=false; currentKey='്'; break;
                case 'f':shift=false; currentKey='ി'; break;
                case 'g':shift=false; currentKey='ു'; break;
                case 'h':shift=false; currentKey='പ'; break;
                case 'j':shift=false; currentKey='ര'; break;
                case 'k':shift=false; currentKey='ക'; break;
                case 'l':shift=false; currentKey='ത'; break;
                case ';':shift=false; currentKey='ച'; break;
                case "'":shift=false; currentKey='ട'; break;

                case 'A':shift=true; currentKey='ഓ';break;
                case 'S':shift=true; currentKey='ഏ';break;
                case 'D':shift=true; currentKey='അ';break;
                case 'F':shift=true; currentKey='ഇ';break;
                case 'G':shift=true; currentKey='ഉ';break;
                case 'H':shift=true; currentKey='ഫ';break;
                case 'J':shift=true; currentKey='റ';break;
                case 'K':shift=true; currentKey='ഖ';break;
                case 'L':shift=true; currentKey='ഥ';break;
                case ':':shift=true; currentKey='ഛ';break;
                case '"':shift=true; currentKey='ഠ';break;
               
                case 'z':shift=false; currentKey='െ'; break;
                case 'x':shift=false; currentKey='ം'; break;
                case 'c':shift=false; currentKey='മ'; break;
                case 'v':shift=false; currentKey='ന'; break;
                case 'b':shift=false; currentKey='വ'; break;
                case 'n':shift=false; currentKey='ല'; break;
                case 'm':shift=false; currentKey='സ'; break;
                case ',':shift=false; currentKey=','; break;
                case '.':shift=false; currentKey='.'; break;
                case '/':shift=false; currentKey='യ'; break;
                
                case 'Z':shift=true; currentKey='എ';break;
                case 'X':shift=true; currentKey='ൺ';break;
                case 'C':shift=true; currentKey='ണ';break;
                case 'V':shift=true; currentKey='ൻ';break;
                case 'B':shift=true; currentKey='ഴ';break;
                case 'N':shift=true; currentKey='ള';break;
                case 'M':shift=true; currentKey='ശ';break;
                case '<':shift=true; currentKey='ഷ';break;
                case '>':shift=true; currentKey='ൽ';break;
                case '?':shift=true; currentKey='none';break;
            }

            if (currentKey === 'Backspace') {
                setIsBackSpace(true)
                setTypedValue(prev => prev.slice(0, currentIndexOfTyping - 1));
                setCurrentIndexOfTyping((prev) =>{
                    if(prev > 0) return prev - 1
                    else return 0
                });
            }else if (/[\u0D00-\u0D7Fa-zA-Z0-9 ,.'-]/g.test(currentKey)&& currentKey.length === 1) {
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
    },[typedValue])

    useEffect(() => {
        if(rest){
            let temI=Math.floor(data.data.length*Math.random())
            setCurrentDataN(temI)
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
            <Keyboard keyboard={malayalamKeyBoard} className='col-span-12' keyboardType='malayalam' initialDataN={initialDataN} typedValue={typedValue}
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
