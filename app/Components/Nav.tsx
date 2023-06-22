import React from 'react'

type Props = {}

export  const Nav = (props: Props) => {
  return (
  <>
    <nav className="bg-gray-800 w-full ">
      <div className="container mx-auto px-4">
        <div className="flex items-center  justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">Logo</span>
          </div>
          <div className="flex  space-x-4 ">
            <a href="#" className="text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  
  </>
  )
}