import React, { useState } from 'react'

const Email: React.FC = () => {
    const [value, setValue]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setValue(e.target.value);
        setError(false);
    }
    const handleSubmit = () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
            setError(true);
        } else {

        }
    }

  return (
    <div className='mt-8'>
        <div >
            <div className='text-[12px] font-bold mb-2 flex justify-between'>
            <label className=''>Email address</label>
            {error && <p className='text-red-500'>Valid email required</p>}
            </div>
            
            <input 
            className={`border 
            rounded-lg
            w-full 
            h-[60px] 
            text-[16px] 
            pl-6
            ${error ? 'border-red-500 bg-red-200 text-red-500' : 'border-[#c3bdbd]' }`}  
            type='email' 
            placeholder='email@company.com'
            value={value}
            onChange={handleChange}/>
            
            <button onClick={handleSubmit} className='bg-[#1a1f3c] hover:bg-[#040717] rounded-lg px-1 py-5 w-full text-white mt-6'>
                Subscribe to monthly newsletter
            </button>
        </div>



    </div>
  )
}

export default Email