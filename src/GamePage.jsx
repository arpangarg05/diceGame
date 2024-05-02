import React, { useState } from 'react'

export default function GamePage() {
    const [score, setScore] = useState(0);
    const [number, selectNumber] = useState();
    const [notSelected, setSelected] = useState(true);
    const [rulesExpanded, setRulesExpanded] = useState(false);


    const [dice, setDice] = useState("src/assets/dice_"+2+".png")


    const generateRandomNumber = ()=>{
        let x = Math.floor((Math.random() * 6) + 1);
        setDice("src/assets/dice_"+x+".png")
        console.log(x+" "+number);
        if(x===number){setScore((prev) => prev + 1)}
        else{setScore((prev) => prev>1?prev - 2:prev)}
        
    }
  return (
    <div className='h-screen '>
        <h1 className= {notSelected ? `ml-[80%] pt-5 text-red-500 `: `pt-5 invisible`} >You have not selected any number</h1>
        <div className='w-4/5  mx-auto mt-5 flex'>
            <div className='flex flex-col '>
                <h1 className='font-bold text-8xl mt-4 mx-auto'>{score}</h1>
                <h1 className='text-[24px] mt-auto'>Total Score</h1>
            </div>
            
            
            
            <div className=' ml-auto mt-4 flex-col flex'>
                <div className='flex gap-4'>
                    <button className={!notSelected && (number==1)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(1), setSelected(false))}>1</button>
                    <button className={!notSelected && (number==2)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(2), setSelected(false))}>2</button>
                    <button className={!notSelected && (number==3)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(3), setSelected(false))}>3</button>
                    <button className={!notSelected && (number==4)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(4), setSelected(false))}>4</button>
                    <button className={!notSelected && (number==5)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(5), setSelected(false))}>5</button>
                    <button className={!notSelected && (number==6)?`w-[72px] h-[72px] border-[1px] bg-gray-500 border-black font-bold text-3xl`:`w-[72px] h-[72px] border-[1px] border-black font-bold text-3xl `} onClick={()=>(selectNumber(6), setSelected(false))}>6</button>
                </div>
                <div className='mt-auto ml-auto mb-2'>
                    <h1 className='text-[24px] font-bold'>Select Number</h1>
                </div>
            </div>

        </div>
            <div className=' flex flex-col mt-7'>
                <img className='w-[250px] h-[250px] mx-auto ' src={dice} alt="" onClick={number?generateRandomNumber:()=>console.log("No set no")}/>
                <h1 className='text-2xl mx-auto mt-2 '>Click on the dice to roll</h1>
                <button className='w-[250px] mt-7 border-[1px] border-black bg-white text-black rounded-md py-2 mx-auto' onClick={()=>(selectNumber(), setScore(0), setSelected(true))}>
                    Reset Score
                </button>
                <button className='w-[250px] mt-5  bg-black text-white rounded-md py-2 mx-auto' onClick={()=>(setRulesExpanded(prev=>!prev))}>
                    {rulesExpanded ? "Show":"Hide"} Rules
                </button>
                <div className={!rulesExpanded? `flex flex-col mx-auto mt-10 bg-red-100 p-3`: `flex flex-col mx-auto mt-10 bg-red-100 p-3 invisible` }>
                    <h1 className='text-3xl font-bold'>How to play dice game</h1>
                    <p className='mt-5'>Select any Number <br /> Click on dice image <br />after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you get wrong guess then  2 point will be dedcuted </p>
                </div>
            </div>
    </div>
  )
}
