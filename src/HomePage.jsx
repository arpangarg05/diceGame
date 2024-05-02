import React from 'react'

export default function HomePage({scrollToGamePage}) {
  return (
    <div className='h-screen'>
        <div className='w-[1182px] h-[522px] mx-auto pt-[250px] flex '>
            <div className='w-1/2 h-full '>
            <img src="src/assets/dices 1.png" alt="" />
            </div>
            <div className='w-1/2 h-full  flex flex-col align-middle gap-0'>
                <h1 className='text-[96px] mr-auto mt-[150px] font-bold my-auto'>Dice Game</h1>
                <button className='bg-black rounded-md w-[220px] text-white ] ml-auto mb-[300px]  py-1 inline' onClick={scrollToGamePage}>Play Now</button>

            </div>
        </div>
    </div>
  )
}
