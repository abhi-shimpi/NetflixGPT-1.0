import React from 'react'

function VideoTitle({title,overview}) {
    // console.log(title)
    // console.log(overview)
  return (
    <div className='absolute pt-[400px] px-[100px] pb-[100px] text-white bg-gradient-to-tr from-black w-full aspect-video'>   
        <h2 className='text-5xl font-bold mb-4'>{title}</h2>
        <p className='w-[30%] mb-4' >{overview}</p>
        <div className='flex gap-3'>
            <button className='py-2 px-5 rounded-md bg-white text-black flex gap-2 items-center hover:bg-opacity-60'>
                <img className='w-5' src={require("../assets/images/video_resume.png")}></img>
                <span>Play</span>
            </button>
            <button className='py-2 px-5 rounded-md bg-[#b1adad] text-white bg-opacity-50 flex gap-2 items-center'>
                <img className='w-5' src={require("../assets/images/more_info.png")}></img>
                <span>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle