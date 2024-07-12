import { Button, Label, TextInput } from "flowbite-react";
import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-4 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* Left */}
        <div className="flex-1">
        <Link
            to="/"
            className='font-bold dark:text-white text-4xl'
        >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                LyricFy
            </span>
        </Link>

        <p className='text-sm mt-5'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nulla nobis omnis, impedit dolores voluptates natus.
          Eum, facilis eaque. Incidunt aperiam iste provident officiis laborum ratione magnam tempore adipisci in?
        </p>

        </div>

        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput id="username" type="text" placeholder="Username" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput id="password" type="Password" required placeholder="" />
            </div>
                
            <Button gradientDuoTone="purpleToPink" type="submit">Submit</Button>
            <div className="flex flex-row gap-2 text-center justify-center mt-3">
              <p className="text-sm text-slate-900">Not Registered?</p>
                <Link to='/sign-up' className="text-sm text-blue-500 font-bold">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn