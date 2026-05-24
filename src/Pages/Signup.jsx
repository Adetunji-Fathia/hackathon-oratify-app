import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {HashLink} from "react-router-hash-link"

function SignUp() {
  const navigate = useNavigate()
  const [form,setForm]=useState({
    fullname:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSignup=(e)=>{
    e.preventDefault()
    if(
      form.password!==form.confirmPassword
    ){
      alert(
        "Passwords do not match"
      )
      return
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        fullname:form.fullname,
        email:form.email,
        password:form.password
      })
    )
    alert(
      "Account created successfully"
    )
    navigate("/login")
  }

  return (
    <div className='w-full min-h-screen scroll-smooth'>
    <nav className='fixed top-o left-0 w-full bg-white shadow-md z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */}
            <h1 className='text-2xl font-bold text-purple-700'><Link to="/">Oratify</Link></h1>

            {/* Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
                <li><HashLink smooth to="/#home" className='hover:text-purple-600'>Home</HashLink></li>
                <li><HashLink smooth to="/#about" className='hover:text-purple-600'>About</HashLink></li>
                <li><HashLink smooth to="/#features" className='hover:text-purple-600'>Features</HashLink></li>
                <li><HashLink smooth to="/#contact" className='hover:text-purple-600'>Contact</HashLink></li>
            </ul>
            <Link to="/login" className='bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition font-bold'>Sign Up</Link>
        </div>
      </nav>
    <div className="min-h-screen flex items-center justify-center pt-25 pb-20 bg-[#F8F8FC] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mt-2">Find Your Voice. Own Every Conversation</p>

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-5"
        >
          {/* NAME */}

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-600"
              required
            />
          </div>

          {/* CONFIRM */}

          <div>
            <label className="block mb-2 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-600"
              required
            />
          </div>

          <button
            className="w-full bg-purple-600 text-white py-3 font-semibold rounded-lg hover:bg-purple-700">Create Account</button>

        </form>

        <p className="mt-6 text-center text-gray-600">Already have an account?
          <Link
            to="/login"
            className="ml-2 text-purple-600 font-medium"
          >Login</Link>
        </p>
      </div>
    </div>
    {/* Footer */}
        <footer className='bg-gray-900 text-white py-6'>
            <div className=' max-w-7xl mx-auto px-8 flex flex-cols md:flex-row items-center justify-between gap-4'>
                <h3 className='font-semibold'>Oratify</h3>
                <p className='text-gray-400 text-sm'> &copy; 2026 All. rights reserved</p>
            </div>
        </footer>
</div>
  )

}

export default SignUp;
