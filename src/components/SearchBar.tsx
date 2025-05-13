import React, { useState } from 'react'

interface Props {
    onSearch: (query : string) => void;
}

const SearchBar: React.FC<Props> = ({onSearch}) => {
    const [city , setCity] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === 'city') {
            setCity(value);
        }
    }
  return (
    <div className='flex justify-center items-center'>
        <input type='text' name='city' placeholder='Search' value={city} onChange={handleChange} className='border-2 border-gray-300 rounded-md p-2'/>
        <button onClick={() => onSearch(city)} className='ml-2 bg-blue-500 text-white rounded-md p-2'>Search</button>
    </div>
  )
}

export default SearchBar
