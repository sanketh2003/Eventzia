'use client'
import Search from '@/components/dashboard/Search'
import Link from 'next/link'
import React, { useState } from 'react'
import Pagination from '@/components/dashboard/pagination'
import { data } from './data.js'

const createEvent = () => {
  const [search, setSearch] = useState('')

  return (

    <div className='container bg-[#321E1E] p-[20px] rounded-lg mt-[20px] text-white'>
      <div className="top flex items-center justify-between">
        <Search onChange={(e) => setSearch(e.target.value)} placeholder='Search for an event...' />
        <Link href="/dashboard/createEvent/add">
          <button className='addButton p-[10px] text-[#321E1E] border-none rounded-lg cursor-pointer bg-[#d4af37] font-bold'>Create Event</button></Link>
      </div>
      <table className='table  w-full'>
        <thead>
          <tr>
            <td className='p-[10px]'><b>Event Name</b></td>
            <td className='p-[10px]'><b>Status</b></td>
            <td className='p-[10px]'><b>Event Date</b></td>
            <td className='p-[10px]'><b>Amount</b></td>
            <td className='p-[10px]'><b>Action</b></td>
          </tr>
        </thead>
        <tbody>

          {data.filter((item) => {
            return search.toLowerCase() == '' ? item : item.EventName.toLowerCase().includes(search);

          }).map((item) => (
            <tr key={item.EventName}>
              <td className='p-[10px]'><div className='user flex gap-2 items-center flex-row'>{item.EventName}</div></td>
              <td className='p-[10px]'>{item.Status}</td>
              <td className='p-[10px]'>{item.EventDate}</td>
              <td className='p-[10px]'>{item.Amount}</td>
              <td className='p-[10px]'>
                <div className="buttons flex gap-2">
                  <Link href="/dashboard/createEvent/test"><button className='button px-[5px] py-[10px] rounded-lg border-none cursor-pointer view bg-teal-500'>View</button></Link>
                  <button className='button px-[5px] py-[10px] rounded-lg cursor-pointer delete border-none bg-red-500'>Delete</button>
                </div>
              </td>
            </tr>


          ))}



        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default createEvent
