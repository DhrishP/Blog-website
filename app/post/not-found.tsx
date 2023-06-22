import React from 'react'
import Link from 'next/link'

export default function notfound() {
  return (
    <>
    <div>OOs! Seem like an error occured </div>
    <Link href={'/'}>Click here to revert back to home page</Link>
    </>
  )
}
