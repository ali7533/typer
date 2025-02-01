import React from 'react'

function MistakenLetter({value,index,currentIndexOfTyping}){
    return(<>
        <span className="text-lg font-bold text-center bg-[rgba(210,100,100,.8)]">{value}</span>
    </>)
}
function CorrectLetter({value,index,currentIndexOfTyping}){
    return(<>
        <span className="text-lg font-bold text-center bg-green-500">{value}</span>
    </>)
}
function UndefinedLetters({value,index,currentIndexOfTyping}){
    return(<>
        <span className="text-lg font-bold text-center">{value}</span>
    </>)
}
function CurrentKey({value,index,currentIndexOfTyping}){
    return(<>
        <span className="text-lg font-bold text-center bg-yellow-500">{value}</span>
    </>)
}
function TextBox({initialDataN,typedValue,currentIndexOfTyping}) {
  return (
    <React.Fragment >
        {initialDataN.data.map((v,i)=>{
            if(v==typedValue[i]){
                return(<CorrectLetter key={i} value={v} index={i} currentIndexOfTyping={currentIndexOfTyping}/>)
            }else if(i===currentIndexOfTyping){
                return(<CurrentKey key={i} value={v} index={i} currentIndexOfTyping={currentIndexOfTyping}/>)
            }else if(typedValue[i]===undefined){
                return(<UndefinedLetters key={i} value={v} index={i} currentIndexOfTyping={currentIndexOfTyping}/>)
            }else if(v!==typedValue[i]){
                return(<MistakenLetter key={i} value={v} index={i} currentIndexOfTyping={currentIndexOfTyping}/>)
            }
        })}
    </React.Fragment>
  )
}

export default TextBox