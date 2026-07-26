import {Link} from 'react-router-dom'
import HeroImage from '../assets/hero.png';
import AboutImage from '../assets/about.png';
import { Mic, MessageSquare, Target, BarChart3, Users, ShieldCheck,  Mail, MapPin, Phone,  TrendingUp, Brain, Trophy} from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const features = [
    {
        icon: <Mic className="w-8 h-8 text-[#483dec]" />,
        title: "Guided Practice",
        description:
        "Practice with AI-powered speaking exercises tailored to your confidence level.",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-[#483dec]" />,
        title: "Instant Feedback",
        description:
        "Receive detailed feedback on clarity, pace, filler words and pronunciation.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-[#483dec]" />,
        title: "Progress Tracking",
        description:
        "Monitor your speaking improvement with personalized insights and milestones.",
    },
    {
        icon: <Target className="w-8 h-8 text-[#483dec]" />,
        title: "Personalized Journey",
        description:
        "Lessons adapt to your speaking style, goals and experience level.",
    },
    {
        icon: <Users className="w-8 h-8 text-[#483dec]" />,
        title: "Real-life Scenarios",
        description:
        "Practice interviews, presentations, meetings and public speaking situations.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-[#483dec]" />,
        title: "Safe Learning Space",
        description:
        "Build confidence in a judgment-free environment before speaking publicly.",
    }, 
]; 


function Landing() {
    
  return (
    <div className='w-full min-h-screen scroll-smooth bg-[#f8f8fc]'>
        {/* NavBar */}
      
      <nav className='fixed top-o left-0 w-full bg-white shadow-md z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */}
            <div className='flex items-baseline text-[#483dec]'>
                <Mic size={28}/>
                <span className='leading-none text-2xl flex font-bold'>ratify</span>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
                <li><a href="#about" className='hover:text-[#483dec]'>About</a></li>
                <li><a href="#howitworks" className='hover:text-[#483dec]'>How It Works</a></li>
                <li><a href="#features" className='hover:text-[#483dec]'>Features</a></li>
                <li><a href="#contact" className='hover:text-[#483dec]'>Contact</a></li>
            </ul>
            <Link to="/login" className='bg-[#483dec] text-white px-5 py-2 rounded-lg hover:bg-[#483dec] transition font-bold'>Sign Up</Link>
        </div>
      </nav>

        {/* Hero Section */}

        <section id='home' className='pt-22 min-h-screen flex items-center'>
            <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
                {/* Left */}
                <div>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'>Confidence Starts With <span className='text-[#483dec]' >{""}Your Voice</span></h1>
                    <p className='mt-6 text-gray-700'>Oratify helps you build real communication skills through daily lessons, live feedback, streaks, and rewards - no matter your starting point. Build confidence, improve communication and develop better public speaking skills with Oratify.</p>
                    <div className='mt-8 flex flex-col sm:flex-row gap-4 font-bold'>
                        <Link to='/login' className='bg-[#483dec] text-white px-6 py-3 rounded-lg text-center hover:bg-[#483dec]'>Get Started For Free</Link>
                        <a href='#about' className='border border-[#483dec] text-[#483dec] px-6 py-3 rounded-lg text-center'>Learn More</a>
                    </div>
                </div>

                {/* Right */}
                <div className='hidden md:relative md:flex justify-center items-center'>
                <div className="absolute w-[90%] h-[90%] rounded-[40px]-rotate-3 bg-[#483dec]/10 blur-3xl"></div>
                <img src={HeroImage} alt="Oratify App1" className="blur-none w-full max-w-md object-contain drop-shadow-2xl rounded-2xl"/>
            </div>
            </div>
        </section>
           {/* Ratings */}

        <section className='py-5 bg-[#e2dff8] shadow-2xl'>
            <div className='grid grid-cols-2 md:grid-cols-4  max-w-6xl mx-auto text-center justify-between'>
                <div>
                    <h1 className='text-3xl font-semibold text-[#483dec]'>10K+</h1>
                    <p>Active Listener</p>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-[#483dec]'>20+</h1>
                    <p>Learning Cards</p>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-[#483dec]'>98%</h1>
                    <p>Feel More Confident</p>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-[#483dec]'>Live</h1>
                    <p>AI Feedback</p>
                </div>
            </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className='relative flex justify-center items-center'>
                <div className="absolute w-[90%] h-[90%] rounded-[40px]-rotate-3 bg-[#483dec]/10 blur-3xl"></div>
                <img src={AboutImage} alt="Oratify App" className="blur-none w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-2xl"/>
            </div>
            {/* Right */}
            <div>
                <p className="text-[#483dec] font-semibold uppercase tracking-wider">
                    About Oratify
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
                    Build Confidence.
                    <br />
                    Speak With Impact.
                </h2>
                <p className="text-gray-600 mt-6 leading-8">Oratify is an AI-powered communication platform designed to help students, professionals, and aspiring leaders become confident communicators through personalized practice, guided learning, and intelligent feedback.
                <br /><br />
                Whether you're preparing for an interview, presentation, classroom discussion, debate, or everyday conversation, Oratify equips you with the tools to express yourself with clarity and confidence.</p>
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                    <div className="flex gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                            <Mic className="w-6 h-6 text-[#483dec]" />
                       </div>
                   <div>
                    <h4 className="font-semibold">Guided Practice</h4>
                    <p className="text-gray-500 text-sm mt-1">Build confidence through structured speaking exercises.</p>
               </div>
            </div>
            <div className="flex gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#483dec]" />
                </div>
                <div>
                    <h4 className="font-semibold">Progress Tracking</h4>
                    <p className="text-gray-500 text-sm mt-1">Monitor your improvement and celebrate every milestone.</p>
                </div>
           </div>
           <div className="flex gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#483dec]" />
            </div>
            <div>
                <h4 className="font-semibold">AI Feedback</h4>
                <p className="text-gray-500 text-sm mt-1">Receive personalized insights to improve your delivery.</p>
           </div>
           </div>
           <div className="flex gap-4 bg-gray-50 p-5 rounded-2xl hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[#483dec]" />
            </div>
            <div>
                <h4 className="font-semibold">Confidence Growth</h4>
                <p className="text-gray-500 text-sm mt-1">Become a more effective and impactful communicator.</p>
           </div>
           </div>
      </div>
      <button className="mt-10 bg-[#483dec] hover:bg-[#3b32c2] text-white px-8 py-3 rounded-xl font-semibold transition duration-300">Learn More</button>
      </div>
      </div>
   </section>

        {/* How It Works */}
        <section id="howitworks" className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center"> 
               <p className="text-[#483dec] font-semibold uppercase"> How It Works </p> 
               <h2 className="text-4xl font-bold mt-3"> 
                  Your journey starts in four simple steps 
               </h2> 
               <div className="grid md:grid-cols-4 gap-8 mt-16"> 
                 <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"> 
                     <div className="w-16 h-16 rounded-full bg-[#483dec] text-white flex items-center justify-center text-2xl font-bold mx-auto">1 </div> 
                     <h3 className="font-bold text-xl mt-6">Create Account </h3> 
                     <p className="text-gray-500 mt-3"> 
                         Register securely using your email or Google account. 
                     </p> 
                 </div> 
                 <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"> 
                     <div className="w-16 h-16 rounded-full bg-[#483dec] text-white flex items-center justify-center text-2xl font-bold mx-auto">2</div> 
                     <h3 className="font-bold text-xl mt-6"> Personalize </h3> 
                     <p className="text-gray-500 mt-3"> 
                         Answer a few questions so Oratify understands your goals. 
                     </p> 
                 </div> 
                 <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"> 
                     <div className="w-16 h-16 rounded-full bg-[#483dec] text-white flex items-center justify-center text-2xl font-bold mx-auto"> 3 </div> 
                     <h3 className="font-bold text-xl mt-6"> Practice </h3> 
                     <p className="text-gray-500 mt-3"> 
                         Receive tailored speaking exercises and practice sessions. 
                     </p> 
                 </div> 
                 <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"> 
                     <div className="w-16 h-16 rounded-full bg-[#483dec] text-white flex items-center justify-center text-2xl font-bold mx-auto"> 4 </div> 
                     <h3 className="font-bold text-xl mt-6"> Grow </h3> 
                     <p className="text-gray-500 mt-3"> 
                         Track your progress and become a confident speaker. 
                     </p> 
                 </div> 
             </div> 
         </div>
     </section>

        {/* Features */}
        <section id="features" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6"> 
                <h2 className="text-4xl font-bold text-center">Features </h2>
                <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">Everything you need to become a confident and effective speaker.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border hover:border-[#483dec]">
                            <div className="w-14 h-14 rounded-xl bg-[#e2dff8] flex items-center justify-center mb-6"> {feature.icon} </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-7">{feature.description}</p>
                        </div> 
                    ))} 
                </div> 
            </div> 
       </section> 

         {/* Contact */}
        <section id="contact" className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                <div>
                    <p className="text-[#483dec] font-semibold uppercase">Contact Us</p>
                    <h2 className="text-4xl font-bold mt-3">
                        Let's help you become
                        <br />
                        a confident speaker.
                    </h2>
                    <p className="text-gray-600 mt-6 leading-8">
                        Have questions, suggestions or feedback?
                        <br /><br />
                        We'd love to hear from you. Reach out and our team will respond as soon as possible.
                   </p>
                   <div className="space-y-6 mt-10">
                    <div>
                        <h4 className="font-semibold flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#483dec]" />Email
                        </h4>
                        <p className="text-gray-600 ml-8"> support@oratify.com</p>
                   </div>
                   <div>
                    <h4 className="font-semibold flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#483dec]" />Location
                    </h4>
                    <p className="text-gray-600 ml-8">Nigeria </p>
                   </div>
                   <div>
                    <h4 className="font-semibold flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#483dec]" />Phone
                    </h4>
                    <p className="text-gray-600 ml-8">+234 xxx xxx xxxx</p>
                   </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8">
                <form className="space-y-6">
                    <input type="text" placeholder="Your Name" className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#483dec]"/>

                    <input type="email" placeholder="Email Address" className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#483dec]"/>

                    <textarea
                    rows="6" placeholder="Write your message..." className="w-full border rounded-xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#483dec]"/>

                    <button className="w-full bg-[#483dec] hover:bg-[#3b32c2] text-white py-4 rounded-xl font-semibold transition">Send Message</button>
               </form>
           </div>
        </div>
   </section>

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
                            <a href="#home" className="hover:text-[#6E65FF] transition">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#6E65FF] transition">About</a>
                        </li>
                        <li>
                            <a href="#howitworks" className="hover:text-[#6E65FF] transition">How It Works</a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-[#6E65FF] transition">Features</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-[#6E65FF] transition">Contact</a>
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

export default Landing;