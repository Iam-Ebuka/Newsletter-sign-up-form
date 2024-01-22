import React from 'react'
import successIcon from "./assets/images/icon-success.svg"


interface Props {
    value: string,
    handleDismiss: () => void
}

const Modal: React.FC<Props> = ({value, handleDismiss}) => {
  return (
    <div className='fixed top-0 left-0 w-full 
    h-full md:bg-[#1b1b1b2e] z-20 md:flex
    md:items-center md:justify-center '>
        <div className='bg-[#ffffff] md:rounded-[40px]
        md:w-[550px] h-screen
        container px-6 pt-[120px] mx-auto
        md:h-[550px] md:pt-[60px] md:px-[65px]
        '>
            <div>
                <img src={successIcon} alt="correct" />
            </div>
            <div className='mt-[30px]'>
                <h1 className='text-[40px] md:text-[50px] md:leading-[50px] leading-10 font-bold'>Thanks for subscribing!</h1>
                <p className='mt-[25px] text-[18px] md:text-[20px]'>A confirmation email has been sent 
                to <span className='font-bold'>{value}</span>. Please open it and click the button inside to confirm your subscription</p>
            </div>
            <div className='w-[100%] mx-auto mt-[300px] md:mt-[20px]'>
                <button onClick={handleDismiss} className='bg-[#1a1f3c] 
                hover:bg-[#f36a55] hover:text-white rounded-lg px-1 
                py-5 w-full text-white mt-6 md:text-[20px]'>
                    Dismiss message
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal