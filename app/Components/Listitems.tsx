import { dateconverter } from '@/lib/dateconverter';
import React from 'react'
import Link from 'next/link';
type Props ={
  post:Meta
}

const Listitems = ({post}: Props) => {
  const {id,title,date} = post
    const NewDate = dateconverter(date);
  return (
    <Link className='bg-slate-100  cursor-pointer flex justify-between shadow-md' href={`/post/${id}`}> 
     
        <div>
        <h2 className='font-semibold '>{title}</h2>
        </div>
        <div>
            <h5 className='text-xs text-end'>{NewDate}</h5>
            
        </div>
       

    </Link>  
  )
}

export default Listitems