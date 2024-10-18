import React from 'react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header>
       <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        {/* logo */}
        <Link href='/' className=' text-2xl font-extrabold group cursor-pointer'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600'>
            Auth
          </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600'>
            App
          </span>
        </Link>
        {/* nav */}
        <nav className=''>
          <ul className='flex gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/sign-in'>Sign In</Link>
            <SignedIn>
              <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </ul>
        </nav>

       </div>
    </header>
  )
}

export default Header