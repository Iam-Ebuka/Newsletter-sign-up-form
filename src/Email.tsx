import React, { useState } from 'react'

const Email: React.FC = () => {
    const [value, setValue] = useState<string>("")

    const handleChange = (): void => {
        console.log("hello")
    }

  return (
    <div className='mt-8'>
        <form>
            <label className='text-[12px] block font-bold mb-2'>Email address</label>
            <input 
            className='border rounded-lg border-[#c3bdbd] w-full h-[60px] text-[16px] pl-6' 
            type='email' 
            placeholder='email@company.com'
            value={value}
            onChange={handleChange}/>
            
            <button className='bg-[#1a1f3c] rounded-lg py-5 w-full text-white mt-6'>
                Subscribe to monthly newsletter
            </button>
        </form>



    </div>
  )
}

export default Email