import {Link} from 'react-router-dom'
import HeroImage from '../assets/hero.png';
import AboutImage from '../assets/about.png';


function Landing() {
  return (
    <div className='w-full min-h-screen scroll-smooth bg-[#f8f8fc]'>
        {/* NavBar */}
      
      <nav className='fixed top-o left-0 w-full bg-white shadow-md z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */}
            <h1 className='text-2xl font-bold text-purple-700'>Oratify</h1>

            {/* Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
                <li><a href="#home" className='hover:text-purple-600'>Home</a></li>
                <li><a href="#about" className='hover:text-purple-600'>About</a></li>
                <li><a href="#features" className='hover:text-purple-600'>Features</a></li>
                <li><a href="#contact" className='hover:text-purple-600'>Contact</a></li>
            </ul>
            <Link to="/login" className='bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition font-bold'>Sign Up</Link>
        </div>
      </nav>

        {/* Hero Section */}

        <section id='home' className='pt-22 min-h-screen flex items-center'>
            <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
                {/* Left */}
                <div>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>Confidence Starts With <span className='text-purple-600' >{""}Your Voice</span></h1>
                    <p className='mt-6 text-gray-700 text-2xl'>Build confidence, improve communication and develop better speaking public speaaking skills with Oratify.</p>
                    <div className='mt-8 flex flex-col sm:flex-row gap-4 font-bold'>
                        <Link to='/login' className='bg-purple-600 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-700'>Get Started</Link>
                        <a href='#about' className='border border-purple-600 text-purple-600 px-6 py-3 rounded-lg text-center'>Learn More</a>
                    </div>
                </div>

                {/* Right */}
                <div className='flex'>
                    <img src={HeroImage} alt="Hero Image" className=' w-full max-w-md rounded-xl shadow-lg object-cover' />
                </div>
            </div>
        </section>

        {/* About */}
        <section id='about' className='pt-10 pb-5 bg-white'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-8'>About Oratify</h2>
                <div className=' mt-6 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
                    {/* Left */}
                <div className='flex'>
                    <img src={AboutImage} alt="Hero Image" className=' w-full max-w-md rounded-xl shadow-lg object-cover' />
                </div>
                    {/* Right */}
                    <div className=''>
                     <p className=' text-black max-w-3xl mx-auto leading-8 text-2xl text-left'>Oratify is a communication and public speaking development platform designed to help people speak with confidence, clarity and impact.
                        Whether you are a student preparing for presentations, a professional improving workplace communication or someone overcoming speaking anxiety, Oratify provides guided support tailored to your growth journey.
                     </p>
                     </div>
                </div>
            </div>
            {/* Stat cards */}
            <div className='grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto'>
                <div className='bg-purple-50 p-6 rounded-xl'>
                    <h3 className='text-2xl font-bold'>Confidence</h3>
                    <p> Build speaking confidence</p>
                </div>
                <div className='bg-purple-50 p-6 rounded-xl'>
                    <h3 className='text-2xl font-bold'> Practice</h3>
                    <p>Guided communication training</p>
                </div>
                <div className='bg-purple-50 p-6 rounded-xl'>
                    <h3 className='text-2xl font-bold'>Growth</h3>
                    <p>Track improvement with time</p>
                </div>
            </div>
        </section>

        {/* Features */}
        <section id='features' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-center'>Features</h2>
                <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='bg-white rounded 2xl shadow p-6'>
                        <h3 className='text-xl font-bold'>Guided Practice</h3>
                        <p className='mt-3 text-gray-800'>Practice speaking with structured sessions.</p>
                    </div>
                    <div className='bg-white rounded 2xl shadow p-6'>
                        <h3 className='text-xl font-bold'>Feedback</h3>
                        <p className='mt-3 text-gray-800'>Receive feedback and improve communication</p>
                    </div>
                    <div className='bg-white rounded 2xl shadow p-6'>
                        <h3 className='text-xl font-bold'>Growth Tracking</h3>
                        <p className='mt-3 text-gray-800'>Track speaking growth and confidence progress</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact */}
        <section id='contact' className='py-20 bg-white'>
            <div className='max-w-6xl mx-auto flex flex-center justify-center'>
                <div>
                    <h3 className='text-3xl md:text-4xl font-bold text-center'>Contact Us</h3>
                    {/* Form */}
                    <form className='mt-5 w-full bg-[#f8f8fc] p-8 rounded-2xl shadow'>
                        {/* Email */}
                        <div>
                            <label className='block mb-2 font-medium'>Email</label>
                            <input type='email'
                            placeholder='you@example.com' className='md:w-100 placeholder-gray-500 sm:w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600' />
                        </div>
                        {/* Message */}
                        <div>
                            <label className='block mb-2 font-medium mt-4'>Message</label>
                            <textarea rows="5" placeholder='Write your message....' className='w-full border placeholder-gray-500 border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600'></textarea>
                        </div>
                        {/* Button */}
                        
                        <button type="submit" className='w-full bg-purple-600 text-white py-3 rounded-lg hover:border-purple-700 mt-4 font-bold transition'>Send message</button>
                        
                    </form>
                </div>
                {/* <div className='flex justify-center'>
                    <ul className='mt-15 text-2xl'>
                        <li>Address</li>
                        <li>IG Handle</li>
                        <li>Gmail</li>
                        <li>Phone Number</li>
                    </ul>
                </div> */}
            </div>
        </section>

        {/* Footer */}
        <footer className='bg-gray-900 text-white py-6'>
            <div className=' max-w-7xl mx-auto px-8 flex flex-cols md:flex-row items-center justify-between gap-4'>
                <h3 className='text-2xl'>Oratify</h3>
                <p className='text-gray-400 text-sm'> &copy; 2026 All. rights reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default Landing;