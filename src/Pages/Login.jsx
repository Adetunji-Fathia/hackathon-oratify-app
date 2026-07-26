import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';
import { Check, Mic, Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email:"",
    password:""
  });

  const [notification, setNotification] = useState(
  {
    show: false,
    type: "",
    message: "",
  }
);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };

  const handleLogin=(e)=>{
  e.preventDefault()
  const savedUser=
    JSON.parse(
      localStorage.getItem("oratifyUser")
    )
  if(!savedUser){
    setNotification(
  {
    show: true,
    type: "error",
    message: "Account not found. Please create an account!",
  }
);
setTimeout(() => {
  setNotification({
    show: false,
    type:"",
    message: "",
  });
}, 3000);

    return;
  }
  if(
    form.email===savedUser.email &&
    form.password===savedUser.password
  ){
    setNotification(
  {
    show: true,
    type: "success",
    message: "Login Successful!",
  }
);
    setTimeout(()=>{
      navigate("/onboarding")
    },2000)
  } else{
    setNotification(
  {
    show: true,
    type: "error",
    message: "Account not found. Please create an account!",
  })
  }
};

  return (
    <div className='w-full min-h-screen scroll-smooth'>
    <nav className='fixed top-o left-0 w-full bg-white shadow-md z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */}
            <div className='flex items-baseline text-[#483dec]'>
                <Mic size={28}/>
                <Link to='/' className='leading-none text-2xl flex font-bold'>ratify</Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
                <li><HashLink smooth to="/#about" className='hover:text-[#483dec]'>About</HashLink></li>
                <li><HashLink smooth to="/#howitworks" className='hover:text-[#483dec]'>How It Works</HashLink></li>
                <li><HashLink smooth to="/#features" className='hover:text-[#483dec]'>Features</HashLink></li>
                <li><HashLink smooth to="/#contact" className='hover:text-[#483dec]'>Contact</HashLink></li>
            </ul>
            <Link to="/login" className='bg-[#483dec] text-white px-5 py-2 rounded-lg transition font-bold'>Sign Up</Link>
        </div>
      </nav>
    <div className="min-h-screen flex items-center pt-25 pb-20 justify-center bg-[#F8F8FC] px-4">

      { (notification.show &&
        <div className="fixed top-6 right-6 z-50">
        <div className="text-[#483dec] bg-white px-6 py-4 rounded-xl shadow-xl animate-slide">
        {/* <span className="text-xl"><Check size={25}/></span> */}
        <p>{notification.message}</p>
        </div>
        </div>)
    }
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#483dec]">
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
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-[#483dec]"
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
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-[#483dec]"
              required
            />

          </div>

          {/* BUTTON */}

          <button
            className="w-full bg-[#483dec] text-white py-3 font-semibold rounded-lg"
          >Login</button>

        </form>

        {/* SIGNUP LINK */}

        <p className="mt-6 text-center text-gray-600">
          No account yet?
          <Link
            to="/signup"
            className="text-[#483dec] ml-2 font-medium"
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
      <p className="text-sm mt-3 text-gray-500 text-center">By continuing, you agree to our <span className="text-[#483dec]">Terms of Service</span> and <span className="text-[#483dec]">Privacy Policy</span></p>
      </div>
      
    </div>
    {/* Footer */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo */}
                    <div>
                        <div className="flex items-center ">
                            <Mic className="w-8 h-8 text-[#483dec]" />
                            <h2 className="text-2xl font-bold">ratify</h2>
                       </div>
                       <p className="mt-5 text-gray-300 leading-7">Empowering confident communication through AI-powered speaking practice, personalized coaching and real-time feedback.</p>
                  </div>
                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>
                            <a href="/#home" className="hover:text-[#6E65FF] transition">Home</a>
                        </li>
                        <li>
                            <a href="/#about" className="hover:text-[#6E65FF] transition">About</a>
                        </li>
                        <li>
                            <a href="/#howitworks" className="hover:text-[#6E65FF] transition">How It Works</a>
                        </li>
                        <li>
                            <a href="/#features" className="hover:text-[#6E65FF] transition">Features</a>
                        </li>
                        <li>
                            <a href="/#contact" className="hover:text-[#6E65FF] transition">Contact</a>
                       </li>
                  </ul>
              </div>
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-5">Contact</h3>
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <Mail className="w-5 h-5 text-[#6E65FF]" />
                        <p className="text-gray-300">support@oratify.com</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Phone className="w-5 h-5 text-[#6E65FF]" />
                        <p className="text-gray-300">+234 xxx xxx xxxx</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MapPin className="w-5 h-5 text-[#6E65FF]" />
                        <p className="text-gray-300">Lagos, Nigeria</p>
                    </div>
                </div>
              </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-4">
                <a href="#" className="w-11 h-11 rounded-full bg-[#2D2960] flex items-center justify-center hover:bg-[#483DEC] transition">
                    <FaFacebook size={20} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-[#2D2960] flex items-center justify-center hover:bg-[#483DEC] transition">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-[#2D2960] flex items-center justify-center hover:bg-[#483DEC] transition">
                    <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-[#2D2960] flex items-center justify-center hover:bg-[#483DEC] transition">
                    <FaInstagram size={20} />
                </a>
           </div>
         </div>
       </div>
       {/* Bottom */}
       <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left"> &copy; {new Date().getFullYear()} Oratify. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
       </div>
     </div>
    </footer>
   </div>
  )

}

export default Login
