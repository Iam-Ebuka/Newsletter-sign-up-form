import React from 'react'

interface Props {
    value: string, 
    error: boolean, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    handleSubmit: () => void
}

const Email: React.FC<Props> = ({value, error, handleChange, handleSubmit}) => {
    
   

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
            
            <button onClick={handleSubmit} className='bg-[#1a1f3c] hover:bg-[#f36a55] rounded-lg px-1 py-5 w-full text-white mt-6'>
                Subscribe to monthly newsletter
            </button>
        </div>



    </div>
  )
}

export default Email