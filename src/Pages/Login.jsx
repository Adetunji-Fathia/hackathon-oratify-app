import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      )

    if(!savedUser){
      alert("No account found")
      return
    }

    if(
      form.email===savedUser.email &&
      form.password===savedUser.password
    ){
      alert("Login successful")
      navigate("/onboarding")
    }
    else{
      alert("Invalid email or password")
    }
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
    <div className="min-h-screen flex items-center pt-25 pb-20 justify-center bg-[#F8F8FC] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Welcome!</h1>
        <p className="text-center text-gray-600 mt-2">Sign in or Create an account to get started</p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          {/* EMAIL */}

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

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

            <label className="block mb-2 mt-3 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-600"
              required
            />

          </div>

          {/* BUTTON */}

          <button
            className="w-full bg-purple-600 text-white py-3 font-semibold rounded-lg hover:bg-purple-700"
          >Login</button>

        </form>

        {/* SIGNUP LINK */}

        <p className="mt-6 text-center text-gray-600">
          No account yet?
          <Link
            to="/signup"
            className="text-purple-600 ml-2 font-medium"
          >
            Create one
          </Link>
        </p>
        {/* DIVIDER */}
      <div className="flex mt-5 items-center gap-3">
        <div className="flex-1 h-px bg-gray-400"></div>
        <p className="text-sm text-gray-700">Or continue with</p>
        <div className="flex-1 h-px bg-gray-400"></div>
      </div>

      {/* Google Login */}
      <button className="w-full mt-4 border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 font-semibold hover:bg-gray-50 transition">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
        Google
      </button>

      {/* Agreement Reminder */}
      <p className="text-sm mt-3 text-gray-500 text-center">By continuing, you agree to our <span className="text-purple-500">Terms of Service</span> and <span className="text-purple-500">Privacy Policy</span></p>
      </div>
      
    </div>
    {/* Footer */}
        <footer className='bg-gray-900 text-white py-6'>
            <div className=' max-w-7xl mx-auto px-8 flex flex-cols md:flex-row items-center justify-between gap-4'>
                <h3 className='font-semibold'>Oratify</h3>
                <p className='text-gray-400 text-sm'> &copy; 2026. All rights reserved</p>
            </div>
        </footer>
   </div>
  )

}

export default Login
