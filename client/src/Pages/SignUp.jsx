import React from 'react'
import './signup.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" className="border p-3 rounded-lg" id='username' placeholder='Username' />
        <input type="email" className="border p-3 rounded-lg" id='email' placeholder='Email' />
        <input type="password" className="border p-3 rounded-lg" id='password' placeholder='Password' />

        <button className="signup-button p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>

        <div className='flex gap-2 mt-5'>
          <p>Have an Account ?</p>
          <Link to={"/sign-in"}><span className='sign-in-span'>Sign In</span></Link>
        </div>
      </form>
    </div>
  )
}
