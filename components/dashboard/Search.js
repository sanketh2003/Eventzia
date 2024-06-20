import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder,onChange}) => {
  return (
    <div className='container flex items-center gap-[10px] bg-[#503C3C] p-[10px] rounded-lg max-w-max'>
      <MdSearch />
      <input type='text' onChange={onChange} placeholder={placeholder} className='input bg-transparent border-none text-white   outline-none' />
    </div>
  )
}

export default Search
